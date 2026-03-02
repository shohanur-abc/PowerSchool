import { RolesUserStatCards } from "@/features/dashboard/roles/users/@stats"
import { User } from "@/services/user.service"

export default async function RolesUserStatsPage() {
    const users = await User.getAll()

    const roles = ["admin", "principal", "teacher", "student", "parent"]
    const roleCounts = roles.map((role) => ({
        role,
        count: users.filter((u) => u.role === role).length,
    }))

    return <RolesUserStatCards roleCounts={roleCounts} />
}
