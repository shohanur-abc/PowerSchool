import { RankingTable } from "@/components/molecules/ranking-table"

export function OperationsSubjectCoverageTable({ data, loading }: { data: SubjectRow[]; loading?: boolean }) {
    return (
        <RankingTable<SubjectRow>
            title="Subject Coverage"
            columns={[
                { key: "subject", header: "Subject" },
                { key: "count", header: "Total Teachers" },
                { key: "activeCount", header: "Active", render: (r) => <span className="text-green-600 font-semibold">{r.activeCount}</span> },
            ]}
            data={data}
            showRank={false}
            loading={loading}
        />
    )
}

interface SubjectRow {
    subject: string
    count: number
    activeCount: number
}
