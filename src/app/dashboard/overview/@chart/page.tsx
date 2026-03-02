import { DashboardOverviewChart } from "@/features/dashboard/overview/@chart";
import { Dashboard } from "@/services/dashboard.service";

export default async function Chart() {
    const stats = await Dashboard.stats()
    return <DashboardOverviewChart stats={stats} />
}