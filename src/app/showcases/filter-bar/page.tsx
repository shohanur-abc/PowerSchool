'use client';

import { FilterBar } from '@/components/molecules/filter-bar';
import { useState } from 'react';
import { BookIcon, UserIcon, CalendarIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';

export default function FilterBarPage() {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [activeFilters2, setActiveFilters2] = useState<string[]>(['active', 'admin']);

    const toggle = (key: string) => {
        setActiveFilters(prev =>
            prev.includes(key) ? prev.filter(f => f !== key) : [...prev, key]
        );
    };

    const toggle2 = (key: string) => {
        setActiveFilters2(prev =>
            prev.includes(key) ? prev.filter(f => f !== key) : [...prev, key]
        );
    };

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Filters</h2>
                <FilterBar
                    filters={[
                        { key: 'all', label: 'All' },
                        { key: 'active', label: 'Active' },
                        { key: 'inactive', label: 'Inactive' },
                        { key: 'pending', label: 'Pending' },
                    ]}
                    activeFilters={activeFilters}
                    onFilterToggle={toggle}
                    onClearAll={() => setActiveFilters([])}
                />
                <p className="text-sm text-muted-foreground mt-2">
                    Active: {activeFilters.join(', ') || 'None'}
                </p>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Icons</h2>
                <FilterBar
                    filters={[
                        { key: 'subjects', label: 'Subjects', icon: BookIcon },
                        { key: 'teachers', label: 'Teachers', icon: UserIcon },
                        { key: 'events', label: 'Events', icon: CalendarIcon },
                        { key: 'alerts', label: 'Alerts', icon: AlertCircleIcon },
                        { key: 'completed', label: 'Completed', icon: CheckCircleIcon },
                    ]}
                    activeFilters={[]}
                    onFilterToggle={(k) => console.log('Toggle:', k)}
                />
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Pre-selected Filters</h2>
                <FilterBar
                    filters={[
                        { key: 'active', label: 'Active' },
                        { key: 'admin', label: 'Admin' },
                        { key: 'teacher', label: 'Teacher' },
                        { key: 'student', label: 'Student' },
                        { key: 'parent', label: 'Parent' },
                    ]}
                    activeFilters={activeFilters2}
                    onFilterToggle={toggle2}
                    onClearAll={() => setActiveFilters2([])}
                />
                <p className="text-sm text-muted-foreground mt-2">
                    Active: {activeFilters2.join(', ')}
                </p>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">No Active Filters (Hide Clear All)</h2>
                <FilterBar
                    filters={[
                        { key: 'draft', label: 'Draft' },
                        { key: 'published', label: 'Published' },
                        { key: 'archived', label: 'Archived' },
                    ]}
                    activeFilters={[]}
                    onFilterToggle={(k) => console.log(k)}
                    onClearAll={() => console.log('Clear all')}
                />
            </div>
        </div>
    );
}
