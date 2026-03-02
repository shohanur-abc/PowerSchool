"use client";
import { ReceiptCard } from '@/components/molecules/receipt-card';

export default function ReceiptCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-sm">
            <div>
                <h2 className="text-lg font-semibold mb-4">Fee Receipt</h2>
                <ReceiptCard
                    title="Fee Receipt"
                    date="January 10, 2025"
                    receiptNo="RCP-2025-001"
                    items={[
                        { label: 'Tuition Fee', amount: 400 },
                        { label: 'Lab Fee', amount: 50 },
                        { label: 'Library Fee', amount: 20 },
                        { label: 'Sports Fee', amount: 30 },
                    ]}
                    subtotal={500}
                    tax={25}
                    total={525}
                    footer="Thank you for your payment!"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Simple Receipt (no tax)</h2>
                <ReceiptCard
                    title="Canteen Bill"
                    date="Jan 15, 2025"
                    items={[
                        { label: 'Lunch Combo', quantity: 1, amount: 8 },
                        { label: 'Orange Juice', quantity: 2, amount: 6 },
                        { label: 'Snack Bar', quantity: 1, amount: 3 },
                    ]}
                    total={17}
                />
            </div>
        </div>
    );
}
