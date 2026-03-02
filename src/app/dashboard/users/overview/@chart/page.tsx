import { UserOverviewCharts } from "@/features/dashboard/users/overview/@chart"
import { User } from "@/services/user.service"

export default async function UserChartPage() {
    const roleCounts = await User.roleCounts()
    return <UserOverviewCharts roleCounts={roleCounts} />
}
