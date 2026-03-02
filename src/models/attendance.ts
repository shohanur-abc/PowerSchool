import mongoose, { Schema } from "mongoose"
import "./student"
import "./class"
import "./user"

// ============= SCHEMA DEFINITION =============
const attendanceSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        classId: {
            type: Schema.Types.ObjectId,
            ref: "Class",
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ["present", "absent", "late", "excused"],
            required: true,
        },
        markedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        remarks: {
            type: String,
        },
    },
    {
        timestamps: true,

        statics: {
            stats() {
                return this.aggregate([{
                    $group: {
                        _id: "$status",
                        count: { $sum: 1 }
                    }
                }])
            },
            getRecent(limit: number = 10) {
                return this.find()
                    .populate("student", "name rollNumber")
                    .populate("classId", "name section")
                    .sort({ date: -1 })
                    .limit(limit)
            },
            getAll(limit: number = 200) {
                return this.find()
                    .populate("student", "name rollNumber")
                    .populate("classId", "name section")
                    .sort({ date: -1 })
                    .limit(limit)
            },
            todayStats() {
                const todayStart = new Date()
                todayStart.setHours(0, 0, 0, 0)
                const todayEnd = new Date()
                todayEnd.setHours(23, 59, 59, 999)
                return this.aggregate([
                    { $match: { date: { $gte: todayStart, $lte: todayEnd } } },
                    { $group: { _id: "$status", count: { $sum: 1 } } },
                ])
            },
            reportByDateStatus(limit: number = 100) {
                return this.aggregate([
                    { $group: { _id: { status: "$status", date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } } }, count: { $sum: 1 } } },
                    { $sort: { "_id.date": -1 } },
                    { $limit: limit },
                ])
            },
        },
        query: {
            // Add any custom query helpers here if needed in the future
        },
        methods: {
            // Add any instance methods here if needed in the future
        }
    },
)


// ============= INDEXES =============
attendanceSchema.index({ student: 1, date: 1 }, { unique: true })
attendanceSchema.index({ classId: 1, date: 1 })
attendanceSchema.index({ status: 1 })
attendanceSchema.index({ date: -1 })


const y = () => mongoose.model("Attendance", attendanceSchema)
export const AttendanceModel = mongoose.models.Attendance as ReturnType<typeof y> || y()

