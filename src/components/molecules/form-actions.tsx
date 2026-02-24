import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const FormActions = ({ submitLabel = 'Save', cancelLabel = 'Cancel', onCancel, submitting, align = 'right', variant = 'default', className, classNames: cns }: FormActionsProps) => (
    <div className={cn("flex items-center gap-3 pt-4", align === 'right' && "justify-end", align === 'center' && "justify-center", align === 'between' && "justify-between", variant === 'sticky' && "sticky bottom-0 bg-background py-4 border-t -mx-4 px-4 z-10", className)}>
        <Button type="button" variant="outline" onClick={onCancel} className={cns?.cancel}>{cancelLabel}</Button>
        <Button type="submit" disabled={submitting} className={cns?.submit}>
            {submitting ? 'Saving...' : submitLabel}
        </Button>
    </div>
);

interface FormActionsProps {
    submitLabel?: string; cancelLabel?: string; onCancel?: () => void; submitting?: boolean;
    align?: 'left' | 'center' | 'right' | 'between'; variant?: 'default' | 'sticky';
    className?: string; classNames?: { cancel?: string; submit?: string };
}
