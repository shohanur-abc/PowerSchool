import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const ReceiptCard = ({ title, date, receiptNo, items, subtotal, tax, total, footer, className, classNames: cns }: ReceiptCardProps) => (
    <Card className={cn("@container max-w-sm mx-auto font-mono", className)}>
        <CardContent className={cn("pt-6 text-sm", cns?.content)}>
            <div className="text-center mb-4">
                {title && <h3 className={cn("font-bold text-lg", cns?.title)}>{title}</h3>}
                {date && <p className={cn("text-xs text-muted-foreground", cns?.date)}>{date}</p>}
                {receiptNo && <p className={cn("text-xs text-muted-foreground", cns?.receiptNo)}>#{receiptNo}</p>}
            </div>
            <Separator className="my-3 border-dashed" />
            <div className="space-y-1">
                {items.map(({ label, quantity, amount }, i) => (
                    <div key={i} className={cn("flex justify-between", cns?.item)}>
                        <span>{quantity ? `${quantity}x ` : ''}{label}</span>
                        <span className="tabular-nums">${amount.toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <Separator className="my-3 border-dashed" />
            {subtotal !== undefined && <div className={cn("flex justify-between", cns?.subtotal)}><span>Subtotal</span><span className="tabular-nums">${subtotal.toFixed(2)}</span></div>}
            {tax !== undefined && <div className={cn("flex justify-between text-muted-foreground", cns?.tax)}><span>Tax</span><span className="tabular-nums">${tax.toFixed(2)}</span></div>}
            <Separator className="my-2" />
            <div className={cn("flex justify-between font-bold text-base", cns?.total)}><span>Total</span><span className="tabular-nums">${total.toFixed(2)}</span></div>
            {footer && <div className={cn("text-center text-xs text-muted-foreground mt-4", cns?.footer)}>{footer}</div>}
        </CardContent>
    </Card>
);

interface ReceiptCardProps {
    title?: string; date?: string; receiptNo?: string;
    items: { label: string; quantity?: number; amount: number }[];
    subtotal?: number; tax?: number; total: number; footer?: React.ReactNode;
    className?: string; classNames?: { content?: string; title?: string; date?: string; receiptNo?: string; item?: string; subtotal?: string; tax?: string; total?: string; footer?: string };
}
