import { RolesUsersTable } from "@/features/dashboard/roles/users/@table"

export default function TableLoading() {
    return <RolesUsersTable users={users} loading />
}

const users = new Array(10).fill(0).map((_, i) => ({
    _id: `user-${i}`,
    name: `Ibrahim Hossan Emon`,
    email: `x9zq8pl7t4rv3nwy5fk2g1jhmcd6@gmail.com`,
    role: ["admin", "principal", "teacher", "student", "parent"][i % 5],
    status: "active",
    emailVerified: true,
    image: null,
    createdAt: "2023-01-01",
}))

