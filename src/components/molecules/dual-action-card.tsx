import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const DualActionCard = ({ icon: Icon, title, description, primaryAction, secondaryAction, className, classNames: cns }: DualActionCardProps) => (
    <Card className={cn("@container", className)}>
        <CardContent className={cn("flex items-center gap-4 pt-6", cns?.content)}>
            {Icon && <div className={cn("p-3 rounded-lg bg-primary/10 shrink-0", cns?.iconWrapper)}><Icon className={cn("size-6 text-primary", cns?.icon)} /></div>}
            <div className="flex-1 min-w-0">
                <h3 className={cn("font-semibold text-sm", cns?.title)}>{title}</h3>
                {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</p>}
            </div>
            <div className={cn("flex gap-2 shrink-0", cns?.actions)}>
                {secondaryAction && <Button variant="outline" size="sm" onClick={secondaryAction.onClick} className={cns?.secondary}>{secondaryAction.label}</Button>}
                {primaryAction && <Button size="sm" onClick={primaryAction.onClick} className={cns?.primary}>{primaryAction.label}</Button>}
            </div>
        </CardContent>
    </Card>
);

interface DualActionCardProps {
    icon?: React.ElementType; title: string; description?: string;
    primaryAction?: { label: string; onClick: () => void }; secondaryAction?: { label: string; onClick: () => void };
    className?: string; classNames?: { content?: string; iconWrapper?: string; icon?: string; title?: string; description?: string; actions?: string; primary?: string; secondary?: string };
}
