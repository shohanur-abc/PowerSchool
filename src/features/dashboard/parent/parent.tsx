import { StatCard } from "@/components/molecules/stat-card"
import { PageHeader } from "@/components/molecules/page-header"
import { EmptyState } from "@/components/molecules/empty-state"
import { GraduationCap, Users, BookOpen, Award } from "lucide-react"

// ============= PARENT DASHBOARD =============
export function ParentDashboard() {
    return (
        <div className="space-y-6">
            <PageHeader title="Parent Dashboard" description="Monitor your child's academic journey" />
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-3">
                <StatCard title="Child's Attendance" value="--%" icon={BookOpen} variant="success" footer="This month" />
                <StatCard title="Latest Grade" value="--" icon={Award} variant="info" footer="Most recent exam" />
                <StatCard title="Fee Status" value="--" icon={GraduationCap} footer="Payment status" />
            </div>
            <EmptyState
                title="Parent Portal"
                description="Stay updated on your child's attendance, academic performance, and fee payments."
                icon={Users}
                size="lg"
            />
        </div>
    )
}