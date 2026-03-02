import type { Metadata } from "next"
import { SectionShell } from "@/features/dashboard/components/section-shell"
import { ROUTES } from "@/lib/routes"

export const metadata: Metadata = {
    title: "Roles | Dashboard",
    description: "Manage user roles and permissions",
}

const TABS = [
    { label: "Overview", value: "overview", href: ROUTES.dashboard.roles.overview },
    { label: "Manage", value: "manage", href: ROUTES.dashboard.roles.manage },
    { label: "Permissions", value: "permissions", href: ROUTES.dashboard.roles.permissions },
    { label: "Users", value: "users", href: ROUTES.dashboard.roles.users },
]

export default function RolesLayout({ children }: { children: React.ReactNode }) {
    return (
        <SectionShell title="Roles & Permissions" description="Manage user roles and access control" tabs={TABS}>
            {children}
        </SectionShell>
    )
}
