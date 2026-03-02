import 'server-only'

import { cache } from 'react'
import { NoticeModel } from "@/models/notice"
import { fmtDate } from '@/lib/utils'
import { connectDB, pop } from '@/lib/db'

export class Notice {
    static statusCounts = cache(async () => {
        await connectDB()
        const counts = await NoticeModel.statusCounts()

        return counts.map((s) => ({
            status: s._id as string,
            count: s.count as number,
        }))
    })

    static async getAll() {
        await connectDB()
        const notices = await NoticeModel.getAll()

        return notices.map((n) => ({
            _id: String(n._id),
            title: n.title,
            content: n.content,
            authorName: pop(n.author, "name") || "Unknown",
            priority: n.priority,
            targetAudience: n.targetAudience,
            publishDate: fmtDate(n.publishDate),
            expiryDate: fmtDate(n.expiryDate),
            status: n.status,
        }))
    }

    static async getRecent(limit: number = 10) {
        await connectDB()
        const notices = await NoticeModel.getRecent(limit)

        return notices.map((n) => ({
            _id: String(n._id),
            title: n.title,
            authorName: pop(n.author, "name") || "Unknown",
            priority: n.priority,
            status: n.status,
            publishDate: fmtDate(n.publishDate),
        }))
    }

    static async overview() {
        await connectDB()
        const [notices, statusCounts] = await Promise.all([
            Notice.getAll(),
            Notice.statusCounts(),
        ])

        return { notices, statusCounts }
    }
}
