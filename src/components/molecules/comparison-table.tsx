import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const ComparisonTable = ({ headers, rows, highlightColumn, className, classNames: cns }: ComparisonTableProps) => (
    <div className={cn("@container overflow-x-auto", className)}>
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th className={cn("text-left p-3 text-sm font-medium text-muted-foreground", cns?.headerCell)} />
                    {headers.map((header, i) => (
                        <th key={i} className={cn(columnVariant({ highlighted: i === highlightColumn }), "p-3 text-center", cns?.headerCell)}>
                            <span className={cn("text-sm font-semibold", cns?.headerLabel)}>{header}</span>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map(({ feature, values }, i) => (
                    <tr key={i} className={cn("border-t", cns?.row)}>
                        <td className={cn("p-3 text-sm font-medium", cns?.featureCell)}>{feature}</td>
                        {values.map((value, j) => (
                            <td key={j} className={cn(columnVariant({ highlighted: j === highlightColumn }), "p-3 text-center text-sm", cns?.valueCell)}>
                                {typeof value === 'boolean' ? (
                                    <span className={value ? "text-green-500" : "text-muted-foreground/30"}>{value ? '✓' : '✗'}</span>
                                ) : value}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


// ============= VARIANTS =============
const columnVariant = cva("", {
    variants: {
        highlighted: {
            true: "bg-primary/5",
            false: "",
        },
    },
    defaultVariants: { highlighted: false },
});


// ============= TYPES =============
interface ComparisonTableProps {
    headers: string[];
    rows: { feature: string; values: (string | boolean | React.ReactNode)[] }[];
    highlightColumn?: number;
    className?: string;
    classNames?: {
        headerCell?: string;
        headerLabel?: string;
        row?: string;
        featureCell?: string;
        valueCell?: string;
    };
}
