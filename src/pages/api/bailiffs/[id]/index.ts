import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { bailiffValidationSchema } from 'validationSchema/bailiffs';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.bailiff
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getBailiffById();
    case 'PUT':
      return updateBailiffById();
    case 'DELETE':
      return deleteBailiffById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getBailiffById() {
    const data = await prisma.bailiff.findFirst(convertQueryToPrismaUtil(req.query, 'bailiff'));
    return res.status(200).json(data);
  }

  async function updateBailiffById() {
    await bailiffValidationSchema.validate(req.body);
    const data = await prisma.bailiff.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    if (req.body.name) {
      await roqClient.asUser(roqUserId).updateTenant({ id: user.tenantId, tenant: { name: req.body.name } });
    }
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteBailiffById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.bailiff.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
