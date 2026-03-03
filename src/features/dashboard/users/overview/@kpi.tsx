import { MetricCard } from "@/components/molecules/metric-card"
import { UserCheck, ShieldCheck, Clock, Users } from "lucide-react"

export function UserKpi({ verifiedRate, totalUsers, recentCount, roleCount, loading }: UserKpiProps & { loading?: boolean }) {
    return (
        <>
            <MetricCard
                title="Verification Rate"
                value={`${verifiedRate}%`}
                subtitle="Email verified users"
                icon={ShieldCheck}
                variant={verifiedRate >= 80 ? "success" : verifiedRate >= 60 ? "warning" : "danger"}
                loading={loading}
            />
            <MetricCard
                title="Total Users"
                value={totalUsers}
                subtitle="All registered accounts"
                icon={Users}
                variant="default"
                loading={loading}
            />
            <MetricCard
                title="Recent Signups"
                value={recentCount}
                subtitle="Last 30 days"
                icon={Clock}
                variant="info"
                loading={loading}
            />
            <MetricCard
                title="Active Roles"
                value={roleCount}
                subtitle="Distinct user roles"
                icon={UserCheck}
                variant="default"
                loading={loading}
            />
        </>
    )
}

interface UserKpiProps {
    verifiedRate: number
    totalUsers: number
    recentCount: number
    roleCount: number
}
