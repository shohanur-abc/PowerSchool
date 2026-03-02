"use client";
import { MiniCalendar } from '@/components/molecules/mini-calendar';

const now = new Date();
const month = now.getMonth() + 1;
const year = now.getFullYear();

export default function MiniCalendarPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Current Month (No Events)</h2>
                <div className="max-w-xs border rounded-xl p-4">
                    <MiniCalendar month={month} year={year} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Events</h2>
                <div className="max-w-xs border rounded-xl p-4">
                    <MiniCalendar
                        month={month}
                        year={year}
                        events={[
                            { day: 5, label: 'Math Exam' },
                            { day: 10, label: 'Parent Meeting' },
                            { day: 14, label: 'Science Fair' },
                            { day: 20, label: 'Fee Due' },
                            { day: 25, label: 'Sports Day' },
                        ]}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Previous Month</h2>
                <div className="max-w-xs border rounded-xl p-4">
                    <MiniCalendar
                        month={month === 1 ? 12 : month - 1}
                        year={month === 1 ? year - 1 : year}
                        events={[
                            { day: 3 },
                            { day: 17 },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
