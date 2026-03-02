import { DataTable } from "@/components/molecules/data-table"
import { StatusBadge } from "@/components/molecules/status-badge"
import { AvatarCell } from "@/components/molecules/avatar-cell"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Activity, Clock } from "lucide-react"

export function ActivityTable({ users, loading }: { users: UserRow[]; loading?: boolean }) {
    const sortedUsers = [...users].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    return (
        <div className="space-y-6">
            <DataTable<UserRow>
                title="User Activity Log"
                description="All users sorted by most recent registration date"
                columns={[
                    {
                        key: "name",
                        header: "Name",
                        render: (r) => (
                            <AvatarCell name={r.name} secondary={r.email} image={r.image} />
                        ),
                    },
                    {
                        key: "email",
                        header: "Email",
                        render: (r) => (
                            <span className="text-sm text-muted-foreground">{r.email}</span>
                        ),
                    },
                    {
                        key: "role",
                        header: "Role",
                        render: (r) => (
                            <Badge variant="outline" className={ROLE_COLORS[r.role]}>
                                {r.role}
                            </Badge>
                        ),
                    },
                    {
                        key: "emailVerified",
                        header: "Status",
                        render: (r) => (
                            <StatusBadge
                                status={r.emailVerified ? "active" : "inactive"}
                                label={r.emailVerified ? "Verified" : "Unverified"}
                            />
                        ),
                    },
                    {
                        key: "createdAt",
                        header: "Join Date",
                        render: (r) => (
                            <div className="flex items-center gap-1.5">
                                <Clock className="size-3.5 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                    {formatDate(r.createdAt)}
                                </span>
                            </div>
                        ),
                    },
                ]}
                data={sortedUsers}
                keyExtractor={(r) => r._id}
                loading={loading}
            />

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Activity className="size-5" />
                        Activity Tracking
                    </CardTitle>
                    <CardDescription>
                        Comprehensive user activity monitoring and audit capabilities for your institution.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Registration Tracking</Badge>
                        <Badge variant="outline">Login History</Badge>
                        <Badge variant="outline">Session Monitoring</Badge>
                        <Badge variant="outline">Security Events</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Track user registrations, login patterns, and session activity across the platform.
                        Monitor email verification status and identify inactive accounts.
                        Activity data helps administrators maintain security compliance and identify unusual access patterns.
                    </p>
                    <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                        <div className="rounded-lg border p-3">
                            <p className="text-sm font-medium">Registration Monitoring</p>
                            <p className="text-xs text-muted-foreground">
                                Track new user sign-ups, verification completion rates, and onboarding progress across all roles.
                            </p>
                        </div>
                        <div className="rounded-lg border p-3">
                            <p className="text-sm font-medium">Session Security</p>
                            <p className="text-xs text-muted-foreground">
                                Monitor active sessions, detect concurrent logins, and enforce session timeout policies for enhanced security.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


const ROLE_COLORS: Record<string, string> = {
    admin: "bg-red-100 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
    principal: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
    teacher: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
    student: "bg-green-100 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
    parent: "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800",
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
}


// ============ TYPES =============
interface UserRow {
    [key: string]: unknown
    _id: string
    name: string
    email: string
    role: string
    emailVerified: boolean
    image: string | null
    createdAt: string
}
