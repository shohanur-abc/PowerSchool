import { ReactNode } from "react"

export default function UsersOverviewLayout({
    stats,
    kpi,
    chart,
    "chart-trend": chartTrend,
    "chart-verification": chartVerification,
    table,
    "table-roles": tableRoles,
    "progress-verification": progressVerification,
    summary,
    comparison,
}: {
    stats: ReactNode
    kpi: ReactNode
    chart: ReactNode
    "chart-trend": ReactNode
    "chart-verification": ReactNode
    table: ReactNode
    "table-roles": ReactNode
    "progress-verification": ReactNode
    summary: ReactNode
    comparison: ReactNode
}) {
    return (
        <div className="space-y-6">
            {/* Row 1 — Stat cards */}
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-4">{stats}</div>

            {/* Row 2 — KPI metric cards */}
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-4">{kpi}</div>

            {/* Row 3 — Charts: role bar + registration trend */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {chart}
                {chartTrend}
            </div>

            {/* Row 4 — Verification chart + progress */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {chartVerification}
                {progressVerification}
            </div>

            {/* Row 5 — Tables: recent users + role distribution */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {table}
                {tableRoles}
            </div>

            {/* Row 6 — Summary + comparison */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {summary}
                {comparison}
            </div>
        </div>
    )
}
