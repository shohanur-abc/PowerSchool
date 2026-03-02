"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export const WeatherCard = ({ temperature, condition, icon: Icon, location, high, low, className, classNames: cns }: WeatherCardProps) => (
    <Card className={cn("@container", className)}>
        <CardContent className={cn("flex items-center gap-4 pt-6", cns?.content)}>
            {Icon && <Icon className={cn("size-12 text-primary", cns?.icon)} />}
            <div className="flex-1">
                <div className="flex items-baseline gap-1">
                    <span className={cn("text-4xl font-bold tabular-nums", cns?.temperature)}>{temperature}°</span>
                </div>
                {condition && <p className={cn("text-sm text-muted-foreground", cns?.condition)}>{condition}</p>}
                {location && <p className={cn("text-xs text-muted-foreground mt-1", cns?.location)}>{location}</p>}
            </div>
            {(high !== undefined || low !== undefined) && (
                <div className={cn("text-right text-sm", cns?.range)}>
                    {high !== undefined && <p>H: <span className="font-medium tabular-nums">{high}°</span></p>}
                    {low !== undefined && <p>L: <span className="font-medium tabular-nums">{low}°</span></p>}
                </div>
            )}
        </CardContent>
    </Card>
);

interface WeatherCardProps {
    temperature: number; condition?: string; icon?: React.ElementType; location?: string; high?: number; low?: number;
    className?: string; classNames?: { content?: string; icon?: string; temperature?: string; condition?: string; location?: string; range?: string };
}
