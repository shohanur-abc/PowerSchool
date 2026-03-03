import { SummaryGrid } from "@/components/molecules/summary-grid"
import { Shield, Key, Layers, Grid3X3 } from "lucide-react"

export function RoleSummary() {
    return (
        <SummaryGrid
            title="RBAC Summary"
            description="Role-based access control overview"
            items={[
                { label: "Roles Defined", value: "5", icon: Shield },
                { label: "Permission Areas", value: "9", icon: Grid3X3 },
                { label: "Actions per Area", value: "4", icon: Key },
                { label: "Total Possible", value: "36", icon: Layers },
            ]}
        />
    )
}
