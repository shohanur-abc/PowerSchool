import { Result } from "@/services/result.service"
import { Student } from "@/services/student.service"
import { Class } from "@/services/class.service"
import { ResultsView } from "@/features/dashboard/results/view"

export default async function ResultsViewPage() {
  const [results, students, classes] = await Promise.all([Result.getAll(), Student.getOptions(), Class.getOptions()])
  return <ResultsView results={results} students={students} classes={classes} />
}
