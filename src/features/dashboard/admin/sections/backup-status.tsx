'use client';

import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function BackupStatus({
    title,
    description,
    backup,
    onTriggerBackup,
    isBackingUp,
}: IBackupStatus) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-4">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    <TriggerButton
                        onClick={onTriggerBackup}
                        isBackingUp={isBackingUp}
                    />
                </div>
            </CardHeader>
            <CardContent>
                <BackupDetails {...backup} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const TriggerButton = ({
    onClick,
    isBackingUp,
}: {
    onClick?: () => void;
    isBackingUp?: boolean;
}) => (
    <Button
        variant="outline"
        size="sm"
        onClick={onClick}
        disabled={isBackingUp}
    >
        <Play className="size-4 mr-2" />
        {isBackingUp ? 'Backing up...' : 'Manual Backup'}
    </Button>
);

const BackupDetails = ({
    lastBackupDate,
    lastBackupTime,
    backupSize,
    nextScheduled,
    backupType,
    status,
}: IBackupInfo) => (
    <div className="@container grid grid-cols-1 @sm:grid-cols-2 @xl:grid-cols-3 gap-4">
        <DetailItem label="Last Backup" value={`${lastBackupDate} ${lastBackupTime}`} />
        <DetailItem label="Backup Size" value={backupSize} />
        <DetailItem label="Next Scheduled" value={nextScheduled} />
        <DetailItem
            label="Type"
            value={
                <Badge variant="outline" className="text-xs capitalize">
                    {backupType}
                </Badge>
            }
        />
        <DetailItem
            label="Status"
            value={
                <Badge className={backupStatusVariants({ status })}>
                    {status}
                </Badge>
            }
        />
    </div>
);

const DetailItem = ({
    label,
    value,
}: {
    label: string;
    value: React.ReactNode;
}) => (
    <div className="space-y-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <div className="text-sm font-medium">{value}</div>
    </div>
);

// ============= VARIANTS =============
const backupStatusVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        status: {
            success: 'bg-emerald-600 text-white hover:bg-emerald-700',
            failed: 'bg-red-600 text-white hover:bg-red-700',
            'in-progress': 'bg-blue-500 text-white hover:bg-blue-600',
        },
    },
    defaultVariants: {
        status: 'success',
    },
});

// ============= TYPES =============
interface IBackupInfo {
    lastBackupDate: string;
    lastBackupTime: string;
    backupSize: string;
    nextScheduled: string;
    backupType: 'auto' | 'manual';
    status: 'success' | 'failed' | 'in-progress';
}

interface IBackupStatus {
    title: string;
    description?: string;
    backup: IBackupInfo;
    onTriggerBackup?: () => void;
    isBackingUp?: boolean;
}
