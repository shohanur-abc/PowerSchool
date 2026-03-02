"use client";
import { SearchResults } from '@/components/molecules/search-results';
import { FileTextIcon, UserIcon, BookOpenIcon } from 'lucide-react';

export default function SearchResultsPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Search Results with Query</h2>
                <SearchResults
                    query="alice"
                    results={[
                        { title: 'Alice Johnson', description: 'Grade 10 A — Student', href: '#', icon: UserIcon, badge: 'Student' },
                        { title: 'Alice in Wonderland Essay', description: 'Literature assignment', href: '#', icon: FileTextIcon },
                        { title: 'Alice&apos;s Math Scores', description: 'Grade 10 progress report', href: '#', icon: BookOpenIcon, badge: 'Report' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Loading State</h2>
                <SearchResults query="math" results={[]} loading />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Empty State</h2>
                <SearchResults
                    query="xyzabc123"
                    results={[]}
                    emptyMessage="No results found for this query."
                />
            </div>
        </div>
    );
}
