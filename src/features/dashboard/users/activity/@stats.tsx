import { StatCard } from "@/components/molecules/stat-card"
import { Clock, Mail, Users } from "lucide-react"


export function ActivityStatCards({ totalUsers, recentlyJoined, verifiedUsers, loading }: ActivityStats & { loading?: boolean }) {
    return (
        <>
            <StatCard
                title="Total Users"
                value={totalUsers}
                icon={Users}
                footer="All registered accounts"
                loading={loading}
            />
            <StatCard
                title="Recently Joined"
                value={recentlyJoined}
                icon={Clock}
                variant="info"
                footer="Joined in the last 7 days"
                loading={loading}
            />
            <StatCard
                title="Verified Users"
                value={verifiedUsers}
                icon={Mail}
                variant="success"
                footer="Email verified accounts"
                loading={loading}
            />
        </>
    )
}



interface ActivityStats {
    totalUsers: number
    recentlyJoined: number
    verifiedUsers: number
}