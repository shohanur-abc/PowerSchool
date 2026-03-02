interface AnalyticsStats {
    totalExams: number
    overallAvg: number
    overallPassRate: number
    topSubjectName: string
    topSubjectAvg: number | null
    loading?: boolean
}

interface ExamAnalytics {
    [key: string]: unknown
    exam: string
    avgMarks: number
    count: number
    passRate: number
}

interface SubjectAnalytics {
    [key: string]: unknown
    subject: string
    avgMarks: number
    maxMarks: number
    minMarks: number
    count: number
}