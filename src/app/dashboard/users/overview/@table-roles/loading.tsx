import { UserRolesTable } from "@/features/dashboard/users/overview/@table-roles"

export default function TableRolesLoading() {
    return <UserRolesTable roleCounts={[{ role: "OOOOOO", count: 333 }]} loading={true} />
}
