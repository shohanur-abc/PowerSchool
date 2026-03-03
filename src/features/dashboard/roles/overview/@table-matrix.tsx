import { RankingTable } from "@/components/molecules/ranking-table"

const PERMISSION_AREAS = ["Dashboard", "Attendance", "Fees", "Results", "Notices", "Operations", "Reports", "Users", "Roles"]

const ROLE_PERMISSIONS: Record<string, Record<string, number>> = {
    admin: { Dashboard: 4, Attendance: 4, Fees: 4, Results: 4, Notices: 4, Operations: 4, Reports: 4, Users: 4, Roles: 4 },
    principal: { Dashboard: 1, Attendance: 1, Fees: 2, Results: 1, Notices: 4, Operations: 3, Reports: 2, Users: 1, Roles: 1 },
    teacher: { Dashboard: 1, Attendance: 3, Fees: 0, Results: 3, Notices: 3, Operations: 0, Reports: 2, Users: 0, Roles: 0 },
    student: { Dashboard: 1, Attendance: 1, Fees: 1, Results: 1, Notices: 1, Operations: 0, Reports: 0, Users: 0, Roles: 0 },
    parent: { Dashboard: 1, Attendance: 1, Fees: 1, Results: 1, Notices: 1, Operations: 0, Reports: 0, Users: 0, Roles: 0 },
}

export function RoleMatrixTable() {
    const data: Record<string, unknown>[] = PERMISSION_AREAS.map((area) => ({
        area,
        admin: ROLE_PERMISSIONS.admin[area],
        principal: ROLE_PERMISSIONS.principal[area],
        teacher: ROLE_PERMISSIONS.teacher[area],
        student: ROLE_PERMISSIONS.student[area],
        parent: ROLE_PERMISSIONS.parent[area],
    }))

    return (
        <RankingTable
            title="Permission Matrix Summary"
            description="Granted actions per area per role (max 4)"
            columns={[
                { key: "area", header: "Module" },
                { key: "admin", header: "Admin" },
                { key: "principal", header: "Principal" },
                { key: "teacher", header: "Teacher" },
                { key: "student", header: "Student" },
                { key: "parent", header: "Parent" },
            ]}
            data={data}
            showRank={false}
        />
    )
}
