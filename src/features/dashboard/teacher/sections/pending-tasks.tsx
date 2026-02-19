'use client';

import { cva } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';

// ============= MAIN COMPONENT =============
export default function PendingTasks({
    title,
    tasks,
    completedCount,
}: IPendingTasks) {
    const total = tasks.length;
    const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{title}</CardTitle>
                    <span className="text-sm text-muted-foreground tabular-nums">
                        {completedCount}/{total}
                    </span>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                {tasks.map((task) => (
                    <TaskItem key={task.id} {...task} />
                ))}
            </CardContent>
            <CardFooter>
                <div className="w-full space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Completion</span>
                        <span className="tabular-nums">{percentage}%</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                </div>
            </CardFooter>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const TaskItem = ({
    id,
    label,
    dueDate,
    priority,
    completed,
    onToggle,
}: ITaskItem) => (
    <div className="flex items-start gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
        {/* TODO: Wire up checkbox state management */}
        <Checkbox
            id={id}
            checked={completed}
            onCheckedChange={() => onToggle?.(id)}
            className="mt-0.5"
        />
        <label htmlFor={id} className="flex-1 min-w-0 cursor-pointer space-y-1">
            <p
                className={`text-sm font-medium ${completed ? 'line-through text-muted-foreground' : ''}`}
            >
                {label}
            </p>
            <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Due: {dueDate}</span>
                <Badge className={priorityBadge({ priority })}>{priority}</Badge>
            </div>
        </label>
    </div>
);

// ============= VARIANTS =============
const priorityBadge = cva('text-[10px] px-1.5 py-0 border-transparent capitalize', {
    variants: {
        priority: {
            high: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
            medium: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
            low: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
        },
    },
    defaultVariants: {
        priority: 'medium',
    },
});

// ============= TYPES =============
interface ITaskItem {
    id: string;
    label: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
    completed: boolean;
    /** TODO: Implement toggle callback */
    onToggle?: (id: string) => void;
}

interface IPendingTasks {
    title: string;
    tasks: ITaskItem[];
    completedCount: number;
}
