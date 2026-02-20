import { Search, CreditCard, Banknote, Smartphone, Receipt } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

// ============= MAIN COMPONENT =============
export default function FeeCollection({ student, feeItems, paymentMethods }: IFeeCollection) {
    return (
        <div className="space-y-6">
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <StudentSearch />
                    {student && <StudentCard student={student} />}
                    {feeItems.length > 0 && <FeeItemsCard items={feeItems} />}
                </div>
                <PaymentPanel paymentMethods={paymentMethods} feeItems={feeItems} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Fee Collection</h1>
        <p className="text-muted-foreground mt-1">Collect fee payments from students</p>
    </div>
);

const StudentSearch = () => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Find Student</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input placeholder="Search by name, roll no or class..." className="pl-9" />
            </div>
        </CardContent>
    </Card>
);

const StudentCard = ({ student }: { student: NonNullable<IFeeCollection['student']> }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Student Details</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <InfoField label="Name" value={student.name} />
                <InfoField label="Roll No" value={student.rollNo} />
                <InfoField label="Class" value={student.class} />
                <InfoField label="Outstanding" value={student.outstanding} highlight />
            </div>
        </CardContent>
    </Card>
);

const InfoField = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
    <div className="space-y-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className={`font-semibold ${highlight ? 'text-red-500' : ''}`}>{value}</p>
    </div>
);

const FeeItemsCard = ({ items }: { items: IFeeCollection['feeItems'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Fee Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {items.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked={item.selected} className="size-4 rounded" />
                        <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            {item.dueDate && <p className="text-xs text-muted-foreground">Due: {item.dueDate}</p>}
                        </div>
                        {item.overdue && <Badge variant="destructive" className="text-xs">Overdue</Badge>}
                    </div>
                    <span className="font-semibold">{item.amount}</span>
                </div>
            ))}
            <Separator />
            <div className="flex justify-between font-bold">
                <span>Total ({items.filter(i => i.selected).length} items)</span>
                <span className="text-primary">
                    {items
                        .filter(i => i.selected)
                        .map(i => parseInt(i.amount.replace(/[^\d]/g, ''), 10))
                        .reduce((acc, val) => acc + val, 0)
                        .toLocaleString('en-IN', { style: 'currency', currency: 'BDT', maximumFractionDigits: 0 })}
                </span>
            </div>
        </CardContent>
    </Card>
);

const PaymentPanel = ({ paymentMethods, feeItems }: { paymentMethods: IFeeCollection['paymentMethods']; feeItems: IFeeCollection['feeItems'] }) => (
    <Card className="h-fit">
        <CardHeader>
            <CardTitle className="text-base">Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <p className="text-sm font-medium">Payment Method</p>
                <div className="grid grid-cols-1 gap-2">
                    {paymentMethods.map((method, i) => (
                        <PaymentMethodButton key={i} method={method} />
                    ))}
                </div>
            </div>
            <Separator />
            <div className="space-y-2">
                <p className="text-sm font-medium">Amount</p>
                <Input placeholder="0.00" className="text-right font-mono text-lg" />
            </div>
            <div className="space-y-2">
                <p className="text-sm font-medium">Reference / Receipt No</p>
                <Input placeholder="Optional" />
            </div>
            <Button className="w-full gap-2" size="lg">
                <Receipt className="size-4" />
                Collect & Print Receipt
            </Button>
        </CardContent>
    </Card>
);

const PaymentMethodButton = ({ method }: { method: IFeeCollection['paymentMethods'][number] }) => {
    const icons: Record<string, React.ReactNode> = {
        cash: <Banknote className="size-4" />,
        online: <Smartphone className="size-4" />,
        cheque: <CreditCard className="size-4" />,
    };
    return (
        <Button variant="outline" className="justify-start gap-2">
            {icons[method.id] ?? null}
            {method.label}
        </Button>
    );
};

// ============= TYPES =============
interface IFeeCollection {
    student: {
        name: string;
        rollNo: string;
        class: string;
        outstanding: string;
    } | null;
    feeItems: {
        name: string;
        amount: string;
        dueDate?: string;
        selected: boolean;
        overdue?: boolean;
    }[];
    paymentMethods: {
        id: string;
        label: string;
    }[];
}
