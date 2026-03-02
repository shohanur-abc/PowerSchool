import mongoose, { Schema } from "mongoose"
import "./student"
import "./class"

// ============= SCHEMA DEFINITION =============
const resultSchema = new Schema(
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
        exam: {
            type: String,
            required: true,
            trim: true,
        },
        subject: {
            type: String,
            required: true,
            trim: true,
        },
        marks: {
            type: Number,
            required: true,
        },
        totalMarks: {
            type: Number,
            required: true,
        },
        grade: {
            type: String,
            enum: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F"],
        },
        academicYear: {
            type: String,
            required: true,
        },
        remarks: {
            type: String,
        },
    },
    {
        timestamps: true,

        statics: {
            gradeDistribution() {
                return this.aggregate([
                    { $group: { _id: "$grade", count: { $sum: 1 } } },
                    { $sort: { _id: 1 } },
                ])
            },
            getRecent(limit: number = 10) {
                return this.find()
                    .populate("student", "name rollNumber")
                    .populate("classId", "name section")
                    .sort({ createdAt: -1 })
                    .limit(limit)
            },
            avgBySubject() {
                return this.aggregate([
                    { $group: { _id: "$subject", avgMarks: { $avg: "$marks" }, totalExams: { $sum: 1 } } },
                    { $sort: { _id: 1 } },
                ])
            },
            getAll() {
                return this.find()
                    .populate("student", "name rollNumber")
                    .populate("classId", "name section")
                    .sort({ createdAt: -1 })
            },
        },
    }
)

// ============= MIDDLEWARE =============
resultSchema.pre("save", function () {
    const pct = (this.marks / this.totalMarks) * 100
    if (pct >= 90) this.grade = "A+"
    else if (pct >= 85) this.grade = "A"
    else if (pct >= 80) this.grade = "A-"
    else if (pct >= 75) this.grade = "B+"
    else if (pct >= 70) this.grade = "B"
    else if (pct >= 65) this.grade = "B-"
    else if (pct >= 60) this.grade = "C+"
    else if (pct >= 50) this.grade = "C"
    else if (pct >= 40) this.grade = "D"
    else this.grade = "F"
})

// ============= INDEXES =============
resultSchema.index({ student: 1, exam: 1, subject: 1 }, { unique: true })
resultSchema.index({ classId: 1, exam: 1 })
resultSchema.index({ academicYear: 1 })


const y = () => mongoose.model("Result", resultSchema)
export const ResultModel = mongoose.models.Result as ReturnType<typeof y> || y()
