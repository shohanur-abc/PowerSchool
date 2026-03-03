import { RoleKpi } from "@/features/dashboard/roles/overview/@kpi"

export default function RoleKpiPage() {
    return (
        <RoleKpi
            totalRoles={5}
            totalPermissions={96}
            avgPermissions={19}
            permissionAreas={9}
        />
    )
}
