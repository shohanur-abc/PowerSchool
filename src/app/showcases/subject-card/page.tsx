"use client";
import { SubjectCard } from '@/components/molecules/subject-card';
import { BookOpenIcon, FlaskConicalIcon, GlobeIcon, CalculatorIcon, MusicIcon } from 'lucide-react';

export default function SubjectCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icons and Colors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                    <SubjectCard name="Mathematics" teacher="Mr. James Carter" schedule="Mon, Wed · 9:00–10:30 AM" grade="A+" icon={CalculatorIcon} color="#4f46e5" />
                    <SubjectCard name="Science" teacher="Ms. Sarah Lee" schedule="Tue, Thu · 11:00 AM–12:30 PM" grade="B+" icon={FlaskConicalIcon} color="#22c55e" />
                    <SubjectCard name="English" teacher="Mrs. Carol White" schedule="Mon–Fri · 8:00–8:45 AM" grade="A" icon={BookOpenIcon} color="#f59e0b" />
                    <SubjectCard name="Geography" teacher="Mr. David Kim" schedule="Wed, Fri · 2:00–3:00 PM" grade="B" icon={GlobeIcon} color="#0ea5e9" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Without Grade</h2>
                <div className="max-w-xs">
                    <SubjectCard name="Music & Arts" teacher="Ms. Emily Rodriguez" schedule="Friday · 3:00–4:00 PM" icon={MusicIcon} color="#ec4899" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Minimal (No Icon)</h2>
                <div className="grid grid-cols-2 gap-3 max-w-sm">
                    <SubjectCard name="Physics" teacher="Mr. Patel" />
                    <SubjectCard name="Chemistry" grade="A-" />
                </div>
            </div>
        </div>
    );
}
