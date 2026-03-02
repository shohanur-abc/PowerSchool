import 'server-only'

import { cache } from 'react'
import { TeacherModel } from "@/models/teacher"
import { fmtDate } from '@/lib/utils'
import { connectDB, sid } from '@/lib/db'

export class Teacher {
    static async getAll() {
        await connectDB()
        const teachers = await TeacherModel.getAll()

        return teachers.map((t) => ({
            _id: sid(t),
            name: t.name,
            email: t.email,
            phone: t.phone ?? "",
            subject: t.subject,
            department: t.department,
            qualification: t.qualification ?? "",
            status: t.status,
            joinDate: fmtDate(t.joinDate),
        }))
    }

    static countActive = cache(async () => {
        await connectDB()
        return TeacherModel.countActive()
    })
}
