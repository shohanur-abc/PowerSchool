import { RecentUsersTable } from "@/features/dashboard/users/overview/@table"
import { User } from "@/services/user.service"

export default async function UserTablePage() {
    const users = await User.getRecent()
    return <RecentUsersTable users={users} />
}
