import { redirect } from "next/navigation"
import ROUTES from "@/lib/routes"

export default function UsersPage() {
  redirect(ROUTES.dashboard.users.overview)
}
