'use client';

import { cva } from 'class-variance-authority';
import { AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function CriticalAlerts({ title, alerts }: ICriticalAlerts) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <AlertTriangle className="size-5 text-amber-500" />
                    <CardTitle>{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                {alerts.map((alert) => (
                    <AlertRow key={alert.id} {...alert} />
                ))}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const AlertRow = ({
    type,
    severity,
    description,
    actionLabel,
    onAction,
}: IAlertItem) => (
    <div className="flex items-start gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
        <AlertTriangle
            className={`size-4 shrink-0 mt-0.5 ${severity === 'critical'
                    ? 'text-red-500'
                    : severity === 'warning'
                        ? 'text-amber-500'
                        : 'text-blue-500'
                }`}
        />
        <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{type}</p>
                <Badge className={severityBadge({ severity })}>{severity}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
            {actionLabel && (
                // TODO: Implement alert action navigation
                <button
                    onClick={onAction}
                    className="text-xs text-primary font-medium hover:underline"
                >
                    {actionLabel} →
                </button>
            )}
        </div>
    </div>
);

// ============= VARIANTS =============
const severityBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize',
    {
        variants: {
            severity: {
                critical:
                    'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
                warning:
                    'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                info: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
            },
        },
        defaultVariants: {
            severity: 'info',
        },
    }
);

// ============= TYPES =============
interface IAlertItem {
    id: string;
    type: string;
    severity: 'critical' | 'warning' | 'info';
    description: string;
    actionLabel?: string;
    /** TODO: Implement alert action handler */
    onAction?: () => void;
}

interface ICriticalAlerts {
    title: string;
    alerts: IAlertItem[];
}
