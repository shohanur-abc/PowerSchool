import { ReactNode } from "react"

export default function FeesOverviewLayout({ stats, chart, "table-payments": tablePayments, "table-overdue": tableOverdue }: Record<string, ReactNode>) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-4">
                {stats}
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {chart}{tableOverdue}
            </div>
            {tablePayments}
        </div>
    )
}
