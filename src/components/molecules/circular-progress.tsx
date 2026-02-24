import { cn } from '@/lib/utils';

export const CircularProgress = ({ segments, size = 100, strokeWidth = 8, showLabel, className, classNames: cns }: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;

    return (
        <div className={cn("inline-flex flex-col items-center", className)}>
            <svg width={size} height={size} className="-rotate-90">
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={cn("text-muted", cns?.track)} />
                {segments.map(({ value, color, label }, i) => {
                    const segOffset = circumference - (value / 100) * circumference;
                    const currentOffset = offset;
                    offset += (value / 100) * circumference;
                    return <circle key={i} cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={segOffset} strokeLinecap="round" style={{ transform: `rotate(${(currentOffset / circumference) * 360}deg)`, transformOrigin: 'center' }} className={cns?.segment} />;
                })}
            </svg>
            {showLabel && (
                <div className={cn("flex flex-wrap gap-3 mt-3", cns?.legend)}>
                    {segments.map(({ label, value, color }, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs">
                            <span className="size-2.5 rounded-full" style={{ backgroundColor: color }} />
                            <span className="text-muted-foreground">{label}: {value}%</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

interface CircularProgressProps {
    segments: { value: number; color: string; label?: string }[];
    size?: number; strokeWidth?: number; showLabel?: boolean;
    className?: string; classNames?: { track?: string; segment?: string; legend?: string };
}
