import { RoleKpi } from "@/features/dashboard/roles/overview/@kpi"

export default function KpiLoading() {
    return <RoleKpi totalRoles={333} totalPermissions={333} avgPermissions={333} permissionAreas={333} loading={true} />
}
