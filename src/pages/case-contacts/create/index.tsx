import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createCaseContacts } from 'apiSdk/case-contacts';
import { caseContactsValidationSchema } from 'validationSchema/case-contacts';
import { RenamedcaseInterface } from 'interfaces/renamedcase';
import { ContactInterface } from 'interfaces/contact';
import { getRenamedcases } from 'apiSdk/renamedcases';
import { getContacts } from 'apiSdk/contacts';
import { CaseContactsInterface } from 'interfaces/case-contacts';

function CaseContactsCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: CaseContactsInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createCaseContacts(values);
      resetForm();
      router.push('/case-contacts');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<CaseContactsInterface>({
    initialValues: {
      case_id: (router.query.case_id as string) ?? null,
      contact_id: (router.query.contact_id as string) ?? null,
    },
    validationSchema: caseContactsValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Case Contacts',
              link: '/case-contacts',
            },
            {
              label: 'Create Case Contacts',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Case Contacts
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <AsyncSelect<RenamedcaseInterface>
            formik={formik}
            name={'case_id'}
            label={'Select Renamedcase'}
            placeholder={'Select Renamedcase'}
            fetcher={getRenamedcases}
            labelField={'number'}
          />
          <AsyncSelect<ContactInterface>
            formik={formik}
            name={'contact_id'}
            label={'Select Contact'}
            placeholder={'Select Contact'}
            fetcher={getContacts}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/case-contacts')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'case_contacts',
    operation: AccessOperationEnum.CREATE,
  }),
)(CaseContactsCreatePage);
