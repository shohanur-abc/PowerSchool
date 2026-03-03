import { UserComparison } from "@/features/dashboard/users/overview/@comparison"
import { User } from "@/services/user.service"

export default async function ComparisonPage() {
    const roleCounts = await User.roleCounts()
    return <UserComparison roleCounts={roleCounts} />
}
