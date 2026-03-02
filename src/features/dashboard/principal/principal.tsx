import { StatCard } from "@/components/molecules/stat-card"
import { PageHeader } from "@/components/molecules/page-header"
import { EmptyState } from "@/components/molecules/empty-state"
import { Shield, Users, Award } from "lucide-react"

// ============= PRINCIPAL DASHBOARD =============
export function PrincipalDashboard() {
    return (
        <div className="space-y-6">
            <PageHeader title="Principal Dashboard" description="Institutional overview and management" />
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-3">
                <StatCard title="Institution Score" value="--" icon={Award} variant="success" footer="Overall performance" />
                <StatCard title="Staff Present" value="--" icon={Users} footer="Today's attendance" />
                <StatCard title="Pending Approvals" value="--" icon={Shield} variant="warning" footer="Requires your attention" />
            </div>
            <EmptyState
                title="Principal's Office"
                description="Comprehensive oversight of institutional operations, staff management, and academic performance."
                icon={Shield}
                size="lg"
            />
        </div>
    )
}
