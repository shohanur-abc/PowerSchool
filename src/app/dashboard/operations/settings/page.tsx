import type { Metadata } from 'next';

import {
  SchoolInfo,
  AcademicConfig,
} from '@/features/dashboard/operations';

// TODO: Replace static data with API calls to fetch school settings
// TODO: Integrate with settings service for live configuration management

const schoolInfo = {
  name: 'Saraswati Vidya Mandir Senior Secondary School',
  address: '12, Shastri Nagar, Jaipur, Rajasthan 302016',
  phone: '+91 141 2567890',
  email: 'info@saraswatividyamandir.edu.in',
  website: 'https://saraswatividyamandir.edu.in',
};

const academicConfig = {
  currentSession: '2025–26',
  gradingSystem: 'cbse-cce',
  minAttendancePercent: 75,
  lateFeeAmount: 500,
  gracePeriodDays: 7,
};

const gradingSystems = [
  { label: 'CBSE CCE', value: 'cbse-cce' },
  { label: 'ICSE', value: 'icse' },
  { label: 'State Board', value: 'state-board' },
  { label: 'IB', value: 'ib' },
  { label: 'IGCSE', value: 'igcse' },
];

export const metadata: Metadata = {
  title: 'School Settings',
  description:
    'View and manage school information, academic year configuration, term structure, working days, and grading system settings.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <SchoolInfo
        title="School Information"
        defaultValues={schoolInfo}
      />
      <AcademicConfig
        title="Academic Configuration"
        defaultValues={academicConfig}
        gradingSystems={gradingSystems}
      />
    </div>
  );
}
