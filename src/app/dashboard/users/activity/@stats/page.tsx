import { ActivityStatCards } from "@/features/dashboard/users/activity/@stats"
import { User } from "@/services/user.service"

function isWithinDays(dateStr: string, days: number) {
    const date = new Date(dateStr)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    return diff <= days * 24 * 60 * 60 * 1000
}

export default async function ActivityStatsPage() {
    const users = await User.getAll()

    const totalUsers = users.length
    const recentlyJoined = users.filter((u) => isWithinDays(u.createdAt, 7)).length
    const verifiedUsers = users.filter((u) => u.emailVerified).length

    return <ActivityStatCards totalUsers={totalUsers} recentlyJoined={recentlyJoined} verifiedUsers={verifiedUsers} />
}
