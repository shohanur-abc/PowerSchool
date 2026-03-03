import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export function RbacInfoCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Shield className="size-5" />
                    Role-Based Access Control (RBAC)
                </CardTitle>
                <CardDescription>
                    EduPortal uses a role-based access control system to manage permissions across the platform.
                    Each user is assigned exactly one role that determines their access level to features, data, and actions.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">5 roles defined</Badge>
                    <Badge variant="outline">9 permission areas</Badge>
                    <Badge variant="outline">4 action types per area</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                    Roles follow the principle of least privilege — each role only has the minimum permissions needed for its responsibilities.
                    Administrators have full access, while students and parents have read-only access to their own data.
                </p>
            </CardContent>
        </Card>
    )
}
