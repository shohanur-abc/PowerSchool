import { Receipt } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

// ============= MAIN COMPONENT =============
export default function RecentPayments({
    title,
    description,
    payments,
}: IRecentPayments) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <PaymentsList payments={payments} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const PaymentsList = ({ payments }: { payments: IPaymentEntry[] }) => (
    <ScrollArea className="h-96 pr-3">
        <div className="space-y-1">
            {payments.map((payment, i) => (
                <div key={payment.receiptNo}>
                    <PaymentRow {...payment} />
                    {i < payments.length - 1 && <Separator className="my-2" />}
                </div>
            ))}
        </div>
    </ScrollArea>
);

const PaymentRow = ({
    studentName,
    studentAvatar,
    amount,
    method,
    date,
    receiptNo,
    feeType,
}: IPaymentEntry) => (
    <div className="flex items-center gap-3 py-1">
        <Avatar>
            <AvatarImage src={studentAvatar} alt={studentName} />
            <AvatarFallback>{getInitials(studentName)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium truncate">{studentName}</p>
                <MethodBadge method={method} />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{feeType}</span>
                <span>•</span>
                <span>{date}</span>
            </div>
        </div>
        <AmountReceipt amount={amount} receiptNo={receiptNo} />
    </div>
);

const MethodBadge = ({ method }: { method: string }) => (
    <Badge
        variant={methodVariantMap[method] ?? 'outline'}
        className="text-[10px] px-1.5 py-0"
    >
        {method}
    </Badge>
);

const AmountReceipt = ({
    amount,
    receiptNo,
}: {
    amount: number;
    receiptNo: string;
}) => (
    <div className="text-right shrink-0 space-y-0.5">
        <p className="text-sm font-semibold tabular-nums text-emerald-600">
            {formatCurrency(amount)}
        </p>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Receipt className="size-2.5" />
            <span className="tabular-nums">{receiptNo}</span>
        </div>
    </div>
);

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

// TODO: Add click-to-view receipt detail navigation
const methodVariantMap: Record<
    string,
    'default' | 'secondary' | 'outline' | 'destructive'
> = {
    Cash: 'default',
    Online: 'secondary',
    'Bank Transfer': 'outline',
    Cheque: 'outline',
};

// ============= TYPES =============
interface IPaymentEntry {
    receiptNo: string;
    studentName: string;
    studentAvatar: string;
    amount: number;
    method: string;
    date: string;
    feeType: string;
}

interface IRecentPayments {
    title: string;
    description?: string;
    payments: IPaymentEntry[];
}
