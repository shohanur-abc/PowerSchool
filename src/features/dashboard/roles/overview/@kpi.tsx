import { MetricCard } from "@/components/molecules/metric-card"
import { Shield, Key, Layers, Grid3X3 } from "lucide-react"

export function RoleKpi({ totalRoles, totalPermissions, avgPermissions, permissionAreas, loading }: RoleKpiProps & { loading?: boolean }) {
    return (
        <>
            <MetricCard
                title="Total Roles"
                value={totalRoles}
                subtitle="System-defined roles"
                icon={Shield}
                variant="default"
                loading={loading}
            />
            <MetricCard
                title="Total Permissions"
                value={totalPermissions}
                subtitle="Across all roles"
                icon={Key}
                variant="info"
                loading={loading}
            />
            <MetricCard
                title="Avg Permissions"
                value={avgPermissions}
                subtitle="Per role average"
                icon={Layers}
                variant="default"
                loading={loading}
            />
            <MetricCard
                title="Permission Areas"
                value={permissionAreas}
                subtitle="Module categories"
                icon={Grid3X3}
                variant="default"
                loading={loading}
            />
        </>
    )
}

interface RoleKpiProps {
    totalRoles: number
    totalPermissions: number
    avgPermissions: number
    permissionAreas: number
}
