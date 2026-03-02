import mongoose, { Schema } from "mongoose"
import "./user"

// ============= SCHEMA DEFINITION =============
const noticeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high", "urgent"],
            default: "medium",
        },
        targetAudience: {
            type: [String],
            enum: ["all", "admin", "teacher", "student", "parent"],
            default: ["all"],
        },
        publishDate: {
            type: Date,
            default: Date.now,
        },
        expiryDate: {
            type: Date,
        },
        status: {
            type: String,
            enum: ["draft", "published", "archived"],
            default: "draft",
        },
        attachments: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,

        statics: {
            statusCounts() {
                return this.aggregate([
                    { $group: { _id: "$status", count: { $sum: 1 } } },
                ])
            },
            getAll(limit: number = 20) {
                return this.find()
                    .populate("author", "name")
                    .sort({ publishDate: -1 })
                    .limit(limit)
            },
            getRecent(limit: number = 10) {
                return this.find()
                    .populate("author", "name")
                    .sort({ publishDate: -1 })
                    .limit(limit)
            },
        },
    }
)

// ============= INDEXES =============
noticeSchema.index({ status: 1, publishDate: -1 })
noticeSchema.index({ targetAudience: 1 })
noticeSchema.index({ priority: 1 })


const y = () => mongoose.model("Notice", noticeSchema)
export const NoticeModel = mongoose.models.Notice as ReturnType<typeof y> || y()
