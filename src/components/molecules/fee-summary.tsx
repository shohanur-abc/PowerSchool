"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const FeeSummary = ({ title = "Fee Summary", items, total, paid, due, className, classNames: cns }: FeeSummaryProps) => (
    <Card className={cn("@container", className)}>
        <CardHeader className={cns?.header}>
            <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>
        </CardHeader>
        <CardContent className={cns?.content}>
            <div className="space-y-2">
                {items.map(({ label, amount }, i) => (
                    <div key={i} className={cn("flex justify-between text-sm", cns?.item)}>
                        <span className="text-muted-foreground">{label}</span>
                        <span className="tabular-nums">{formatCurrency(amount)}</span>
                    </div>
                ))}
            </div>
            <Separator className="my-3" />
            <div className={cn("flex justify-between font-semibold", cns?.total)}>
                <span>Total</span>
                <span className="tabular-nums">{formatCurrency(total)}</span>
            </div>
            {paid !== undefined && (
                <div className={cn("flex justify-between text-sm text-green-600 dark:text-green-400 mt-1", cns?.paid)}>
                    <span>Paid</span>
                    <span className="tabular-nums">-{formatCurrency(paid)}</span>
                </div>
            )}
            {due !== undefined && (
                <>
                    <Separator className="my-2" />
                    <div className={cn("flex justify-between font-bold text-lg", cns?.due)}>
                        <span>Due</span>
                        <span className="tabular-nums">{formatCurrency(due)}</span>
                    </div>
                </>
            )}
        </CardContent>
    </Card>
);

const formatCurrency = (amount: number) => `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

interface FeeSummaryProps {
    title?: string; items: { label: string; amount: number }[];
    total: number; paid?: number; due?: number;
    className?: string; classNames?: { header?: string; title?: string; content?: string; item?: string; total?: string; paid?: string; due?: string };
}
