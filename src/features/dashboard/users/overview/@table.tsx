import { DataTable } from "@/components/molecules/data-table"
import { StatusBadge } from "@/components/molecules/status-badge"
import { AvatarCell } from "@/components/molecules/avatar-cell"
import { Badge } from "@/components/ui/badge"


export function RecentUsersTable({ users, loading }: { users: UserRow[]; loading?: boolean }) {
    return (
        <DataTable<UserRow>
            title="Recent Users"
            description="Latest registered users"
            columns={[
                { key: "name", header: "Name", render: (r) => <AvatarCell name={r.name} secondary={r.email} image={r.image} /> },
                { key: "role", header: "Role", render: (r) => <Badge variant="outline">{r.role}</Badge> },
                {
                    key: "emailVerified", header: "Verified",
                    render: (r) => <StatusBadge status={r.emailVerified ? "active" : "inactive"} label={r.emailVerified ? "Yes" : "No"} />,
                },
                {
                    key: "createdAt", header: "Joined",
                    render: (r) => <span className="text-sm text-muted-foreground">{r.createdAt}</span>,
                },
            ]}
            data={users}
            keyExtractor={(r) => r._id}
            loading={loading}
        />
    )
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