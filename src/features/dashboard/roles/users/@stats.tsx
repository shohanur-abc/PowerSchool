import { StatCard } from "@/components/molecules/stat-card"
import { Crown, GraduationCap, ShieldCheck, UserCog, Users } from "lucide-react"

interface RoleCountItem {
    role: string
    count: number
}



export function RolesUserStatCards({ roleCounts, loading }: { roleCounts: RoleCountItem[]; loading?: boolean }) {
    const ordered = ROLE_ORDER.map((role) => {
        const config = ROLE_CONFIG[role]
        const count = roleCounts.find((rc) => rc.role === role)?.count ?? 0
        return { role, count, ...config }
    })

    return (
        <>
            {ordered.map((r) => (
                <StatCard
                    key={r.role}
                    title={r.label}
                    value={r.count}
                    icon={r.icon}
                    variant={r.variant}
                    loading={loading}
                />
            ))}
        </>
    )
}

const ROLE_ORDER = ["admin", "principal", "teacher", "student", "parent"]

const ROLE_CONFIG: Record<string, {
    label: string
    icon: typeof ShieldCheck
    variant: "danger" | "warning" | "info" | "success" | "default"
}> = {
    admin: {
        label: "Administrator",
        icon: ShieldCheck,
        variant: "danger"
    },
    principal: {
        label: "Principal",
        icon: Crown,
        variant: "warning"
    },
    teacher: {
        label: "Teacher",
        icon: UserCog,
        variant: "info"
    },
    student: {
        label: "Student",
        icon: GraduationCap,
        variant: "success"
    },
    parent: {
        label: "Parent",
        icon: Users,
        variant: "default"
    },
}
