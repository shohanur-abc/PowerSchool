import { Metadata } from "next";

import { ClassComparison } from "@/features/dashboard/results";
import { GradeDistribution } from "@/features/dashboard/results";
import { SubjectPerformance } from "@/features/dashboard/results";
import { TrendAnalysis } from "@/features/dashboard/results";

export const metadata: Metadata = {
  title: "Results Analytics",
  description:
    "Analyze examination performance with subject breakdowns, grade distributions, trends, and class comparisons.",
};

export default async function ResultsAnalyticsPage() {
  return (
    <div className="@container space-y-6">
      <SubjectPerformance
        title="Subject-wise Performance"
        description="Average scores, pass rates, and top scores across subjects for the current session."
        data={[
          { subject: "Mathematics", average: 72.5, highest: 98 },
          { subject: "Science", average: 68.3, highest: 95 },
          { subject: "English", average: 74.1, highest: 96 },
          { subject: "Hindi", average: 70.2, highest: 94 },
          { subject: "Social Science", average: 65.9, highest: 92 },
          { subject: "Sanskrit", average: 76.4, highest: 99 },
          { subject: "Computer Science", average: 78.6, highest: 100 },
        ]}
      />

      <GradeDistribution
        title="Grade Distribution"
        description="CBSE grading distribution across all subjects for the Annual Examination."
        data={[
          { grade: "A1 (91-100)", count: 48 },
          { grade: "A2 (81-90)", count: 72 },
          { grade: "B1 (71-80)", count: 85 },
          { grade: "B2 (61-70)", count: 68 },
          { grade: "C1 (51-60)", count: 52 },
          { grade: "C2 (41-50)", count: 30 },
          { grade: "D (33-40)", count: 14 },
          { grade: "E (Below 33)", count: 6 },
        ]}
      />

      <TrendAnalysis
        title="Performance Trends"
        description="Average score trends across examinations throughout the academic session."
        data={[
          { exam: "Unit Test I", avgScore: 62.4, passRate: 90.2 },
          { exam: "Unit Test II", avgScore: 65.1, passRate: 92.1 },
          { exam: "Half Yearly", avgScore: 67.8, passRate: 93.8 },
          { exam: "Unit Test III", avgScore: 69.3, passRate: 94.5 },
          { exam: "Unit Test IV", avgScore: 71.5, passRate: 95.8 },
          { exam: "Pre-Board", avgScore: 70.2, passRate: 95.0 },
          { exam: "Annual", avgScore: 72.5, passRate: 96.8 },
        ]}
        lines={[
          { dataKey: "avgScore", label: "Average Score" },
          { dataKey: "passRate", label: "Pass Rate %" },
        ]}
      />

      <ClassComparison
        title="Class-wise Comparison"
        description="Compare average scores and pass rates across classes."
        data={[
          { className: "Class VI", average: 74.2, passRate: 92.1 },
          { className: "Class VII", average: 71.8, passRate: 90.3 },
          { className: "Class VIII", average: 69.5, passRate: 87.6 },
          { className: "Class IX-A", average: 68.1, passRate: 85.4 },
          { className: "Class IX-B", average: 66.7, passRate: 83.9 },
          { className: "Class X-A", average: 72.5, passRate: 88.2 },
          { className: "Class X-B", average: 67.3, passRate: 84.1 },
          { className: "Class XI-Sci", average: 65.9, passRate: 82.7 },
          { className: "Class XII-Sci", average: 70.4, passRate: 86.5 },
        ]}
      />
    </div>
  );
}
