import { UserVerificationProgress } from "@/features/dashboard/users/overview/@progress-verification"
import { User } from "@/services/user.service"

export default async function ProgressVerificationPage() {
    const stats = await User.verificationStats()
    return <UserVerificationProgress verified={stats.verified} unverified={stats.unverified} />
}
