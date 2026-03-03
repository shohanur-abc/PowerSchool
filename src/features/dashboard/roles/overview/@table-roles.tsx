import { DataTable } from "@/components/molecules/data-table"
import { StatusBadge } from "@/components/molecules/status-badge"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Crown, UserCog, GraduationCap, Users, Shield, type LucideIcon } from "lucide-react"

const ROLE_ICONS: Record<string, LucideIcon> = {
    admin: ShieldCheck,
    principal: Crown,
    teacher: UserCog,
    student: GraduationCap,
    parent: Users,
}

interface RoleTableRow {
    [key: string]: unknown
    role: string
    label: string
    description: string
    permissionCount: number
    status: string
}

const roleRows: RoleTableRow[] = [
    { role: "admin", label: "Administrator", description: "Full system access. Manages users, roles, settings, and all institutional data.", permissionCount: 36, status: "active" },
    { role: "principal", label: "Principal", description: "Institutional oversight with read access to all modules.", permissionCount: 28, status: "active" },
    { role: "teacher", label: "Teacher", description: "Manages attendance, results, and notices for assigned classes.", permissionCount: 18, status: "active" },
    { role: "student", label: "Student", description: "View-only access to own attendance, results, fees, and notices.", permissionCount: 8, status: "active" },
    { role: "parent", label: "Parent", description: "View access to linked student's attendance, results, and fee status.", permissionCount: 6, status: "active" },
]

export function RoleDefinitionsTable({ loading }: { loading?: boolean }) {
    return (
        <DataTable<RoleTableRow>
            title="Role Definitions"
            description="All available roles with permission counts"
            columns={[
                {
                    key: "label",
                    header: "Role",
                    render: (r) => {
                        const Icon = ROLE_ICONS[r.role] ?? Shield
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
                    render: (r) => <span className="text-sm text-muted-foreground line-clamp-2">{r.description}</span>,
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
            loading={loading}
        />
    )
}
