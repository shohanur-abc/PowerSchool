import { UserRolesTable } from "@/features/dashboard/users/overview/@table-roles"
import { User } from "@/services/user.service"

export default async function TableRolesPage() {
    const roleCounts = await User.roleCounts()
    return <UserRolesTable roleCounts={roleCounts} />
}
