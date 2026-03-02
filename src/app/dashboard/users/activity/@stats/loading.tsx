import { ActivityStatCards } from "@/features/dashboard/users/activity/@stats"

export default function StatsLoading() {
    return (
        <ActivityStatCards
            totalUsers={22}
            recentlyJoined={22}
            verifiedUsers={22}
            loading
        />
    )
}
