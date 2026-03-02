import type { Metadata } from "next"
import { SectionShell } from "@/features/dashboard/components/section-shell"
import { ROUTES } from "@/lib/routes"

export const metadata: Metadata = {
    title: "Users | Dashboard",
    description: "Manage user accounts and activity",
}

const TABS = [
    { label: "Overview", value: "overview", href: ROUTES.dashboard.users.overview },
    { label: "Credentials", value: "credentials", href: ROUTES.dashboard.users.credentials },
    { label: "Activity", value: "activity", href: ROUTES.dashboard.users.activity },
]

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <SectionShell title="Users" description="User accounts, credentials, and activity" tabs={TABS}>
            {children}
        </SectionShell>
    )
}
