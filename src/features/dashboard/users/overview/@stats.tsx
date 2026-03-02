import { StatCard } from "@/components/molecules/stat-card"
import { Users, ShieldCheck, Key, Activity } from "lucide-react"

interface UserStats {
    totalUsers: number
    verifiedCount: number
    roleCount: number
    recentCount: number
}

export function UserStatCards({ totalUsers, verifiedCount, roleCount, recentCount, loading }: UserStats & { loading?: boolean }) {
    return (
        <>
            <StatCard
                title="Total Users"
                value={totalUsers}
                icon={Users}
                footer="All registered users"
                loading={loading}
            />
            <StatCard
                title="Verified"
                value={verifiedCount}
                icon={ShieldCheck}
                variant="success"
                footer="Email verified"
                loading={loading}
            />
            <StatCard
                title="Roles"
                value={roleCount}
                icon={Key}
                variant="info"
                footer="Distinct roles"
                loading={loading}
            />
            <StatCard
                title="Recent"
                value={recentCount}
                icon={Activity}
                footer="Latest users shown"
                loading={loading}
            />
        </>
    )
}
