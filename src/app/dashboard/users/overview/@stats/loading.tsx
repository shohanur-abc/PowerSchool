import { UserStatCards } from "@/features/dashboard/users/overview/@stats"

export default function StatsLoading() {
    return (
        <UserStatCards
            totalUsers={22}
            verifiedCount={22}
            roleCount={22}
            recentCount={22}
            loading={true}
        />
    )
}
