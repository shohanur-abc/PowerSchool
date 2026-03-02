import { CredentialStatCards } from "@/features/dashboard/users/credentials/@stats"

export default function StatsLoading() {
    return (
        <CredentialStatCards
            totalUsers={22}
            verifiedCount={22}
            unverifiedCount={22}
            verifiedPercentage={22}
            roleBreakdown={{ admin: 2, parent: 2, principal: 1, student: 9, teacher: 1 }}
            loading
        />
    )
}
