import { ActivityTable } from "@/features/dashboard/users/activity/@table"
import { User } from "@/services/user.service"

export default async function ActivityTablePage() {
    const users = await User.getAll()
    return <ActivityTable users={users} />
}
