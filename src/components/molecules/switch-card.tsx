import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export const SwitchCard = ({ id, label, description, checked, onCheckedChange, disabled, icon: Icon, className, classNames: cns }: SwitchCardProps) => (
    <Card className={cn("@container", className)}>
        <CardContent className={cn("flex items-center gap-4 pt-6", cns?.content)}>
            {Icon && <div className={cn("p-2 rounded-lg bg-muted shrink-0", cns?.iconWrapper)}><Icon className={cn("size-5 text-muted-foreground", cns?.icon)} /></div>}
            <div className="flex-1">
                <Label htmlFor={id} className={cn("text-sm font-medium cursor-pointer", cns?.label)}>{label}</Label>
                {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</p>}
            </div>
            <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} disabled={disabled} className={cns?.switch} />
        </CardContent>
    </Card>
);

interface SwitchCardProps {
    id: string; label: string; description?: string; checked?: boolean; onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean; icon?: React.ElementType;
    className?: string; classNames?: { content?: string; iconWrapper?: string; icon?: string; label?: string; description?: string; switch?: string };
}
