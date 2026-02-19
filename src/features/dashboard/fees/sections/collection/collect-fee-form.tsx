'use client';

import { useState } from 'react';
import { Loader2, Receipt, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

// ============= MAIN COMPONENT =============
export default function CollectFeeForm({
    title,
    description,
    feeTypes,
    paymentMethods,
    onSubmit,
    onStudentSearch,
    isSubmitting,
}: ICollectFeeForm) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <FormContent
                feeTypes={feeTypes}
                paymentMethods={paymentMethods}
                onSubmit={onSubmit}
                onStudentSearch={onStudentSearch}
                isSubmitting={isSubmitting}
            />
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const FormContent = ({
    feeTypes,
    paymentMethods,
    onSubmit,
    onStudentSearch,
    isSubmitting,
}: Omit<ICollectFeeForm, 'title' | 'description'>) => {
    const [studentQuery, setStudentQuery] = useState('');
    const [feeType, setFeeType] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [receiptNo, setReceiptNo] = useState('');
    const [transactionRef, setTransactionRef] = useState('');
    const [remarks, setRemarks] = useState('');

    // TODO: Add comprehensive form validation with zod schema
    const isValid =
        studentQuery.trim() && feeType && amount && paymentMethod;

    const handleSubmit = () => {
        if (!isValid) return;
        onSubmit?.({
            studentQuery: studentQuery.trim(),
            feeType,
            amount: parseFloat(amount),
            paymentMethod,
            receiptNo: receiptNo.trim() || undefined,
            transactionRef: transactionRef.trim() || undefined,
            remarks: remarks.trim() || undefined,
        });
    };

    const handleStudentSearch = () => {
        if (studentQuery.trim() && onStudentSearch) {
            onStudentSearch(studentQuery.trim());
        }
    };

    return (
        <>
            <CardContent>
                <div className="@container grid grid-cols-1 @xl:grid-cols-2 gap-4">
                    {/* Student Search */}
                    <div className="space-y-2">
                        <Label htmlFor="student-search">
                            Student Name / ID
                        </Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input
                                id="student-search"
                                placeholder="Search student by name or ID..."
                                value={studentQuery}
                                onChange={(e) =>
                                    setStudentQuery(e.target.value)
                                }
                                onKeyDown={(e) =>
                                    e.key === 'Enter' && handleStudentSearch()
                                }
                                className="pl-9"
                            />
                        </div>
                    </div>

                    {/* Fee Type */}
                    <div className="space-y-2">
                        <Label htmlFor="fee-type">Fee Type</Label>
                        <Select value={feeType} onValueChange={setFeeType}>
                            <SelectTrigger id="fee-type">
                                <SelectValue placeholder="Select fee type" />
                            </SelectTrigger>
                            <SelectContent>
                                {feeTypes.map((type) => (
                                    <SelectItem
                                        key={type.value}
                                        value={type.value}
                                    >
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Amount */}
                    <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                            id="amount"
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            min={0}
                            step="0.01"
                            className="tabular-nums"
                        />
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-2">
                        <Label htmlFor="payment-method">Payment Method</Label>
                        <Select
                            value={paymentMethod}
                            onValueChange={setPaymentMethod}
                        >
                            <SelectTrigger id="payment-method">
                                <SelectValue placeholder="Select method" />
                            </SelectTrigger>
                            <SelectContent>
                                {paymentMethods.map((method) => (
                                    <SelectItem
                                        key={method.value}
                                        value={method.value}
                                    >
                                        {method.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <Separator className="@xl:col-span-2" />

                    {/* Receipt No */}
                    <div className="space-y-2">
                        <Label htmlFor="receipt-no">
                            Receipt No{' '}
                            <span className="text-muted-foreground">
                                (optional)
                            </span>
                        </Label>
                        <Input
                            id="receipt-no"
                            placeholder="Auto-generated if left empty"
                            value={receiptNo}
                            onChange={(e) => setReceiptNo(e.target.value)}
                        />
                    </div>

                    {/* Transaction Reference */}
                    <div className="space-y-2">
                        <Label htmlFor="txn-ref">
                            Transaction Ref{' '}
                            <span className="text-muted-foreground">
                                (optional)
                            </span>
                        </Label>
                        <Input
                            id="txn-ref"
                            placeholder="Bank/online transaction reference"
                            value={transactionRef}
                            onChange={(e) => setTransactionRef(e.target.value)}
                        />
                    </div>

                    {/* Remarks */}
                    <div className="@xl:col-span-2 space-y-2">
                        <Label htmlFor="remarks">
                            Remarks{' '}
                            <span className="text-muted-foreground">
                                (optional)
                            </span>
                        </Label>
                        <Textarea
                            id="remarks"
                            placeholder="Additional notes about this payment..."
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                            rows={3}
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-end gap-3">
                <Button
                    variant="outline"
                    onClick={() => {
                        setStudentQuery('');
                        setFeeType('');
                        setAmount('');
                        setPaymentMethod('');
                        setReceiptNo('');
                        setTransactionRef('');
                        setRemarks('');
                    }}
                >
                    Reset
                </Button>
                <Button
                    onClick={handleSubmit}
                    disabled={!isValid || isSubmitting}
                >
                    {isSubmitting ? (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    ) : (
                        <Receipt className="size-4 mr-2" />
                    )}
                    {isSubmitting ? 'Processing...' : 'Collect Fee'}
                </Button>
            </CardFooter>
        </>
    );
};

// ============= TYPES =============
interface ISelectOption {
    label: string;
    value: string;
}

interface IFeePayload {
    studentQuery: string;
    feeType: string;
    amount: number;
    paymentMethod: string;
    receiptNo?: string;
    transactionRef?: string;
    remarks?: string;
}

interface ICollectFeeForm {
    title: string;
    description?: string;
    feeTypes: ISelectOption[];
    paymentMethods: ISelectOption[];
    onSubmit?: (data: IFeePayload) => void;
    onStudentSearch?: (query: string) => void;
    isSubmitting?: boolean;
}
