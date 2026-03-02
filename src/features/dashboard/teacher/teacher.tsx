import { StatCard } from "@/components/molecules/stat-card"
import { PageHeader } from "@/components/molecules/page-header"
import { EmptyState } from "@/components/molecules/empty-state"
import { GraduationCap, BookOpen, Award } from "lucide-react"

// ============= TEACHER DASHBOARD =============
export function TeacherDashboard() {
    return (
        <div className="space-y-6">
            <PageHeader title="Teacher Dashboard" description="Your classes, attendance, and results at a glance" />
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-3">
                <StatCard title="My Classes" value="--" icon={BookOpen} variant="info" footer="Assigned classes" />
                <StatCard title="Students" value="--" icon={GraduationCap} footer="Total students" />
                <StatCard title="Pending Grades" value="--" icon={Award} variant="warning" footer="Awaiting submission" />
            </div>
            <EmptyState
                title="Teacher Workspace"
                description="Quick access to mark attendance, enter results, and manage your assigned classes."
                icon={BookOpen}
                size="lg"
            />
        </div>
    )
}