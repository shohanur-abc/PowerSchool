import { ComparisonBar } from "@/components/molecules/comparison-bar"

export function RoleComparison() {
    const total = 36 + 28 + 18 + 8 + 6

    return (
        <ComparisonBar
            title="Role Permission Comparison"
            description="Proportional permission distribution across roles"
            items={[
                { label: "Admin", value: 36, percentage: Math.round((36 / total) * 100) },
                { label: "Principal", value: 28, percentage: Math.round((28 / total) * 100) },
                { label: "Teacher", value: 18, percentage: Math.round((18 / total) * 100) },
                { label: "Student", value: 8, percentage: Math.round((8 / total) * 100) },
                { label: "Parent", value: 6, percentage: Math.round((6 / total) * 100) },
            ]}
        />
    )
}
