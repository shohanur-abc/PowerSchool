import type { Metadata } from 'next';

import {
  CredentialsTable,
  BulkActions,
} from '@/features/dashboard/users';

// TODO: Replace static data with API calls to fetch credential information
// TODO: Integrate with authentication service for real-time MFA and password status

const credentials = [
  { id: 'USR-001', name: 'Rajesh Kumar', username: 'rajesh.kumar', lastPasswordChange: '2026-01-15', mfaStatus: 'enabled' as const, loginAttempts: 0 },
  { id: 'USR-002', name: 'Sunita Verma', username: 'sunita.verma', lastPasswordChange: '2026-02-05', mfaStatus: 'enabled' as const, loginAttempts: 0 },
  { id: 'USR-003', name: 'Anil Joshi', username: 'anil.joshi', lastPasswordChange: '2025-11-20', mfaStatus: 'disabled' as const, loginAttempts: 2 },
  { id: 'USR-004', name: 'Deepa Nair', username: 'deepa.nair', lastPasswordChange: '2026-01-28', mfaStatus: 'enabled' as const, loginAttempts: 0 },
  { id: 'USR-005', name: 'Meena Rao', username: 'meena.rao', lastPasswordChange: '2025-08-12', mfaStatus: 'disabled' as const, loginAttempts: 5 },
  { id: 'USR-006', name: 'Vikram Sharma', username: 'vikram.sharma', lastPasswordChange: '2026-02-10', mfaStatus: 'enabled' as const, loginAttempts: 0 },
  { id: 'USR-007', name: 'Padma Krishnan', username: 'padma.krishnan', lastPasswordChange: '2025-10-05', mfaStatus: 'pending' as const, loginAttempts: 1 },
  { id: 'USR-008', name: 'Suresh Patil', username: 'suresh.patil', lastPasswordChange: '2026-02-01', mfaStatus: 'enabled' as const, loginAttempts: 0 },
  { id: 'USR-009', name: 'Kavita Deshmukh', username: 'kavita.deshmukh', lastPasswordChange: '2025-12-18', mfaStatus: 'enabled' as const, loginAttempts: 0 },
  { id: 'USR-010', name: 'Ramesh Iyer', username: 'ramesh.iyer', lastPasswordChange: '2025-06-30', mfaStatus: 'disabled' as const, loginAttempts: 4 },
  { id: 'USR-011', name: 'Anjali Bhatt', username: 'anjali.bhatt', lastPasswordChange: '2026-01-22', mfaStatus: 'enabled' as const, loginAttempts: 0 },
  { id: 'USR-012', name: 'Mohit Saxena', username: 'mohit.saxena', lastPasswordChange: '2025-09-14', mfaStatus: 'disabled' as const, loginAttempts: 3 },
];

export const metadata: Metadata = {
  title: 'User Credentials',
  description:
    'Manage user credentials, password policies, and multi-factor authentication settings for all school system users.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <CredentialsTable
        title="Credential Management"
        credentials={credentials}
      />

      <BulkActions title="Bulk Actions" selectedCount={0} />
    </div>
  );
}
