import { redirect } from "next/navigation"
import ROUTES from "@/lib/routes"

export default function ResultsPage() {
  redirect(ROUTES.dashboard.results.overview)
}
