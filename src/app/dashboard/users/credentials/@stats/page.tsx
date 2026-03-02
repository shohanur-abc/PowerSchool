import { CredentialStatCards } from "@/features/dashboard/users/credentials/@stats"
import { User } from "@/services/user.service"

export default async function CredentialStatsPage() {
    const users = await User.getAll()

    const totalUsers = users.length
    const verifiedCount = users.filter((u) => u.emailVerified).length
    const unverifiedCount = totalUsers - verifiedCount
    const verifiedPercentage = totalUsers > 0 ? Math.round((verifiedCount / totalUsers) * 100) : 0

    const roleBreakdown = users.reduce<Record<string, number>>((acc, u) => {
        acc[u.role] = (acc[u.role] ?? 0) + 1
        return acc
    }, {})

    return (
        <CredentialStatCards
            totalUsers={totalUsers}
            verifiedCount={verifiedCount}
            unverifiedCount={unverifiedCount}
            verifiedPercentage={verifiedPercentage}
            roleBreakdown={roleBreakdown}
        />
    )
}
