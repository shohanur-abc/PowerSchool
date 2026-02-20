import { Metadata } from "next";

import { EntryProgress } from "@/features/dashboard/results";
import { ExamSelector } from "@/features/dashboard/results";
import { MarksEntryTable } from "@/features/dashboard/results";

export const metadata: Metadata = {
  title: "Enter Results",
  description: "Select an examination and enter student marks.",
};

export default async function ResultsEntryPage() {
  return (
    <div className="@container space-y-6">
      <ExamSelector
        title="Select Examination"
        exams={[
          { label: "Annual Examination 2025-26", value: "annual-2025-26" },
          { label: "Unit Test IV", value: "ut-4" },
          { label: "Pre-Board Examination", value: "pre-board" },
          { label: "Half Yearly Examination", value: "half-yearly" },
        ]}
        classes={[
          { label: "Class VIII-C", value: "viii-c" },
          { label: "Class IX-A", value: "ix-a" },
          { label: "Class IX-B", value: "ix-b" },
          { label: "Class X-A", value: "x-a" },
          { label: "Class X-B", value: "x-b" },
          { label: "Class XII-A", value: "xii-a" },
        ]}
        subjects={[
          { label: "Mathematics", value: "math" },
          { label: "Science", value: "science" },
          { label: "English", value: "english" },
          { label: "Hindi", value: "hindi" },
          { label: "Social Science", value: "sst" },
          { label: "Physics", value: "physics" },
        ]}
      />

      <MarksEntryTable
        title="Marks Entry — Class X-A Mathematics"
        maxWritten={80}
        maxPractical={20}
        gradeScale={[
          { grade: "A1", min: 91 },
          { grade: "A2", min: 81 },
          { grade: "B1", min: 71 },
          { grade: "B2", min: 61 },
          { grade: "C1", min: 51 },
          { grade: "C2", min: 41 },
          { grade: "D", min: 33 },
          { grade: "E", min: 0 },
        ]}
        students={[
          { id: "stu-001", name: "Aarav Sharma", rollNo: "01", written: 58, practical: 10 },
          { id: "stu-002", name: "Diya Patel", rollNo: "02", written: 62, practical: 13 },
          { id: "stu-003", name: "Ishaan Verma", rollNo: "03", written: 40, practical: 12 },
          { id: "stu-004", name: "Kavya Nair", rollNo: "04", written: 58, practical: 13 },
          { id: "stu-005", name: "Rohan Gupta", rollNo: "05", written: 50, practical: 13 },
          { id: "stu-006", name: "Ananya Singh", rollNo: "06", written: 65, practical: 13 },
          { id: "stu-007", name: "Vivaan Reddy", rollNo: "07", written: 34, practical: 10 },
          { id: "stu-008", name: "Saanvi Joshi", rollNo: "08", written: 46, practical: 13 },
          { id: "stu-009", name: "Arjun Mehta", rollNo: "09", written: 60, practical: 12 },
          { id: "stu-010", name: "Prisha Iyer", rollNo: "10", written: 54, practical: 12 },
        ]}
      />

      <EntryProgress
        title="Entry Progress"
        subjects={[
          { id: "sub-001", name: "Mathematics", entered: 45, total: 45, status: "complete" as const },
          { id: "sub-002", name: "Science", entered: 42, total: 45, status: "partial" as const },
          { id: "sub-003", name: "English", entered: 40, total: 40, status: "complete" as const },
          { id: "sub-004", name: "Hindi", entered: 20, total: 42, status: "partial" as const },
          { id: "sub-005", name: "Social Science", entered: 0, total: 38, status: "pending" as const },
        ]}
      />
    </div>
  );
}
