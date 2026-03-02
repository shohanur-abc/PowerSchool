import { RolesUsersTable } from "@/features/dashboard/roles/users/@table"
import { User } from "@/services/user.service"

export default async function RolesUserTablePage() {
    const users = await User.getAll()
    return <RolesUsersTable users={users} />
}
