import { StatCard } from "@/components/molecules/stat-card"
import { PageHeader } from "@/components/molecules/page-header"
import { EmptyState } from "@/components/molecules/empty-state"
import { Shield, GraduationCap, Users, BookOpen, Award } from "lucide-react"

// ============= STUDENT DASHBOARD =============
export function StudentDashboard() {
    return (
        <div className="space-y-6">
            <PageHeader title="Student Dashboard" description="Your academic progress and information" />
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-3">
                <StatCard title="Attendance" value="--%" icon={BookOpen} variant="success" footer="This semester" />
                <StatCard title="GPA" value="--" icon={Award} variant="info" footer="Current semester" />
                <StatCard title="Due Fees" value="--" icon={GraduationCap} variant="warning" footer="Outstanding balance" />
            </div>
            <EmptyState
                title="Student Portal"
                description="View your attendance, results, fee status, and important notices all in one place."
                icon={GraduationCap}
                size="lg"
            />
        </div>
    )
}
