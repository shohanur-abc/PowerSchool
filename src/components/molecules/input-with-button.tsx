import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const InputWithButton = ({ placeholder, buttonLabel, onSubmit, icon: Icon, type = 'text', disabled, className, classNames: cns }: InputWithButtonProps) => (
    <div className={cn("flex gap-2 @container", className)}>
        <div className="flex-1 relative">
            {Icon && <Icon className={cn("absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground", cns?.icon)} />}
            <Input type={type} placeholder={placeholder} className={cn(Icon && "pl-9", cns?.input)} />
        </div>
        <Button onClick={onSubmit} disabled={disabled} className={cns?.button}>{buttonLabel}</Button>
    </div>
);

interface InputWithButtonProps {
    placeholder?: string; buttonLabel: string; onSubmit?: () => void;
    icon?: React.ElementType; type?: string; disabled?: boolean;
    className?: string; classNames?: { icon?: string; input?: string; button?: string };
}
