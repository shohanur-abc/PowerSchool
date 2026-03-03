import { ProgressList } from "@/components/molecules/progress-list"

export function UserVerificationProgress({ verified, unverified }: { verified: number; unverified: number; loading?: boolean }) {
    const total = verified + unverified
    const verifiedPct = total > 0 ? Math.round((verified / total) * 100) : 0
    const unverifiedPct = total > 0 ? Math.round((unverified / total) * 100) : 0

    return (
        <ProgressList
            title="Verification Progress"
            description="Email verification breakdown"
            items={[
                { label: "Verified", value: verifiedPct, maxValue: 100, suffix: `% (${verified})` },
                { label: "Unverified", value: unverifiedPct, maxValue: 100, suffix: `% (${unverified})` },
            ]}
        />
    )
}
