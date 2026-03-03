import { ReactNode } from "react"

export default function RolesOverviewLayout({
    stats,
    kpi,
    info,
    "chart-permissions": chartPermissions,
    "chart-access": chartAccess,
    "table-roles": tableRoles,
    "table-matrix": tableMatrix,
    "progress-coverage": progressCoverage,
    summary,
    comparison,
}: {
    stats: ReactNode
    kpi: ReactNode
    info: ReactNode
    "chart-permissions": ReactNode
    "chart-access": ReactNode
    "table-roles": ReactNode
    "table-matrix": ReactNode
    "progress-coverage": ReactNode
    summary: ReactNode
    comparison: ReactNode
}) {
    return (
        <div className="space-y-6">
            {/* Row 1 — Stat cards (5 roles) */}
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-5">{stats}</div>

            {/* Row 2 — KPI metric cards */}
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-4">{kpi}</div>

            {/* Row 3 — RBAC info card */}
            {info}

            {/* Row 4 — Charts: permissions bar + access pie */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {chartPermissions}
                {chartAccess}
            </div>

            {/* Row 5 — Tables: role definitions + matrix summary */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {tableRoles}
                {tableMatrix}
            </div>

            {/* Row 6 — Progress + summary */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {progressCoverage}
                {summary}
            </div>

            {/* Row 7 — Comparison */}
            {comparison}
        </div>
    )
}
