import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const GradeBadge = ({ grade, label, size = 'default', className, classNames: cns }: GradeBadgeProps) => {
    const gradeLevel = getGradeLevel(grade);
    return (
        <div className={cn("inline-flex items-center gap-2", className)}>
            <span className={cn(gradeBadgeVariant({ level: gradeLevel, size }), cns?.grade)}>{grade}</span>
            {label && <span className={cn("text-sm text-muted-foreground", cns?.label)}>{label}</span>}
        </div>
    );
};

const getGradeLevel = (grade: string | number): 'excellent' | 'good' | 'average' | 'poor' => {
    const val = typeof grade === 'number' ? grade : grade.charCodeAt(0) - 64;
    if (val <= 1 || (typeof grade === 'number' && grade >= 90)) return 'excellent';
    if (val <= 2 || (typeof grade === 'number' && grade >= 80)) return 'good';
    if (val <= 3 || (typeof grade === 'number' && grade >= 60)) return 'average';
    return 'poor';
};

const gradeBadgeVariant = cva("inline-flex items-center justify-center rounded-full font-bold", {
    variants: {
        level: {
            excellent: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            good: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
            average: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
            poor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        },
        size: {
            sm: "size-6 text-xs",
            default: "size-8 text-sm",
            lg: "size-10 text-base",
        },
    },
});

interface GradeBadgeProps {
    grade: string | number;
    label?: string;
    size?: 'sm' | 'default' | 'lg';
    className?: string;
    classNames?: { grade?: string; label?: string };
}
