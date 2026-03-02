"use client";
import { DataTable } from '@/components/molecules/data-table';

export default function DataTablePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Table</h2>
                <DataTable
                    columns={[
                        { key: 'name', label: 'Name' },
                        { key: 'email', label: 'Email' },
                        { key: 'role', label: 'Role' },
                        { key: 'status', label: 'Status', align: 'center' },
                    ]}
                    rows={[
                        { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
                        { name: 'Bob Smith', email: 'bob@example.com', role: 'Teacher', status: 'Active' },
                        { name: 'Carol White', email: 'carol@example.com', role: 'Student', status: 'Inactive' },
                        { name: 'David Brown', email: 'david@example.com', role: 'Parent', status: 'Active' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Striped with Caption</h2>
                <DataTable
                    caption="Monthly fee records"
                    striped
                    columns={[
                        { key: 'month', label: 'Month' },
                        { key: 'due', label: 'Amount Due', align: 'right' },
                        { key: 'paid', label: 'Paid', align: 'right' },
                        { key: 'balance', label: 'Balance', align: 'right' },
                    ]}
                    rows={[
                        { month: 'January', due: '$500', paid: '$500', balance: '$0' },
                        { month: 'February', due: '$500', paid: '$300', balance: '$200' },
                        { month: 'March', due: '$500', paid: '$0', balance: '$500' },
                    ]}
                />
            </div>
        </div>
    );
}
