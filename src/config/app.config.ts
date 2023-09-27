interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Bailiff', 'Accountant', 'Clerk'],
  tenantName: 'Bailiff',
  applicationName: 'OthoMatic',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read contact information', 'Read case contacts', 'Read case notes', 'Read case bookings'],
  ownerAbilities: [
    'Manage contacts',
    'Manage case contacts',
    'Manage case notes',
    'Manage case bookings',
    'Manage cases',
    'Manage users',
    'Manage bailiffs',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/c923e938-fef5-4741-a6fd-abaaac0ce51e',
};
