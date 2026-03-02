import mongoose, { Schema } from "mongoose"
import "./student"

// ============= SCHEMA DEFINITION =============
const feeSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        type: {
            type: String,
            enum: ["tuition", "exam", "library", "transport", "hostel", "other"],
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        dueDate: {
            type: Date,
            required: true,
        },
        paidDate: {
            type: Date,
        },
        paidAmount: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            enum: ["paid", "unpaid", "partial", "overdue", "waived"],
            default: "unpaid",
        },
        paymentMethod: {
            type: String,
            enum: ["cash", "card", "bank-transfer", "online", "cheque"],
        },
        receiptNumber: {
            type: String,
        },
        academicYear: {
            type: String,
            required: true,
        },
        month: {
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
            statusBreakdown(academicYear: string) {
                return this.aggregate([
                    { $match: { academicYear } },
                    { $group: { _id: "$status", count: { $sum: 1 }, total: { $sum: "$amount" }, collected: { $sum: "$paidAmount" } } },
                ])
            },
            getRecentPayments(limit: number = 10) {
                return this.find({ status: "paid" })
                    .populate("student", "name rollNumber")
                    .sort({ paidDate: -1 })
                    .limit(limit)
            },
            getOverdue(limit: number = 10) {
                return this.find({ status: { $in: ["overdue", "unpaid"] } })
                    .populate("student", "name rollNumber")
                    .sort({ dueDate: 1 })
                    .limit(limit)
            },
            getAll(limit: number = 200) {
                return this.find()
                    .populate("student", "name rollNumber")
                    .sort({ dueDate: -1 })
                    .limit(limit)
            },
            feeStructure(academicYear: string) {
                return this.aggregate([
                    { $match: { academicYear } },
                    { $group: { _id: "$type", totalAmount: { $sum: "$amount" }, avgAmount: { $avg: "$amount" }, count: { $sum: 1 } } },
                    { $sort: { totalAmount: -1 } },
                ])
            },
            feeTotals(academicYear: string) {
                return this.aggregate([
                    { $match: { academicYear } },
                    { $group: { _id: null, total: { $sum: "$amount" }, collected: { $sum: "$paidAmount" } } },
                ])
            },
        },
    }
)


// ============= INDEXES =============
feeSchema.index({ student: 1, academicYear: 1 })
feeSchema.index({ status: 1 })
feeSchema.index({ dueDate: 1 })
feeSchema.index({ type: 1 })


const y = () => mongoose.model("Fee", feeSchema)
export const FeeModel = mongoose.models.Fee as ReturnType<typeof y> || y()
