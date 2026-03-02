import 'server-only'

import { cache } from 'react'
import { StudentModel } from "@/models/student"
import { fmtDate } from '@/lib/utils'
import { connectDB, sid } from '@/lib/db'

export class Student {
    static async getAll(limit?: number) {
        await connectDB()
        const students = await StudentModel.getAll(limit)

        return students.map((s) => ({
            _id: sid(s),
            name: s.name,
            email: s.email,
            rollNumber: s.rollNumber,
            section: s.section,
            guardianName: s.guardianName,
            guardianPhone: s.guardianPhone,
            status: s.status,
            gender: s.gender ?? "",
            dateOfBirth: fmtDate(s.dateOfBirth),
            admissionDate: fmtDate(s.admissionDate),
        }))
    }

    static async getActive(limit?: number) {
        await connectDB()
        const students = await StudentModel.getActive(limit)

        return students.map((s) => ({
            _id: sid(s),
            name: s.name,
            email: s.email,
            rollNumber: s.rollNumber,
            section: s.section,
            guardianName: s.guardianName,
            guardianPhone: s.guardianPhone,
            status: s.status,
            gender: s.gender ?? "",
            dateOfBirth: fmtDate(s.dateOfBirth),
            admissionDate: fmtDate(s.admissionDate),
        }))
    }

    static async getOptions() {
        await connectDB()
        const students = await StudentModel.getOptions()

        return students.map((s) => ({
            _id: sid(s),
            name: String(s.name),
            rollNumber: String(s.rollNumber),
        }))
    }

    static countActive = cache(async () => {
        await connectDB()
        return StudentModel.countActive()
    })

    static async getForClass(classSection: string) {
        await connectDB()
        const students = await StudentModel
            .find({ section: classSection, status: "active" })
            .sort({ rollNumber: 1 })
            .lean()

        return students.map((s) => ({
            _id: sid(s),
            name: s.name,
            rollNumber: s.rollNumber,
            section: s.section,
        }))
    }
}
