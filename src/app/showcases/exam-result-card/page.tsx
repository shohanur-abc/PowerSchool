"use client";
import { ExamResultCard } from '@/components/molecules/exam-result-card';

export default function ExamResultCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Excellent Performance</h2>
                <div className="max-w-sm">
                    <ExamResultCard
                        examName="Mid-Term Examination 2024"
                        date="November 10, 2024"
                        totalMarks={500}
                        obtainedMarks={462}
                        percentage={92.4}
                        grade="A+"
                        subjects={[
                            { name: 'Mathematics', marks: 95, total: 100, grade: 'A+' },
                            { name: 'Science', marks: 88, total: 100, grade: 'A' },
                            { name: 'English', marks: 92, total: 100, grade: 'A+' },
                            { name: 'History', marks: 85, total: 100, grade: 'A' },
                            { name: 'Geography', marks: 90, total: 100, grade: 'A' },
                        ]}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Average Performance</h2>
                <div className="max-w-sm">
                    <ExamResultCard
                        examName="Unit Test — Chapter 5"
                        date="October 5, 2024"
                        totalMarks={100}
                        obtainedMarks={68}
                        percentage={68}
                        grade="C+"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Poor Performance</h2>
                <div className="max-w-sm">
                    <ExamResultCard
                        examName="Annual Final Exam"
                        totalMarks={300}
                        obtainedMarks={105}
                        percentage={35}
                        grade="F"
                        subjects={[
                            { name: 'Mathematics', marks: 30, total: 100, grade: 'F' },
                            { name: 'Science', marks: 42, total: 100, grade: 'D' },
                            { name: 'English', marks: 33, total: 100, grade: 'F' },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
