import { UserKpi } from "@/features/dashboard/users/overview/@kpi"
import { User } from "@/services/user.service"

export default async function UserKpiPage() {
    const [verificationStats, roleCounts, recentUsers] = await Promise.all([
        User.verificationStats(),
        User.roleCounts(),
        User.getRecent(),
    ])

    return (
        <UserKpi
            verifiedRate={verificationStats.rate}
            totalUsers={verificationStats.total}
            recentCount={recentUsers.length}
            roleCount={roleCounts.length}
        />
    )
}
