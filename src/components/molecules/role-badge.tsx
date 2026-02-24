import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { ShieldIcon, UserIcon, GraduationCapIcon, UsersIcon, BookOpenIcon } from 'lucide-react';

export const RoleBadge = ({ role, showIcon = true, size = 'default', className, classNames: cns }: RoleBadgeProps) => {
    const iconMap = { admin: ShieldIcon, principal: UsersIcon, teacher: BookOpenIcon, student: GraduationCapIcon, parent: UserIcon };
    const Icon = iconMap[role] || UserIcon;

    return (
        <span className={cn(roleBadgeVariant({ role, size }), className)}>
            {showIcon && <Icon className={cn(size === 'sm' ? "size-3" : "size-3.5", cns?.icon)} />}
            <span className={cns?.label}>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
        </span>
    );
};

const roleBadgeVariant = cva("inline-flex items-center gap-1 font-medium rounded-full", {
    variants: {
        role: {
            admin: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
            principal: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
            teacher: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
            student: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            parent: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
        },
        size: { sm: "px-2 py-0.5 text-xs", default: "px-2.5 py-1 text-xs" },
    },
});

interface RoleBadgeProps {
    role: 'admin' | 'principal' | 'teacher' | 'student' | 'parent';
    showIcon?: boolean; size?: 'sm' | 'default';
    className?: string; classNames?: { icon?: string; label?: string };
}
