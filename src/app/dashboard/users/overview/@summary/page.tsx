import { UserSummary } from "@/features/dashboard/users/overview/@summary"
import { User } from "@/services/user.service"

export default async function SummaryPage() {
    const stats = await User.verificationStats()
    return (
        <UserSummary
            total={stats.total}
            verified={stats.verified}
            unverified={stats.unverified}
            verifiedRate={stats.rate}
        />
    )
}
