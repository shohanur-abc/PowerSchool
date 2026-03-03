import { SummaryGrid } from "@/components/molecules/summary-grid"
import { Users, ShieldCheck, ShieldOff, TrendingUp } from "lucide-react"

interface UserSummaryProps {
    total: number
    verified: number
    unverified: number
    verifiedRate: number
}

export function UserSummary({ total, verified, unverified, verifiedRate }: UserSummaryProps) {
    return (
        <SummaryGrid
            title="User Summary"
            description="Key user metrics at a glance"
            items={[
                { label: "Total Users", value: String(total), icon: Users },
                { label: "Verified", value: String(verified), icon: ShieldCheck },
                { label: "Unverified", value: String(unverified), icon: ShieldOff },
                { label: "Verification Rate", value: `${verifiedRate}%`, icon: TrendingUp },
            ]}
        />
    )
}
