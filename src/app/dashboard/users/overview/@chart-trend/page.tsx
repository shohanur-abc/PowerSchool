import { UserRegistrationTrendChart } from "@/features/dashboard/users/overview/@chart-trend"
import { User } from "@/services/user.service"

export default async function ChartTrendPage() {
    const trend = await User.registrationTrend()
    return <UserRegistrationTrendChart data={trend} />
}
