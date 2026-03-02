"use client";
import { ResponsiveTable } from '@/components/molecules/responsive-table';
import { Badge } from '@/components/ui/badge';

export default function ResponsiveTablePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Student Records</h2>
                <ResponsiveTable
                    headers={['Name', 'Class', 'Score', 'Grade', 'Status']}
                    rows={[
                        ['Alice Johnson', 'Grade 10 A', '92/100', 'A+', <Badge key="1" variant="outline" className="text-green-600">Pass</Badge>],
                        ['Bob Smith', 'Grade 10 B', '78/100', 'B+', <Badge key="2" variant="outline" className="text-green-600">Pass</Badge>],
                        ['Carol White', 'Grade 9 A', '45/100', 'D', <Badge key="3" variant="destructive">Fail</Badge>],
                        ['David Brown', 'Grade 11 A', '88/100', 'A', <Badge key="4" variant="outline" className="text-green-600">Pass</Badge>],
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Fee Records</h2>
                <ResponsiveTable
                    headers={['Month', 'Amount', 'Due Date', 'Paid On', 'Status']}
                    rows={[
                        ['January', '$500', 'Jan 5', 'Jan 3', <Badge key="1" variant="outline" className="text-green-600">Paid</Badge>],
                        ['February', '$500', 'Feb 5', '—', <Badge key="2" variant="destructive">Overdue</Badge>],
                        ['March', '$500', 'Mar 5', '—', <Badge key="3" variant="secondary">Pending</Badge>],
                    ]}
                />
            </div>
        </div>
    );
}
