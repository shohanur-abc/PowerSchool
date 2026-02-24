import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const StatusPage = ({ services, className, classNames: cns }: StatusPageProps) => (
    <div className={cn("@container space-y-2", className)}>
        {services.map(({ name, status, description, uptime }, i) => (
            <div key={i} className={cn("flex items-center gap-3 p-3 rounded-lg border", cns?.item)}>
                <div className={cn(statusDotVariant({ status }), cns?.dot)} />
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <span className={cn("text-sm font-medium", cns?.name)}>{name}</span>
                        <span className={cn(statusLabelVariant({ status }), cns?.status)}>{status.replace('-', ' ')}</span>
                    </div>
                    {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</p>}
                    {uptime && <p className={cn("text-xs text-muted-foreground", cns?.uptime)}>{uptime}% uptime</p>}
                </div>
            </div>
        ))}
    </div>
);

const statusDotVariant = cva("size-2.5 rounded-full shrink-0", {
    variants: { status: { operational: "bg-green-500", degraded: "bg-yellow-500", partial: "bg-orange-500", "major-outage": "bg-red-500", maintenance: "bg-blue-500" } },
});

const statusLabelVariant = cva("text-xs font-medium capitalize", {
    variants: { status: { operational: "text-green-600", degraded: "text-yellow-600", partial: "text-orange-600", "major-outage": "text-red-600", maintenance: "text-blue-600" } },
});

interface StatusPageProps {
    services: { name: string; status: 'operational' | 'degraded' | 'partial' | 'major-outage' | 'maintenance'; description?: string; uptime?: number }[];
    className?: string; classNames?: { item?: string; dot?: string; name?: string; status?: string; description?: string; uptime?: string };
}
