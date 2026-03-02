import { CredentialsTable } from "@/features/dashboard/users/credentials/@table"
import { User } from "@/services/user.service"

export default async function CredentialTablePage() {
    const users = await User.getAll()
    return <CredentialsTable users={users} />
}
