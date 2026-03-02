import { ReactNode } from "react"

export default function ResultsOverviewLayout({ stats, "chart-grade": chartgrade, "chart-subject": chartsubject, table }: Record<string, ReactNode>) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @5xl:grid-cols-4">
                {stats}
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {chartgrade}{chartsubject}
            </div>
            {table}
        </div>
    )
}
