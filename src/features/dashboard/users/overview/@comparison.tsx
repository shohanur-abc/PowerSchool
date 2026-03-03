import { ComparisonBar } from "@/components/molecules/comparison-bar"

export function UserComparison({ roleCounts }: { roleCounts: { role: string; count: number }[] }) {
    const total = roleCounts.reduce((s, r) => s + r.count, 0)

    return (
        <ComparisonBar
            title="Role Comparison"
            description="Proportional distribution of user roles"
            items={roleCounts.map((r) => ({
                label: r.role.charAt(0).toUpperCase() + r.role.slice(1),
                value: r.count,
                percentage: total > 0 ? Math.round((r.count / total) * 100) : 0,
            }))}
        />
    )
}
