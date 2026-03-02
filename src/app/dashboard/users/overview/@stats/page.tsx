import { UserStatCards } from "@/features/dashboard/users/overview/@stats"
import { User } from "@/services/user.service"

export default async function UserStatsPage() {
    const [roleCounts, recentUsers] = await Promise.all([
        User.roleCounts(),
        User.getRecent(),
    ])

    const totalUsers = roleCounts.reduce((s, r) => s + r.count, 0)
    const verifiedCount = recentUsers.filter((u) => u.emailVerified).length

    return (
        <UserStatCards
            totalUsers={totalUsers}
            verifiedCount={verifiedCount}
            roleCount={roleCounts.length}
            recentCount={recentUsers.length}
        />
    )
}
