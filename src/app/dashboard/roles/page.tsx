import { redirect } from "next/navigation"
import ROUTES from "@/lib/routes"

export default function RolesPage() {
  redirect(ROUTES.dashboard.roles.overview)
}
