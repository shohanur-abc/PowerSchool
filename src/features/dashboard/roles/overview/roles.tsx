import { StatCard } from "@/components/molecules/stat-card"
import { DataTable } from "@/components/molecules/data-table"
import { StatusBadge } from "@/components/molecules/status-badge"

import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Shield, ShieldCheck, GraduationCap, Users, UserCog, Crown, Key, Lock, CheckCircle, XCircle, } from "lucide-react"

// ============= ROLE DEFINITIONS =============
const ROLE_DEFINITIONS = [
    {
        role: "admin",
        label: "Administrator",
        description: "Full system access. Manages users, roles, settings, and all institutional data. Can configure system-wide policies.",
        icon: ShieldCheck,
        variant: "danger" as const,
        permissionCount: 36,
    },
    {
        role: "principal",
        label: "Principal",
        description: "Institutional oversight with read access to all modules. Can approve operations, view reports, and manage notices.",
        icon: Crown,
        variant: "warning" as const,
        permissionCount: 28,
    },
    {
        role: "teacher",
        label: "Teacher",
        description: "Manages attendance, results, and notices for assigned classes. Can view student profiles and generate class reports.",
        icon: UserCog,
        variant: "info" as const,
        permissionCount: 18,
    },
    {
        role: "student",
        label: "Student",
        description: "View-only access to own attendance, results, fees, and notices. Can update personal profile information.",
        icon: GraduationCap,
        variant: "success" as const,
        permissionCount: 8,
    },
    {
        role: "parent",
        label: "Parent",
        description: "View access to linked student's attendance, results, and fee status. Receives notifications for important updates.",
        icon: Users,
        variant: "default" as const,
        permissionCount: 6,
    },
]

// ============= PERMISSIONS MATRIX =============
const PERMISSION_AREAS = [
    "Dashboard",
    "Attendance",
    "Fees",
    "Results",
    "Notices",
    "Operations",
    "Reports",
    "Users",
    "Roles",
] as const

const PERMISSION_ACTIONS = ["View", "Create", "Edit", "Delete"] as const

type PermissionMap = Record<string, Record<string, boolean>>

const PERMISSIONS: PermissionMap = {
    admin: {
        "Dashboard-View": true, "Dashboard-Create": true, "Dashboard-Edit": true, "Dashboard-Delete": true,
        "Attendance-View": true, "Attendance-Create": true, "Attendance-Edit": true, "Attendance-Delete": true,
        "Fees-View": true, "Fees-Create": true, "Fees-Edit": true, "Fees-Delete": true,
        "Results-View": true, "Results-Create": true, "Results-Edit": true, "Results-Delete": true,
        "Notices-View": true, "Notices-Create": true, "Notices-Edit": true, "Notices-Delete": true,
        "Operations-View": true, "Operations-Create": true, "Operations-Edit": true, "Operations-Delete": true,
        "Reports-View": true, "Reports-Create": true, "Reports-Edit": true, "Reports-Delete": true,
        "Users-View": true, "Users-Create": true, "Users-Edit": true, "Users-Delete": true,
        "Roles-View": true, "Roles-Create": true, "Roles-Edit": true, "Roles-Delete": true,
    },
    principal: {
        "Dashboard-View": true, "Dashboard-Create": false, "Dashboard-Edit": false, "Dashboard-Delete": false,
        "Attendance-View": true, "Attendance-Create": false, "Attendance-Edit": false, "Attendance-Delete": false,
        "Fees-View": true, "Fees-Create": false, "Fees-Edit": true, "Fees-Delete": false,
        "Results-View": true, "Results-Create": false, "Results-Edit": false, "Results-Delete": false,
        "Notices-View": true, "Notices-Create": true, "Notices-Edit": true, "Notices-Delete": true,
        "Operations-View": true, "Operations-Create": true, "Operations-Edit": true, "Operations-Delete": false,
        "Reports-View": true, "Reports-Create": true, "Reports-Edit": false, "Reports-Delete": false,
        "Users-View": true, "Users-Create": false, "Users-Edit": false, "Users-Delete": false,
        "Roles-View": true, "Roles-Create": false, "Roles-Edit": false, "Roles-Delete": false,
    },
    teacher: {
        "Dashboard-View": true, "Dashboard-Create": false, "Dashboard-Edit": false, "Dashboard-Delete": false,
        "Attendance-View": true, "Attendance-Create": true, "Attendance-Edit": true, "Attendance-Delete": false,
        "Fees-View": false, "Fees-Create": false, "Fees-Edit": false, "Fees-Delete": false,
        "Results-View": true, "Results-Create": true, "Results-Edit": true, "Results-Delete": false,
        "Notices-View": true, "Notices-Create": true, "Notices-Edit": true, "Notices-Delete": false,
        "Operations-View": false, "Operations-Create": false, "Operations-Edit": false, "Operations-Delete": false,
        "Reports-View": true, "Reports-Create": true, "Reports-Edit": false, "Reports-Delete": false,
        "Users-View": false, "Users-Create": false, "Users-Edit": false, "Users-Delete": false,
        "Roles-View": false, "Roles-Create": false, "Roles-Edit": false, "Roles-Delete": false,
    },
    student: {
        "Dashboard-View": true, "Dashboard-Create": false, "Dashboard-Edit": false, "Dashboard-Delete": false,
        "Attendance-View": true, "Attendance-Create": false, "Attendance-Edit": false, "Attendance-Delete": false,
        "Fees-View": true, "Fees-Create": false, "Fees-Edit": false, "Fees-Delete": false,
        "Results-View": true, "Results-Create": false, "Results-Edit": false, "Results-Delete": false,
        "Notices-View": true, "Notices-Create": false, "Notices-Edit": false, "Notices-Delete": false,
        "Operations-View": false, "Operations-Create": false, "Operations-Edit": false, "Operations-Delete": false,
        "Reports-View": false, "Reports-Create": false, "Reports-Edit": false, "Reports-Delete": false,
        "Users-View": false, "Users-Create": false, "Users-Edit": false, "Users-Delete": false,
        "Roles-View": false, "Roles-Create": false, "Roles-Edit": false, "Roles-Delete": false,
    },
    parent: {
        "Dashboard-View": true, "Dashboard-Create": false, "Dashboard-Edit": false, "Dashboard-Delete": false,
        "Attendance-View": true, "Attendance-Create": false, "Attendance-Edit": false, "Attendance-Delete": false,
        "Fees-View": true, "Fees-Create": false, "Fees-Edit": false, "Fees-Delete": false,
        "Results-View": true, "Results-Create": false, "Results-Edit": false, "Results-Delete": false,
        "Notices-View": true, "Notices-Create": false, "Notices-Edit": false, "Notices-Delete": false,
        "Operations-View": false, "Operations-Create": false, "Operations-Edit": false, "Operations-Delete": false,
        "Reports-View": false, "Reports-Create": false, "Reports-Edit": false, "Reports-Delete": false,
        "Users-View": false, "Users-Create": false, "Users-Edit": false, "Users-Delete": false,
        "Roles-View": false, "Roles-Create": false, "Roles-Edit": false, "Roles-Delete": false,
    },
}

// ============= OVERVIEW SECTION =============
export function RolesOverview() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-5">
                {ROLE_DEFINITIONS.map((r) => (
                    <StatCard
                        key={r.role}
                        title={r.label}
                        value={r.permissionCount}
                        icon={r.icon}
                        variant={r.variant}
                        footer={`${r.permissionCount} permissions`}
                    />
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Shield className="size-5" />
                        Role-Based Access Control (RBAC)
                    </CardTitle>
                    <CardDescription>
                        EduPortal uses a role-based access control system to manage permissions across the platform.
                        Each user is assigned exactly one role that determines their access level to features, data, and actions.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{ROLE_DEFINITIONS.length} roles defined</Badge>
                        <Badge variant="outline">9 permission areas</Badge>
                        <Badge variant="outline">4 action types per area</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Roles follow the principle of least privilege — each role only has the minimum permissions needed for its responsibilities.
                        Administrators have full access, while students and parents have read-only access to their own data.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

// ============= MANAGE SECTION =============
interface RoleTableRow {
    [key: string]: unknown
    role: string
    label: string
    description: string
    permissionCount: number
    status: string
}

export function RolesManageSection() {
    const roleRows: RoleTableRow[] = ROLE_DEFINITIONS.map((r) => ({
        role: r.role,
        label: r.label,
        description: r.description,
        permissionCount: r.permissionCount,
        status: "active",
    }))

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Key className="size-5" />
                        Manage Roles
                    </CardTitle>
                    <CardDescription>
                        View all system roles and their configurations. Each role defines a specific set of permissions that control access to features and data.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{ROLE_DEFINITIONS.length} roles</Badge>
                        <Badge variant="outline" className="gap-1.5">
                            <Lock className="size-3" />
                            System-defined
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            <DataTable<RoleTableRow>
                title="Role Definitions"
                description="All available roles with their permission counts and statuses"
                columns={[
                    {
                        key: "label",
                        header: "Role",
                        render: (r) => {
                            const def = ROLE_DEFINITIONS.find((d) => d.role === r.role)
                            const Icon = def?.icon ?? Shield
                            return (
                                <div className="flex items-center gap-2">
                                    <Icon className="size-4 text-muted-foreground" />
                                    <span className="font-medium">{r.label}</span>
                                </div>
                            )
                        },
                    },
                    {
                        key: "description",
                        header: "Description",
                        cellClassName: "max-w-xs",
                        render: (r) => (
                            <span className="text-sm text-muted-foreground line-clamp-2">{r.description}</span>
                        ),
                    },
                    {
                        key: "permissionCount",
                        header: "Permissions",
                        render: (r) => <Badge variant="outline">{r.permissionCount}</Badge>,
                    },
                    {
                        key: "status",
                        header: "Status",
                        render: (r) => <StatusBadge status={r.status as "active"} />,
                    },
                ]}
                data={roleRows}
                keyExtractor={(r) => r.role}
            />
        </div>
    )
}

// ============= PERMISSIONS SECTION =============
export function RolesPermissionsSection() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lock className="size-5" />
                        Permissions Matrix
                    </CardTitle>
                    <CardDescription>
                        Granular permission overview for each role across all modules. Green checkmarks indicate granted permissions, red crosses indicate denied.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{PERMISSION_AREAS.length} permission areas</Badge>
                        <Badge variant="outline">{PERMISSION_ACTIONS.length} actions per area</Badge>
                        <Badge variant="outline">{ROLE_DEFINITIONS.length} roles</Badge>
                    </div>
                </CardContent>
            </Card>

            {ROLE_DEFINITIONS.map((roleDef) => (
                <Card key={roleDef.role}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <roleDef.icon className="size-4" />
                            {roleDef.label}
                            <Badge variant="secondary" className="ml-auto text-xs">
                                {roleDef.permissionCount} permissions
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Module</th>
                                        {PERMISSION_ACTIONS.map((action) => (
                                            <th key={action} className="px-3 py-2 text-center font-medium text-muted-foreground">
                                                {action}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {PERMISSION_AREAS.map((area) => (
                                        <tr key={area} className="border-b last:border-0">
                                            <td className="px-3 py-2 font-medium">{area}</td>
                                            {PERMISSION_ACTIONS.map((action) => {
                                                const key = `${area}-${action}`
                                                const allowed = PERMISSIONS[roleDef.role]?.[key] ?? false
                                                return (
                                                    <td key={action} className="px-3 py-2 text-center">
                                                        {allowed ? (
                                                            <CheckCircle className="mx-auto size-4 text-green-600 dark:text-green-400" />
                                                        ) : (
                                                            <XCircle className="mx-auto size-4 text-red-400 dark:text-red-600" />
                                                        )}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}


