import { Metadata } from "next";

import { ReportCardGenerator } from "@/features/dashboard/results";
import { ReportCardPreview } from "@/features/dashboard/results";

export const metadata: Metadata = {
  title: "Report Cards",
  description: "Generate and preview student report cards.",
};

export default async function ReportCardsPage() {
  return (
    <div className="@container space-y-6">
      <ReportCardGenerator
        title="Generate Report Cards"
        exams={[
          { label: "Unit Test I", value: "ut-1" },
          { label: "Unit Test II", value: "ut-2" },
          { label: "Half Yearly Examination", value: "half-yearly" },
          { label: "Unit Test III", value: "ut-3" },
          { label: "Unit Test IV", value: "ut-4" },
          { label: "Annual Examination 2025-26", value: "annual-2025-26" },
          { label: "Pre-Board Examination", value: "pre-board" },
        ]}
        classes={[
          { label: "Class I", value: "i" },
          { label: "Class II", value: "ii" },
          { label: "Class III", value: "iii" },
          { label: "Class IV", value: "iv" },
          { label: "Class V", value: "v" },
          { label: "Class VI", value: "vi" },
          { label: "Class VII", value: "vii" },
          { label: "Class VIII", value: "viii" },
          { label: "Class IX-A", value: "ix-a" },
          { label: "Class IX-B", value: "ix-b" },
          { label: "Class X-A", value: "x-a" },
          { label: "Class X-B", value: "x-b" },
          { label: "Class XI-Science", value: "xi-sci" },
          { label: "Class XI-Commerce", value: "xi-com" },
          { label: "Class XII-Science", value: "xii-sci" },
          { label: "Class XII-Commerce", value: "xii-com" },
        ]}
        templates={[
          { label: "CBSE Standard Template", value: "cbse-standard" },
          { label: "School Custom Template", value: "school-custom" },
          { label: "Compact Template", value: "compact" },
        ]}
      />

      <ReportCardPreview
        school={{
          name: "Saraswati Vidya Mandir",
          address: "Sector 12, Dwarka, New Delhi — 110078",
          contact: "011-2890-1234 | info@saraswatividya.edu.in",
        }}
        student={{
          name: "Aarav Sharma",
          rollNo: "01",
          className: "Class X-A",
          section: "A",
          fatherName: "Mr. Rajesh Sharma",
          admissionNo: "SVM-2022-0145",
        }}
        examName="Annual Examination 2025-26"
        subjects={[
          { name: "Mathematics", maxMarks: 100, obtained: 68, grade: "B" },
          { name: "Science", maxMarks: 100, obtained: 65, grade: "C" },
          { name: "English", maxMarks: 100, obtained: 72, grade: "B+" },
          { name: "Hindi", maxMarks: 100, obtained: 70, grade: "B" },
          { name: "Social Science", maxMarks: 100, obtained: 64, grade: "C" },
          { name: "Sanskrit", maxMarks: 100, obtained: 78, grade: "B+" },
        ]}
        totalMarks={417}
        maxMarks={600}
        percentage={69.5}
        grade="B"
        result="pass"
        rank={5}
        attendance={{
          totalDays: 220,
          present: 204,
          absent: 16,
          percentage: 92.7,
        }}
        remarks={{
          teacher: "Aarav is a sincere student with good potential. Needs to focus on Science.",
          principal: "Keep up the good work. Consistent effort will yield better results.",
        }}
        gradeScaleLegend={[
          { grade: "A+", range: "91-100" },
          { grade: "A", range: "81-90" },
          { grade: "B+", range: "71-80" },
          { grade: "B", range: "61-70" },
          { grade: "C", range: "51-60" },
          { grade: "F", range: "Below 33" },
        ]}
      />
    </div>
  );
}
