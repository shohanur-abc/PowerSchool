import { RolesUserStatCards } from "@/features/dashboard/roles/users/@stats"

export default function StatsLoading() {
    return <RolesUserStatCards roleCounts={data} loading={true} />
}

const data = new Array(5).fill(0).map((_, i) => ({
    role: ["admin", "principal", "teacher", "student", "parent"][i],
    count: Math.floor(Math.random() * 100),
}))