import { UserKpi } from "@/features/dashboard/users/overview/@kpi"

export default function KpiLoading() {
    return <UserKpi verifiedRate={333} totalUsers={333} recentCount={333} roleCount={333} loading={true} />
}
