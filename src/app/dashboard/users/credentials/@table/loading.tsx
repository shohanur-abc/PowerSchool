import { CredentialsTable } from "@/features/dashboard/users/credentials/@table"

export default function TableLoading() {
    return <CredentialsTable users={users} loading />
}

const users = Array.from({ length: 5 }, (_, i) => ({
    _id: "user-id-" + i,
    name: "Anonymous",
    email: "x9zq8pl7t4rv3nwy5fk2g1jhmcd6@gmail.com",
    role: "parent",
    emailVerified: false,
    image: null,
    createdAt: new Date("2026-02-25").toISOString(),
}))