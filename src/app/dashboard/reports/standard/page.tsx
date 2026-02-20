import type { Metadata } from 'next';

import {
  ReportCatalog,
  ReportParameters,
  GeneratedReport,
} from '@/features/dashboard/reports';

// TODO: Replace static data with API calls to fetch report catalog from backend
// TODO: Integrate with report engine for dynamic parameter loading and generation

const categories = [
  {
    id: 'academic',
    name: 'Academic Reports',
    icon: 'GraduationCap',
    reports: [
      {
        id: 'STD-ACAD-001',
        name: 'Term Examination Result Sheet',
        description: 'Consolidated marks and grades for all subjects with class rank and division',
        icon: 'FileSpreadsheet',
      },
      {
        id: 'STD-ACAD-002',
        name: 'Report Card (CBSE Format)',
        description: 'Individual student report card as per CBSE CCE/scholastic grading pattern',
        icon: 'FileText',
      },
      {
        id: 'STD-ACAD-003',
        name: 'Subject-wise Performance Analysis',
        description: 'Average marks, pass percentage, and toppers for each subject across sections',
        icon: 'BarChart3',
      },
      {
        id: 'STD-ACAD-004',
        name: 'Co-Scholastic Activity Record',
        description: 'Grades for art, music, sports, and work education as per CBSE guidelines',
        icon: 'Palette',
      },
      {
        id: 'STD-ACAD-005',
        name: 'Board Exam Preparation Tracker',
        description: 'Pre-board marks comparison and readiness assessment for Class X and XII students',
        icon: 'Target',
      },
    ],
  },
  {
    id: 'attendance',
    name: 'Attendance Reports',
    icon: 'CalendarCheck',
    reports: [
      {
        id: 'STD-ATT-001',
        name: 'Monthly Attendance Register',
        description: 'Day-wise attendance for all students in a class for the selected month',
        icon: 'Calendar',
      },
      {
        id: 'STD-ATT-002',
        name: 'Low Attendance Alert Report',
        description: 'Students with attendance below 75% as required for CBSE board eligibility',
        icon: 'AlertTriangle',
      },
      {
        id: 'STD-ATT-003',
        name: 'Staff Attendance Summary',
        description: 'Teaching and non-teaching staff attendance with CL, EL, and medical leave breakdown',
        icon: 'UserCheck',
      },
      {
        id: 'STD-ATT-004',
        name: 'Section-wise Attendance Comparison',
        description: 'Comparative attendance rates across all sections for the selected date range',
        icon: 'BarChart',
      },
    ],
  },
  {
    id: 'financial',
    name: 'Financial Reports',
    icon: 'IndianRupee',
    reports: [
      {
        id: 'STD-FIN-001',
        name: 'Fee Collection Statement',
        description: 'Term-wise fee collection status with paid, pending, and overdue amounts per class',
        icon: 'Receipt',
      },
      {
        id: 'STD-FIN-002',
        name: 'Outstanding Dues Report',
        description: 'List of students with pending fee dues sorted by amount and duration',
        icon: 'AlertCircle',
      },
      {
        id: 'STD-FIN-003',
        name: 'Scholarship & Concession Register',
        description: 'Students receiving RTE, SC/ST, merit-based, or staff-ward fee concessions',
        icon: 'Award',
      },
      {
        id: 'STD-FIN-004',
        name: 'Transport Fee Collection',
        description: 'Route-wise transport fee status with pending and collected amounts',
        icon: 'Bus',
      },
    ],
  },
  {
    id: 'administrative',
    name: 'Administrative Reports',
    icon: 'Building2',
    reports: [
      {
        id: 'STD-ADM-001',
        name: 'Student Enrolment Register',
        description: 'Class and section-wise student strength with gender, category, and admission details',
        icon: 'Users',
      },
      {
        id: 'STD-ADM-002',
        name: 'Transfer Certificate Records',
        description: 'TC issued and received during the session with student migration details',
        icon: 'FileOutput',
      },
      {
        id: 'STD-ADM-003',
        name: 'Staff Profile Directory',
        description: 'Complete staff directory with qualifications, designation, and joining date',
        icon: 'Contact',
      },
      {
        id: 'STD-ADM-004',
        name: 'UDISE+ Data Summary',
        description: 'Unified District Information System data as required for annual government submission',
        icon: 'Database',
      },
    ],
  },
  {
    id: 'compliance',
    name: 'Compliance Reports',
    icon: 'ShieldCheck',
    reports: [
      {
        id: 'STD-CMP-001',
        name: 'CBSE Affiliation Compliance',
        description: 'Checklist of CBSE affiliation requirements with current compliance status',
        icon: 'ClipboardCheck',
      },
      {
        id: 'STD-CMP-002',
        name: 'RTE Compliance Report',
        description: 'Right to Education Act compliance — EWS admissions, infrastructure, and PTR norms',
        icon: 'Scale',
      },
      {
        id: 'STD-CMP-003',
        name: 'Safety & Infrastructure Audit',
        description: 'Fire safety, CCTV, sanitation, and building safety compliance as per CBSE norms',
        icon: 'Shield',
      },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Standard Reports',
  description:
    'Browse the standard report catalog by category, configure report parameters, and generate pre-built academic, financial, and administrative reports.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <ReportCatalog
        title="Report Catalog"
        categories={categories}
      />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <ReportParameters
          title="Report Parameters"
          description="Configure the parameters to generate your selected report"
          fields={[
            { id: 'academic_year', label: 'Academic Year', type: 'select' as const, options: [{ label: '2025–26', value: '2025-26' }, { label: '2024–25', value: '2024-25' }] },
            { id: 'term', label: 'Term / Exam', type: 'select' as const, options: [{ label: 'Unit Test III', value: 'ut3' }, { label: 'Half Yearly', value: 'hy' }, { label: 'Unit Test II', value: 'ut2' }, { label: 'Unit Test I', value: 'ut1' }] },
            { id: 'date_from', label: 'From Date', type: 'date' as const, placeholder: 'Select start date' },
            { id: 'date_to', label: 'To Date', type: 'date' as const, placeholder: 'Select end date' },
          ]}
          classes={[
            { label: 'All Classes', value: 'all' },
            { label: 'Class I', value: '1' }, { label: 'Class II', value: '2' }, { label: 'Class III', value: '3' },
            { label: 'Class IV', value: '4' }, { label: 'Class V', value: '5' }, { label: 'Class VI', value: '6' },
            { label: 'Class VII', value: '7' }, { label: 'Class VIII', value: '8' }, { label: 'Class IX', value: '9' },
            { label: 'Class X', value: '10' }, { label: 'Class XI', value: '11' }, { label: 'Class XII', value: '12' },
          ]}
          sections={[
            { label: 'All Sections', value: 'all' },
            { label: 'Section A', value: 'A' }, { label: 'Section B', value: 'B' },
            { label: 'Science', value: 'Sci' }, { label: 'Commerce', value: 'Com' }, { label: 'Humanities', value: 'Hum' },
          ]}
          formats={[
            { label: 'PDF', value: 'pdf' }, { label: 'Excel', value: 'excel' }, { label: 'CSV', value: 'csv' },
          ]}
        />

        <GeneratedReport
          schoolInfo={{
            name: 'Delhi Public School, Dwarka',
            address: 'Sector 19, Dwarka, New Delhi – 110075',
            phone: '+91 11 2804 1234',
            email: 'info@dpsdwarka.edu.in',
          }}
          reportTitle="Unit Test III — Result Sheet"
          reportSubtitle="Class X-A | February 2026"
          parameters={[
            { label: 'Academic Year', value: '2025–26' },
            { label: 'Exam', value: 'Unit Test III' },
            { label: 'Class', value: 'X-A' },
            { label: 'Format', value: 'PDF' },
          ]}
          columns={[
            { key: 'roll', label: 'Roll No.', align: 'center' as const },
            { key: 'name', label: 'Student Name' },
            { key: 'hindi', label: 'Hindi', align: 'center' as const },
            { key: 'english', label: 'English', align: 'center' as const },
            { key: 'maths', label: 'Maths', align: 'center' as const },
            { key: 'science', label: 'Science', align: 'center' as const },
            { key: 'sst', label: 'SST', align: 'center' as const },
            { key: 'total', label: 'Total', align: 'center' as const },
            { key: 'percent', label: '%', align: 'center' as const },
            { key: 'grade', label: 'Grade', align: 'center' as const },
          ]}
          rows={[
            { id: '1', roll: 1, name: 'Aarav Sharma', hindi: 88, english: 92, maths: 95, science: 90, sst: 85, total: 450, percent: '90%', grade: 'A1' },
            { id: '2', roll: 2, name: 'Priya Patel', hindi: 82, english: 88, maths: 78, science: 85, sst: 90, total: 423, percent: '84.6%', grade: 'A2' },
            { id: '3', roll: 3, name: 'Rohan Gupta', hindi: 75, english: 80, maths: 92, science: 88, sst: 72, total: 407, percent: '81.4%', grade: 'A2' },
            { id: '4', roll: 4, name: 'Ananya Singh', hindi: 90, english: 94, maths: 86, science: 82, sst: 88, total: 440, percent: '88%', grade: 'A1' },
            { id: '5', roll: 5, name: 'Vikram Reddy', hindi: 68, english: 72, maths: 65, science: 70, sst: 74, total: 349, percent: '69.8%', grade: 'B1' },
          ]}
        />
      </div>
    </div>
  );
}
