import { StatCard } from "@/components/molecules/stat-card"
import { ShieldCheck, Crown, UserCog, GraduationCap, Users } from "lucide-react"

export function RoleStatCards({ loading }: { loading?: boolean }) {
    return (
        <>
            <StatCard
                title="Administrator"
                value={36}
                icon={ShieldCheck}
                variant="danger"
                footer="Full system access"
                loading={loading}
            />
            <StatCard
                title="Principal"
                value={28}
                icon={Crown}
                variant="warning"
                footer="Institutional oversight"
                loading={loading}
            />
            <StatCard
                title="Teacher"
                value={18}
                icon={UserCog}
                variant="info"
                footer="Class management"
                loading={loading}
            />
            <StatCard
                title="Student"
                value={8}
                icon={GraduationCap}
                variant="success"
                footer="View-only access"
                loading={loading}
            />
            <StatCard
                title="Parent"
                value={6}
                icon={Users}
                footer="Linked student access"
                loading={loading}
            />
        </>
    )
}
