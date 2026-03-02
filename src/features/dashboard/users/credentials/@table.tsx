"use client"

import * as React from "react"
import { type ColumnDef } from "@tanstack/react-table"
import { AdvancedDataTable, SortableHeader } from "@/components/molecules/advanced-data-table"
import { DropdownActions } from "@/components/molecules/dropdown-actions"
import { ConfirmDialog } from "@/components/molecules/confirm-dialog"
import { MutationFormSheet } from "@/components/molecules/mutation-form-sheet"
import { StatusBadge } from "@/components/molecules/status-badge"
import { Select } from "@/components/molecules/select"
import { Badge } from "@/components/ui/badge"
import { userRoleSchema, type UserRoleFormData } from "@/features/dashboard/validators"
import { updateUserRole, deleteUser } from "@/features/dashboard/actions/mutations"
import { Edit, Trash2, Shield } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


// ============= COMPONENT =============
export function CredentialsTable({ users, loading }: { users: UserRow[]; loading?: boolean }) {
    const router = useRouter()
    const [editOpen, setEditOpen] = React.useState(false)
    const [editUser, setEditUser] = React.useState<UserRow | null>(null)
    const [deleteId, setDeleteId] = React.useState<string | null>(null)

    const columns: ColumnDef<UserRow>[] = [
        {
            accessorKey: "name",
            header: ({ column }) => <SortableHeader column={column} title="Name" />,
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="font-medium">{row.original.name}</span>
                    <span className="text-xs text-muted-foreground">{row.original.email}</span>
                </div>
            ),
        },
        {
            accessorKey: "role",
            header: ({ column }) => <SortableHeader column={column} title="Role" />,
            cell: ({ row }) => (
                <Badge variant="outline" className={ROLE_COLORS[row.original.role]}>
                    <Shield className="mr-1 size-3" />
                    {row.original.role}
                </Badge>
            ),
        },
        {
            accessorKey: "emailVerified",
            header: "Verified",
            cell: ({ row }) => (
                <StatusBadge
                    status={row.original.emailVerified ? "active" : "inactive"}
                    label={row.original.emailVerified ? "Verified" : "Unverified"}
                />
            ),
        },
        {
            accessorKey: "createdAt",
            header: ({ column }) => <SortableHeader column={column} title="Joined" />,
            cell: ({ row }) => (
                <span className="text-sm text-muted-foreground">
                    {new Date(row.original.createdAt).toLocaleDateString("en-US", {
                        year: "numeric", month: "short", day: "numeric",
                    })}
                </span>
            ),
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const user = row.original
                return (
                    <DropdownActions
                        items={[
                            {
                                label: "Change Role",
                                icon: Edit,
                                onClick: () => {
                                    setEditUser(user)
                                    setEditOpen(true)
                                },
                            },
                            {
                                label: "Delete User",
                                icon: Trash2,
                                destructive: true,
                                onClick: () => setDeleteId(user._id),
                            },
                        ]}
                    />
                )
            },
        },
    ]

    return (
        <>
            <AdvancedDataTable
                columns={columns}
                data={users}
                searchKey="name"
                searchPlaceholder="Search users..."
                loading={loading}
            />

            {/* Role Edit Sheet */}
            <MutationFormSheet<UserRoleFormData>
                open={editOpen}
                onOpenChange={setEditOpen}
                title={`Change Role — ${editUser?.name}`}
                description="Update the user's role assignment. This will change their permissions across the platform."
                schema={userRoleSchema}
                defaultValues={{ role: (editUser?.role as UserRoleFormData["role"]) ?? "student" }}
                onSubmit={async (data) => {
                    const result = await updateUserRole(editUser!._id, data)
                    if (result.success) router.refresh()
                    return result
                }}
                submitLabel="Update Role"
            >
                {() => (
                    <Select
                        name="role"
                        label="Role"
                        options={[
                            { label: "Admin", value: "admin" },
                            { label: "Principal", value: "principal" },
                            { label: "Teacher", value: "teacher" },
                            { label: "Student", value: "student" },
                            { label: "Parent", value: "parent" },
                        ]}
                    />
                )}
            </MutationFormSheet>

            {/* Delete Confirmation */}
            {deleteId && (
                <ConfirmDialog
                    trigger={<span ref={(el) => { if (el) el.click() }} className="hidden" />}
                    title="Delete User"
                    description="This will permanently remove the user and their authentication data. This action cannot be undone."
                    confirmLabel="Delete"
                    variant="destructive"
                    onConfirm={async () => {
                        const result = await deleteUser(deleteId)
                        if (result.success) {
                            toast.success(result.message)
                            router.refresh()
                        } else {
                            toast.error(result.error)
                        }
                        setDeleteId(null)
                    }}
                />
            )}
        </>
    )
}


// ============= ROLE COLORS =============
const ROLE_COLORS: Record<string, string> = {
    admin: "bg-red-100 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
    principal: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
    teacher: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
    student: "bg-green-100 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
    parent: "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800",
}

// ============= TYPES =============
interface UserRow {
    _id: string
    name: string
    email: string
    role: string
    emailVerified: boolean
    image: string | null
    createdAt: string
}