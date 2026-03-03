import { RankingTable } from "@/components/molecules/ranking-table"

export function UserRolesTable({ roleCounts }: { roleCounts: { role: string; count: number }[]; loading?: boolean }) {
    const total = roleCounts.reduce((s, r) => s + r.count, 0)

    return (
        <RankingTable
            title="Role Distribution"
            description="Users grouped by role"
            columns={[
                { key: "role", header: "Role" },
                { key: "count", header: "Users" },
                { key: "percentage", header: "%" },
            ]}
            data={roleCounts.map((r): Record<string, unknown> => ({
                role: r.role.charAt(0).toUpperCase() + r.role.slice(1),
                count: r.count,
                percentage: `${total > 0 ? Math.round((r.count / total) * 100) : 0}%`,
            }))}
        />
    )
}
