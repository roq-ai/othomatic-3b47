const mapping: Record<string, string> = {
  bailiffs: 'bailiff',
  renamedcases: 'Renamedcase',
  'case-bookings': 'case_booking',
  'case-contacts': 'case_contacts',
  'case-notes': 'case_notes',
  contacts: 'contact',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
