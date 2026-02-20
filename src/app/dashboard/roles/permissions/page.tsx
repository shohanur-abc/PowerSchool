import type { Metadata } from 'next';

import { PermissionMatrix, ModulePermissions } from '@/features/dashboard/roles';

// TODO: Replace static data with API calls to fetch permissions from the database
// TODO: Add server actions for updating permission assignments

const permissionRoles = [
  { label: 'Super Admin', value: 'super-admin' },
  { label: 'Principal', value: 'principal' },
  { label: 'Vice Principal', value: 'vice-principal' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Class Teacher', value: 'class-teacher' },
  { label: 'Accountant', value: 'accountant' },
  { label: 'Parent', value: 'parent' },
  { label: 'Student', value: 'student' },
];

const permissionModules = [
  { id: 'dashboard', name: 'Dashboard' },
  { id: 'attendance', name: 'Attendance' },
  { id: 'results', name: 'Results & Examinations' },
  { id: 'fees', name: 'Fee Management' },
  { id: 'students', name: 'Student Management' },
  { id: 'staff', name: 'Staff Management' },
  { id: 'notices', name: 'Notices & Communication' },
  { id: 'reports', name: 'Reports & Analytics' },
  { id: 'timetable', name: 'Timetable' },
  { id: 'settings', name: 'System Settings' },
];

const permissionsList = ['read', 'write', 'delete'];

const permissionMatrix: Record<string, Record<string, boolean>> = {
  dashboard: { read: true, write: true, delete: true },
  attendance: { read: true, write: true, delete: true },
  results: { read: true, write: true, delete: true },
  fees: { read: true, write: true, delete: true },
  students: { read: true, write: true, delete: true },
  staff: { read: true, write: true, delete: true },
  notices: { read: true, write: true, delete: true },
  reports: { read: true, write: true, delete: true },
  timetable: { read: true, write: true, delete: true },
  settings: { read: true, write: true, delete: true },
};

const modulePermissions = [
  {
    id: 'mod-dashboard',
    name: 'Dashboard',
    permissions: ['View Overview', 'View Statistics', 'Access Quick Actions', 'View Announcements'],
  },
  {
    id: 'mod-attendance',
    name: 'Attendance',
    permissions: ['Mark Attendance', 'View Attendance', 'Edit Attendance', 'Generate Attendance Reports', 'Manage Corrections'],
  },
  {
    id: 'mod-results',
    name: 'Results & Examinations',
    permissions: ['Create Exam', 'Enter Marks', 'Publish Results', 'View Results', 'Generate Report Cards', 'Manage Grading'],
  },
  {
    id: 'mod-fees',
    name: 'Fee Management',
    permissions: ['Collect Fees', 'View Fee Status', 'Generate Receipts', 'Manage Fee Structure', 'Track Dues', 'Fee Reports'],
  },
  {
    id: 'mod-students',
    name: 'Student Management',
    permissions: ['Add Student', 'Edit Student', 'View Student Profile', 'Manage Admissions', 'Transfer Students', 'Delete Student'],
  },
  {
    id: 'mod-staff',
    name: 'Staff Management',
    permissions: ['Add Staff', 'Edit Staff', 'View Staff Profile', 'Manage Assignments', 'Approve Leave', 'Delete Staff'],
  },
  {
    id: 'mod-notices',
    name: 'Notices & Communication',
    permissions: ['Create Notice', 'Edit Notice', 'View Notices', 'Send Messages', 'Manage Circulars', 'Delete Notice'],
  },
  {
    id: 'mod-reports',
    name: 'Reports & Analytics',
    permissions: ['View Reports', 'Generate Reports', 'Export Reports', 'Custom Reports'],
  },
  {
    id: 'mod-timetable',
    name: 'Timetable',
    permissions: ['Create Timetable', 'Edit Timetable', 'View Timetable', 'Manage Substitutions'],
  },
  {
    id: 'mod-settings',
    name: 'System Settings',
    permissions: ['Manage Settings', 'Configure Modules', 'Manage Integrations', 'View Audit Logs', 'Backup & Restore'],
  },
];

export const metadata: Metadata = {
  title: 'Permissions',
  description:
    'View and manage the permission matrix across roles and modules. Configure read, write, and delete access for each role in the school management system.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <PermissionMatrix
        title="Permission Matrix"
        roles={permissionRoles}
        modules={permissionModules}
        permissions={permissionsList}
        matrix={permissionMatrix}
        selectedRole="super-admin"
      />

      <ModulePermissions
        title="Module Permissions"
        modules={modulePermissions}
      />
    </div>
  );
}
