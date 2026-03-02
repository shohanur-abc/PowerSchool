import { StatCard } from "@/components/molecules/stat-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Key, Users } from "lucide-react"



export function CredentialStatCards({ totalUsers, verifiedCount, unverifiedCount, verifiedPercentage, roleBreakdown, loading }: CredentialStats & { loading?: boolean }) {
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
                title="Verified Users"
                value={verifiedCount}
                variant="info"
                footer="Joined in the last 7 days"
                loading={loading}
            />
            <StatCard
                title="Unverified Users"
                value={unverifiedCount}
                variant="warning"
                footer="Email not yet verified"
                loading={loading}
            />
            <Card className="col-span-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Key className="size-5" />
                        Credential Management
                    </CardTitle>
                    <CardDescription>
                        Overview of user authentication credentials, email verification status, and role assignments across the platform.
                        Manage password resets, MFA enrollment, and credential policies from this section.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(roleBreakdown).map(([role, count]) => (
                            <Badge key={role} variant="outline" className={ROLE_COLORS[role]} data-loading={loading}>
                                {role}: {count}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

const ROLE_COLORS: Record<string, string> = {
    admin: "bg-red-100 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
    principal: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
    teacher: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
    student: "bg-green-100 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
    parent: "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800",
}

// ============ TYPES =============
interface CredentialStats {
    totalUsers: number
    verifiedCount: number
    unverifiedCount: number
    verifiedPercentage: number
    roleBreakdown: Record<string, number>
}
