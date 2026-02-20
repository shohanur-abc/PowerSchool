import { Metadata } from "next";

import { PerformanceSummary } from "@/features/dashboard/results";
import { RecentExams } from "@/features/dashboard/results";
import { ResultStats } from "@/features/dashboard/results";

export const metadata: Metadata = {
  title: "Results Overview",
  description:
    "View examination results overview, recent exams, and performance summary.",
};

export default async function ResultsOverviewPage() {
  return (
    <div className="@container space-y-6">
      <ResultStats
        stats={[
          {
            title: "Total Exams Conducted",
            value: "24",
            change: "+3",
            changeType: "up" as const,
            icon: "ClipboardCheck",
            description: "This academic session",
          },
          {
            title: "Average Pass Rate",
            value: "87.4%",
            change: "+2.1%",
            changeType: "up" as const,
            icon: "TrendingUp",
            description: "Across all subjects",
          },
          {
            title: "School Topper Score",
            value: "98.6%",
            change: "+1.2%",
            changeType: "up" as const,
            icon: "Trophy",
            description: "Highest aggregate",
          },
          {
            title: "Results Pending",
            value: "3",
            change: "-2",
            changeType: "down" as const,
            icon: "Clock",
            description: "Awaiting marks entry",
          },
        ]}
      />

      <RecentExams
        title="Recent Examinations"
        exams={[
          {
            id: "exam-001",
            name: "Annual Examination 2025-26",
            className: "Class X-A",
            date: "2026-02-10",
            subjectCount: 6,
            status: "completed" as const,
          },
          {
            id: "exam-002",
            name: "Unit Test IV",
            className: "Class IX-B",
            date: "2026-02-08",
            subjectCount: 5,
            status: "completed" as const,
          },
          {
            id: "exam-003",
            name: "Pre-Board Examination",
            className: "Class XII-A",
            date: "2026-02-05",
            subjectCount: 5,
            status: "completed" as const,
          },
          {
            id: "exam-004",
            name: "Annual Examination 2025-26",
            className: "Class IX-A",
            date: "2026-02-20",
            subjectCount: 6,
            status: "ongoing" as const,
          },
          {
            id: "exam-005",
            name: "Half Yearly Examination",
            className: "Class VIII-C",
            date: "2026-03-01",
            subjectCount: 7,
            status: "upcoming" as const,
          },
        ]}
      />

      <PerformanceSummary
        title="Performance Summary"
        description="Pass, distinction, and fail counts across classes for the current session."
        data={[
          { className: "Class VI", pass: 32, distinction: 8, fail: 2 },
          { className: "Class VII", pass: 30, distinction: 6, fail: 4 },
          { className: "Class VIII", pass: 28, distinction: 5, fail: 5 },
          { className: "Class IX-A", pass: 26, distinction: 7, fail: 6 },
          { className: "Class IX-B", pass: 24, distinction: 4, fail: 7 },
          { className: "Class X-A", pass: 30, distinction: 10, fail: 3 },
        ]}
      />
    </div>
  );
}
