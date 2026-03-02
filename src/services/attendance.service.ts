import 'server-only'

import { cache } from 'react'
import { AttendanceModel } from "@/models/attendance"
import { fmtDate } from '@/lib/utils'
import { connectDB, pop } from '@/lib/db'

export class Attendance {
    static stats = cache(async () => {
        await connectDB()
        const stats = await AttendanceModel.stats()

        const present = stats.find((s) => s._id === "present")?.count ?? 0
        const absent = stats.find((s) => s._id === "absent")?.count ?? 0
        const late = stats.find((s) => s._id === "late")?.count ?? 0
        const excused = stats.find((s) => s._id === "excused")?.count ?? 0
        const total = present + absent + late + excused

        return { present, absent, late, excused, total }
    })

    static async getRecent(limit: number = 10) {
        await connectDB()
        const recentRecords = await AttendanceModel.getRecent(limit)

        return recentRecords.map((r) => ({
            _id: String(r._id),
            studentName: pop(r.student, "name") || "Unknown",
            rollNumber: pop(r.student, "rollNumber"),
            className: `${pop(r.classId, "name")} ${pop(r.classId, "section")}`.trim(),
            date: fmtDate(r.date),
            status: r.status,
            remarks: r.remarks ?? "",
        }))
    }

    static async getAll(limit: number = 200) {
        await connectDB()
        const records = await AttendanceModel.getAll(limit)

        return records.map((r) => ({
            _id: String(r._id),
            studentName: pop(r.student, "name") || "Unknown",
            rollNumber: pop(r.student, "rollNumber"),
            className: `${pop(r.classId, "name")} ${pop(r.classId, "section")}`.trim(),
            date: fmtDate(r.date),
            status: r.status,
            remarks: r.remarks ?? "",
        }))
    }
}

