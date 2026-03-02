import { RecentUsersTable } from "@/features/dashboard/users/overview/@table"

export default function TableLoading() {
    return <RecentUsersTable users={users} loading={true} />
}

const users = Array.from({ length: 10 }).map((_, i) => ({
    _id: `user-${i + 1}`,
    name: "Anonymous",
    email: "x9zq8pl7t4rv3nwy5fk2g1jhmcd6@gmail.com",
    role: "parent",
    emailVerified: false,
    image: null,
    createdAt: "2026-02-25",
}))