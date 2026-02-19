'use client';

import { useState } from 'react';
import { Loader2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// ============= MAIN COMPONENT =============
export default function AddFeeType({
    triggerLabel,
    title,
    description,
    availableClasses,
    onSubmit,
    isSubmitting,
    defaultValues,
}: IAddFeeType) {
    const [open, setOpen] = useState(false);

    const handleSubmit = (data: IFeeTypePayload) => {
        onSubmit?.(data);
        // TODO: Close dialog only after successful submission
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="size-4 mr-2" />
                    {triggerLabel ?? 'Add Fee Type'}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>{title ?? 'Add New Fee Type'}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                <FeeTypeForm
                    availableClasses={availableClasses}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    defaultValues={defaultValues}
                />
            </DialogContent>
        </Dialog>
    );
}

// ============= CHILD COMPONENTS =============
const FeeTypeForm = ({
    availableClasses,
    onSubmit,
    isSubmitting,
    defaultValues,
}: {
    availableClasses: IClassOption[];
    onSubmit: (data: IFeeTypePayload) => void;
    isSubmitting?: boolean;
    defaultValues?: Partial<IFeeTypePayload>;
}) => {
    const [name, setName] = useState(defaultValues?.name ?? '');
    const [amount, setAmount] = useState(
        defaultValues?.amount?.toString() ?? ''
    );
    const [frequency, setFrequency] = useState(
        defaultValues?.frequency ?? ''
    );
    const [selectedClasses, setSelectedClasses] = useState<string[]>(
        defaultValues?.applicableClasses ?? []
    );
    const [feeDescription, setFeeDescription] = useState(
        defaultValues?.description ?? ''
    );

    // TODO: Add form validation with error messages (zod + react-hook-form)
    const isValid =
        name.trim() &&
        amount &&
        parseFloat(amount) > 0 &&
        frequency &&
        selectedClasses.length > 0;

    const handleClassToggle = (classId: string, checked: boolean) => {
        setSelectedClasses((prev) =>
            checked ? [...prev, classId] : prev.filter((c) => c !== classId)
        );
    };

    const handleSelectAll = (checked: boolean) => {
        setSelectedClasses(
            checked ? availableClasses.map((c) => c.value) : []
        );
    };

    const handleSubmit = () => {
        if (!isValid) return;
        onSubmit({
            name: name.trim(),
            amount: parseFloat(amount),
            frequency: frequency as IFeeTypePayload['frequency'],
            applicableClasses: selectedClasses,
            description: feeDescription.trim() || undefined,
        });
    };

    return (
        <Card className="border-0 shadow-none">
            <CardContent className="px-0 space-y-4">
                {/* Fee Name */}
                <div className="space-y-2">
                    <Label htmlFor="fee-name">Fee Name</Label>
                    <Input
                        id="fee-name"
                        placeholder="e.g., Tuition Fee, Transport Fee"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Amount & Frequency */}
                <div className="@container grid grid-cols-1 @sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="fee-amount">Amount</Label>
                        <Input
                            id="fee-amount"
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            min={0}
                            step="0.01"
                            className="tabular-nums"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="fee-frequency">Frequency</Label>
                        <Select
                            value={frequency}
                            onValueChange={setFrequency}
                        >
                            <SelectTrigger id="fee-frequency">
                                <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">
                                    Quarterly
                                </SelectItem>
                                <SelectItem value="annual">Annual</SelectItem>
                                <SelectItem value="one-time">
                                    One-time
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Applicable Classes */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label>Applicable Classes</Label>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="select-all"
                                checked={
                                    selectedClasses.length ===
                                    availableClasses.length
                                }
                                onCheckedChange={(checked) =>
                                    handleSelectAll(checked === true)
                                }
                            />
                            <Label
                                htmlFor="select-all"
                                className="text-xs text-muted-foreground cursor-pointer"
                            >
                                Select All
                            </Label>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 max-h-40 overflow-auto rounded-md border p-3">
                        {availableClasses.map((cls) => (
                            <div
                                key={cls.value}
                                className="flex items-center gap-2"
                            >
                                <Checkbox
                                    id={`class-${cls.value}`}
                                    checked={selectedClasses.includes(
                                        cls.value
                                    )}
                                    onCheckedChange={(checked) =>
                                        handleClassToggle(
                                            cls.value,
                                            checked === true
                                        )
                                    }
                                />
                                <Label
                                    htmlFor={`class-${cls.value}`}
                                    className="text-sm cursor-pointer"
                                >
                                    {cls.label}
                                </Label>
                            </div>
                        ))}
                    </div>
                    {selectedClasses.length > 0 && (
                        <p className="text-xs text-muted-foreground">
                            {selectedClasses.length} of{' '}
                            {availableClasses.length} classes selected
                        </p>
                    )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <Label htmlFor="fee-description">
                        Description{' '}
                        <span className="text-muted-foreground">
                            (optional)
                        </span>
                    </Label>
                    <Textarea
                        id="fee-description"
                        placeholder="Brief description of this fee type..."
                        value={feeDescription}
                        onChange={(e) => setFeeDescription(e.target.value)}
                        rows={3}
                    />
                </div>
            </CardContent>
            <CardFooter className="px-0 justify-end gap-3">
                <Button
                    onClick={handleSubmit}
                    disabled={!isValid || isSubmitting}
                    className="w-full"
                >
                    {isSubmitting ? (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    ) : (
                        <Plus className="size-4 mr-2" />
                    )}
                    {isSubmitting
                        ? 'Saving...'
                        : defaultValues
                            ? 'Update Fee Type'
                            : 'Add Fee Type'}
                </Button>
            </CardFooter>
        </Card>
    );
};

// ============= TYPES =============
interface IClassOption {
    label: string;
    value: string;
}

interface IFeeTypePayload {
    name: string;
    amount: number;
    frequency: 'monthly' | 'quarterly' | 'annual' | 'one-time';
    applicableClasses: string[];
    description?: string;
}

interface IAddFeeType {
    triggerLabel?: string;
    title?: string;
    description?: string;
    availableClasses: IClassOption[];
    onSubmit?: (data: IFeeTypePayload) => void;
    isSubmitting?: boolean;
    defaultValues?: Partial<IFeeTypePayload>;
}
