"use client";
import { FileList } from '@/components/molecules/file-list';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

export default function FileListPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic File List</h2>
                <FileList
                    files={[
                        { name: 'Syllabus_2025.pdf', size: '1.2 MB', type: 'pdf', date: 'Jan 10, 2025' },
                        { name: 'Grade10_Timetable.xlsx', size: '245 KB', type: 'xlsx', date: 'Jan 8, 2025' },
                        { name: 'School_Logo.png', size: '56 KB', type: 'png', date: 'Dec 20, 2024' },
                        { name: 'Staff_List.docx', size: '312 KB', type: 'docx', date: 'Jan 5, 2025' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Actions</h2>
                <FileList
                    files={[
                        {
                            name: 'Annual_Report.pdf',
                            size: '3.5 MB',
                            type: 'pdf',
                            date: 'Jan 1, 2025',
                            action: <Button variant="ghost" size="sm"><DownloadIcon className="size-3.5" /></Button>,
                        },
                        {
                            name: 'Budget_2025.xlsx',
                            size: '890 KB',
                            type: 'xlsx',
                            date: 'Jan 2, 2025',
                            action: <Button variant="ghost" size="sm"><DownloadIcon className="size-3.5" /></Button>,
                        },
                    ]}
                />
            </div>
        </div>
    );
}
