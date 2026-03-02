import { ActivityTable } from "@/features/dashboard/users/activity/@table"

export default function TableLoading() {
    return <ActivityTable users={users} loading />
}

const users = Array.from({ length: 10 }, (_, i) => ({
    _id: `user-${i}`,
    name: "Ibrahim Hossan Emon",
    email: "jibonm676@gmail.com",
    role: "student",
    emailVerified: false,
    image: null,
    createdAt: new Date("2026-02-26").toISOString(),
}))