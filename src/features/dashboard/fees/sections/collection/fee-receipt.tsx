'use client';

import { Printer, QrCode, School } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function FeeReceipt({
    receipt,
    onPrint,
    onDownload,
}: IFeeReceipt) {
    return (
        <Card className="print:shadow-none print:border-none">
            <CardHeader className="text-center space-y-2 pb-4">
                <ReceiptHeader
                    schoolName={receipt.schoolName}
                    schoolAddress={receipt.schoolAddress}
                    schoolLogo={receipt.schoolLogo}
                />
                <Separator />
                <div className="flex items-center justify-between">
                    <div className="text-left space-y-0.5">
                        <p className="text-xs text-muted-foreground">
                            Receipt No
                        </p>
                        <p className="text-sm font-semibold tabular-nums">
                            {receipt.receiptNo}
                        </p>
                    </div>
                    <div className="text-right space-y-0.5">
                        <p className="text-xs text-muted-foreground">Date</p>
                        <p className="text-sm font-semibold">
                            {receipt.date}
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <StudentDetails student={receipt.student} />
                <Separator />
                <PaymentBreakdown items={receipt.items} total={receipt.total} />
                <Separator />
                <PaymentInfo
                    method={receipt.paymentMethod}
                    transactionRef={receipt.transactionRef}
                    status={receipt.status}
                />
                <QRPlaceholder receiptNo={receipt.receiptNo} />
            </CardContent>

            <CardFooter className="flex-col gap-3 print:hidden">
                <Separator />
                <div className="flex items-center justify-end gap-3 w-full">
                    {onDownload && (
                        <Button variant="outline" onClick={onDownload}>
                            Download
                        </Button>
                    )}
                    {onPrint && (
                        <Button onClick={onPrint}>
                            <Printer className="size-4 mr-2" />
                            Print Receipt
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ReceiptHeader = ({
    schoolName,
    schoolAddress,
    schoolLogo,
}: {
    schoolName: string;
    schoolAddress: string;
    schoolLogo?: string;
}) => (
    <div className="flex flex-col items-center gap-2">
        {schoolLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={schoolLogo}
                alt={schoolName}
                className="h-12 w-auto object-contain"
            />
        ) : (
            <School className="size-10 text-primary" />
        )}
        <div>
            <h2 className="text-lg font-bold">{schoolName}</h2>
            <p className="text-xs text-muted-foreground">{schoolAddress}</p>
        </div>
        <Badge variant="outline" className="text-xs">
            Fee Receipt
        </Badge>
    </div>
);

const StudentDetails = ({ student }: { student: IStudentInfo }) => (
    <div className="@container grid grid-cols-1 @md:grid-cols-2 gap-3">
        <DetailRow label="Student Name" value={student.name} />
        <DetailRow label="Student ID" value={student.id} />
        <DetailRow
            label="Class"
            value={`${student.className}-${student.section}`}
        />
        <DetailRow label="Roll No" value={student.rollNo} />
        {student.parentName && (
            <DetailRow label="Parent/Guardian" value={student.parentName} />
        )}
        {student.contactNo && (
            <DetailRow label="Contact" value={student.contactNo} />
        )}
    </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="space-y-0.5">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium">{value}</p>
    </div>
);

const PaymentBreakdown = ({
    items,
    total,
}: {
    items: IFeeItem[];
    total: number;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-10">#</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {items.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="text-muted-foreground tabular-nums">
                            {index + 1}
                        </TableCell>
                        <TableCell className="font-medium">
                            {item.description}
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                            {formatCurrency(item.amount)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={2} className="font-bold">
                        Total
                    </TableCell>
                    <TableCell className="text-right font-bold tabular-nums">
                        {formatCurrency(total)}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    </div>
);

const PaymentInfo = ({
    method,
    transactionRef,
    status,
}: {
    method: string;
    transactionRef?: string;
    status: 'paid' | 'partial';
}) => (
    <div className="@container grid grid-cols-1 @md:grid-cols-3 gap-3">
        <DetailRow label="Payment Method" value={method} />
        {transactionRef && (
            <DetailRow label="Transaction Ref" value={transactionRef} />
        )}
        <div className="space-y-0.5">
            <p className="text-xs text-muted-foreground">Status</p>
            <Badge variant={status === 'paid' ? 'default' : 'secondary'}>
                {status === 'paid' ? 'Paid in Full' : 'Partial Payment'}
            </Badge>
        </div>
    </div>
);

// TODO: Replace with actual QR code generation (e.g., qrcode.react)
const QRPlaceholder = ({ receiptNo }: { receiptNo: string }) => (
    <div className="flex flex-col items-center gap-1 pt-2">
        <div className="size-20 border-2 border-dashed border-muted rounded-lg flex items-center justify-center">
            <QrCode className="size-8 text-muted-foreground" />
        </div>
        <p className="text-[10px] text-muted-foreground tabular-nums">
            {receiptNo}
        </p>
    </div>
);

// ============= HELPERS =============
const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);

// TODO: Add digital signature / authorized signatory section
// TODO: Add terms and conditions footer for print

// ============= TYPES =============
interface IStudentInfo {
    id: string;
    name: string;
    className: string;
    section: string;
    rollNo: string;
    parentName?: string;
    contactNo?: string;
}

interface IFeeItem {
    description: string;
    amount: number;
}

interface IReceiptData {
    receiptNo: string;
    date: string;
    schoolName: string;
    schoolAddress: string;
    schoolLogo?: string;
    student: IStudentInfo;
    items: IFeeItem[];
    total: number;
    paymentMethod: string;
    transactionRef?: string;
    status: 'paid' | 'partial';
}

interface IFeeReceipt {
    receipt: IReceiptData;
    onPrint?: () => void;
    onDownload?: () => void;
}
