import { UserVerificationChart } from "@/features/dashboard/users/overview/@chart-verification"
import { User } from "@/services/user.service"

export default async function ChartVerificationPage() {
    const stats = await User.verificationStats()
    return <UserVerificationChart verified={stats.verified} unverified={stats.unverified} />
}
