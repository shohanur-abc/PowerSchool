"use client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';

export const ConfirmationDialog = ({ trigger, title, description, confirmLabel = "Confirm", cancelLabel = "Cancel", onConfirm, variant = 'default', className, classNames: cns }: ConfirmationDialogProps) => (
    <AlertDialog>
        <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
        <AlertDialogContent className={cn(className)}>
            <AlertDialogHeader className={cns?.header}>
                <AlertDialogTitle className={cns?.title}>{title}</AlertDialogTitle>
                {description && <AlertDialogDescription className={cns?.description}>{description}</AlertDialogDescription>}
            </AlertDialogHeader>
            <AlertDialogFooter className={cns?.footer}>
                <AlertDialogCancel className={cns?.cancel}>{cancelLabel}</AlertDialogCancel>
                <AlertDialogAction
                    onClick={onConfirm}
                    className={cn(variant === 'destructive' && "bg-destructive text-white hover:bg-destructive/90", cns?.confirm)}
                >
                    {confirmLabel}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
);

interface ConfirmationDialogProps {
    trigger: React.ReactNode;
    title: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    variant?: 'default' | 'destructive';
    className?: string;
    classNames?: { header?: string; title?: string; description?: string; footer?: string; cancel?: string; confirm?: string };
}
