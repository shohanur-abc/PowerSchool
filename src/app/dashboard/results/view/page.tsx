import { Metadata } from "next";

import { ResultFilters } from "@/features/dashboard/results";
import { ResultTable } from "@/features/dashboard/results";
import { StudentResultCard } from "@/features/dashboard/results";

export const metadata: Metadata = {
  title: "View Results",
  description: "Filter and view student examination results.",
};

export default async function ResultsViewPage() {
  return (
    <div className="@container space-y-6">
      <ResultFilters
        title="Filter Results"
        exams={[
          { label: "Annual Examination 2025-26", value: "annual-2025-26" },
          { label: "Unit Test IV", value: "ut-4" },
          { label: "Pre-Board Examination", value: "pre-board" },
          { label: "Half Yearly Examination", value: "half-yearly" },
        ]}
        classes={[
          { label: "Class IX-A", value: "ix-a" },
          { label: "Class IX-B", value: "ix-b" },
          { label: "Class X-A", value: "x-a" },
          { label: "Class X-B", value: "x-b" },
          { label: "Class XII-A", value: "xii-a" },
        ]}
        sections={[
          { label: "Section A", value: "a" },
          { label: "Section B", value: "b" },
          { label: "Section C", value: "c" },
        ]}
      />

      <ResultTable
        title="Examination Results"
        subjects={["Mathematics", "Science", "English", "Hindi", "Social Science"]}
        results={[
          {
            id: "res-001",
            rank: 1,
            name: "Ananya Singh",
            rollNo: "06",
            marks: { Mathematics: 78, Science: 82, English: 88, Hindi: 80, "Social Science": 76 },
            total: 404,
            percentage: 80.8,
            grade: "A",
            result: "pass" as const,
          },
          {
            id: "res-002",
            rank: 2,
            name: "Diya Patel",
            rollNo: "02",
            marks: { Mathematics: 75, Science: 78, English: 85, Hindi: 74, "Social Science": 72 },
            total: 384,
            percentage: 76.8,
            grade: "B+",
            result: "pass" as const,
          },
          {
            id: "res-003",
            rank: 3,
            name: "Kavya Nair",
            rollNo: "04",
            marks: { Mathematics: 71, Science: 76, English: 80, Hindi: 72, "Social Science": 70 },
            total: 369,
            percentage: 73.8,
            grade: "B+",
            result: "pass" as const,
          },
          {
            id: "res-004",
            rank: 4,
            name: "Arjun Mehta",
            rollNo: "09",
            marks: { Mathematics: 72, Science: 70, English: 74, Hindi: 68, "Social Science": 66 },
            total: 350,
            percentage: 70.0,
            grade: "B",
            result: "pass" as const,
          },
          {
            id: "res-005",
            rank: 5,
            name: "Aarav Sharma",
            rollNo: "01",
            marks: { Mathematics: 68, Science: 65, English: 72, Hindi: 70, "Social Science": 64 },
            total: 339,
            percentage: 67.8,
            grade: "B",
            result: "pass" as const,
          },
          {
            id: "res-006",
            rank: 6,
            name: "Prisha Iyer",
            rollNo: "10",
            marks: { Mathematics: 66, Science: 62, English: 70, Hindi: 68, "Social Science": 60 },
            total: 326,
            percentage: 65.2,
            grade: "C",
            result: "pass" as const,
          },
          {
            id: "res-007",
            rank: 7,
            name: "Rohan Gupta",
            rollNo: "05",
            marks: { Mathematics: 63, Science: 60, English: 68, Hindi: 65, "Social Science": 58 },
            total: 314,
            percentage: 62.8,
            grade: "C",
            result: "pass" as const,
          },
          {
            id: "res-008",
            rank: 8,
            name: "Saanvi Joshi",
            rollNo: "08",
            marks: { Mathematics: 59, Science: 55, English: 62, Hindi: 58, "Social Science": 52 },
            total: 286,
            percentage: 57.2,
            grade: "C",
            result: "pass" as const,
          },
        ]}
      />

      <StudentResultCard
        student={{
          name: "Aarav Sharma",
          className: "Class X-A",
          rollNo: "01",
          section: "A",
        }}
        examName="Annual Examination 2025-26"
        subjects={[
          { name: "Mathematics", written: 58, practical: 10, total: 68, maxMarks: 100, grade: "B" },
          { name: "Science", written: 52, practical: 13, total: 65, maxMarks: 100, grade: "C" },
          { name: "English", written: 62, practical: 10, total: 72, maxMarks: 100, grade: "B+" },
          { name: "Hindi", written: 60, practical: 10, total: 70, maxMarks: 100, grade: "B" },
          { name: "Social Science", written: 54, practical: 10, total: 64, maxMarks: 100, grade: "C" },
        ]}
        totalMarks={339}
        maxMarks={500}
        percentage={67.8}
        grade="B"
        result="pass"
        rank={5}
        totalStudents={45}
      />
    </div>
  );
}
