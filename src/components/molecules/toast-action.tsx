"use client";
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export const ToastAction = ({ label, message, description, variant = 'default', action, icon: Icon, className }: ToastActionProps) => {
    const showToast = () => {
        const opts = { description, action: action ? { label: action.label, onClick: action.onClick } : undefined };
        switch (variant) {
            case 'success': toast.success(message, opts); break;
            case 'error': toast.error(message, opts); break;
            case 'warning': toast.warning(message, opts); break;
            case 'info': toast.info(message, opts); break;
            default: toast(message, opts);
        }
    };

    return (
        <Button onClick={showToast} variant="outline" size="sm" className={cn(className)}>
            {Icon && <Icon className="size-4 mr-1.5" />}
            {label}
        </Button>
    );
};

interface ToastActionProps {
    label: string; message: string; description?: string;
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
    action?: { label: string; onClick: () => void }; icon?: React.ElementType; className?: string;
}
