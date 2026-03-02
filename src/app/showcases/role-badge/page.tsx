"use client";
import { RoleBadge } from '@/components/molecules/role-badge';

export default function RoleBadgePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Roles</h2>
                <div className="flex flex-wrap gap-3">
                    <RoleBadge role="admin" />
                    <RoleBadge role="principal" />
                    <RoleBadge role="teacher" />
                    <RoleBadge role="student" />
                    <RoleBadge role="parent" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Without Icon</h2>
                <div className="flex flex-wrap gap-3">
                    <RoleBadge role="admin" showIcon={false} />
                    <RoleBadge role="teacher" showIcon={false} />
                    <RoleBadge role="student" showIcon={false} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Small Size</h2>
                <div className="flex flex-wrap gap-2">
                    <RoleBadge role="admin" size="sm" />
                    <RoleBadge role="teacher" size="sm" />
                    <RoleBadge role="student" size="sm" />
                    <RoleBadge role="parent" size="sm" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In User List</h2>
                <div className="space-y-3 max-w-sm">
                    {[
                        { name: 'John Admin', role: 'admin' as const },
                        { name: 'Dr. Sarah Chen', role: 'principal' as const },
                        { name: 'Mr. Tom Baker', role: 'teacher' as const },
                        { name: 'Alice Johnson', role: 'student' as const },
                        { name: 'Robert Johnson', role: 'parent' as const },
                    ].map(({ name, role }) => (
                        <div key={name} className="flex items-center justify-between border rounded-lg px-3 py-2 text-sm">
                            <span>{name}</span>
                            <RoleBadge role={role} size="sm" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
