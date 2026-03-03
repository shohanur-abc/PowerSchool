import { ProgressList } from "@/components/molecules/progress-list"

export function RolePermissionCoverage() {
    const maxPermissions = 36

    return (
        <ProgressList
            title="Permission Coverage"
            description="Percentage of total permissions granted per role"
            items={[
                { label: "Administrator", value: 36, maxValue: maxPermissions, suffix: "/ 36" },
                { label: "Principal", value: 28, maxValue: maxPermissions, suffix: "/ 36" },
                { label: "Teacher", value: 18, maxValue: maxPermissions, suffix: "/ 36" },
                { label: "Student", value: 8, maxValue: maxPermissions, suffix: "/ 36" },
                { label: "Parent", value: 6, maxValue: maxPermissions, suffix: "/ 36" },
            ]}
        />
    )
}
