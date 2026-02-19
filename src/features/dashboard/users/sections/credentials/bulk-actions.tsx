'use client';

import { useState } from 'react';
import { Loader2, KeyRound, ShieldCheck, Lock } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function BulkActions({
    title,
    description,
    selectedCount,
    onForcePasswordReset,
    onEnableMfa,
    onLockSelected,
    isProcessing,
}: IBulkActions) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <BulkActionForm
                    selectedCount={selectedCount}
                    onForcePasswordReset={onForcePasswordReset}
                    onEnableMfa={onEnableMfa}
                    onLockSelected={onLockSelected}
                    isProcessing={isProcessing}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const BulkActionForm = ({
    selectedCount,
    onForcePasswordReset,
    onEnableMfa,
    onLockSelected,
    isProcessing,
}: Omit<IBulkActions, 'title' | 'description'>) => {
    const [confirmAction, setConfirmAction] = useState<string | null>(null);

    const actions: IBulkActionItem[] = [
        {
            id: 'force-password-reset',
            label: 'Force Password Reset',
            description: 'Require selected users to change their password on next login',
            icon: KeyRound,
            onExecute: onForcePasswordReset,
        },
        {
            id: 'enable-mfa',
            label: 'Enable MFA',
            description: 'Enable multi-factor authentication for selected users',
            icon: ShieldCheck,
            onExecute: onEnableMfa,
        },
        {
            id: 'lock-selected',
            label: 'Lock Selected',
            description: 'Lock accounts for selected users preventing login',
            icon: Lock,
            onExecute: onLockSelected,
            destructive: true,
        },
    ];

    return (
        <>
            <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                    {selectedCount > 0
                        ? `${selectedCount} user(s) selected`
                        : 'Select users from the table to perform bulk actions'}
                </p>
                <div className="@container grid grid-cols-1 @xl:grid-cols-3 gap-3">
                    {actions.map((action) => (
                        <ActionButton
                            key={action.id}
                            {...action}
                            disabled={selectedCount === 0 || isProcessing}
                            onClick={() => setConfirmAction(action.id)}
                        />
                    ))}
                </div>
            </div>

            <ConfirmDialog
                open={!!confirmAction}
                onOpenChange={() => setConfirmAction(null)}
                title="Confirm Action"
                description={`Are you sure you want to perform this action on ${selectedCount} user(s)? This cannot be undone.`}
                onConfirm={() => {
                    const action = actions.find(
                        (a) => a.id === confirmAction
                    );
                    action?.onExecute?.();
                    setConfirmAction(null);
                }}
                isProcessing={isProcessing}
            />
        </>
    );
};

const ActionButton = ({
    label,
    description,
    icon: Icon,
    destructive,
    disabled,
    onClick,
}: IBulkActionItem & { disabled?: boolean; onClick: () => void }) => (
    <Button
        variant={destructive ? 'destructive' : 'outline'}
        className="h-auto flex-col items-start gap-1 p-4 whitespace-normal"
        disabled={disabled}
        onClick={onClick}
    >
        <div className="flex items-center gap-2">
            <Icon className="size-4 shrink-0" />
            <span className="font-medium">{label}</span>
        </div>
        <span className="text-xs opacity-70 font-normal text-left">
            {description}
        </span>
    </Button>
);

const ConfirmDialog = ({
    open,
    onOpenChange,
    title,
    description,
    onConfirm,
    isProcessing,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: string;
    onConfirm: () => void;
    isProcessing?: boolean;
}) => (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel disabled={isProcessing}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                    onClick={onConfirm}
                    disabled={isProcessing}
                >
                    {isProcessing && (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    )}
                    Confirm
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
);

// ============= TYPES =============
interface IBulkActionItem {
    id: string;
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    onExecute?: () => void;
    destructive?: boolean;
}

interface IBulkActions {
    title: string;
    description?: string;
    selectedCount: number;
    onForcePasswordReset?: () => void;
    onEnableMfa?: () => void;
    onLockSelected?: () => void;
    isProcessing?: boolean;
}
