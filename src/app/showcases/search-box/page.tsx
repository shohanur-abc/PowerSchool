'use client';

import { SearchBox } from '@/components/molecules/search-box';

export default function SearchBoxPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="max-w-md">
                    <SearchBox
                        placeholder="Search..."
                        onSearch={(q) => console.log('Search:', q)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Suggestions</h2>
                <div className="max-w-md">
                    <SearchBox
                        placeholder="Search students..."
                        suggestions={['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Williams']}
                        onSearch={(q) => console.log('Search:', q)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Keyboard Shortcut</h2>
                <div className="max-w-md">
                    <SearchBox
                        placeholder="Search everything..."
                        shortcut="⌘K"
                        onSearch={(q) => console.log('Search:', q)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Bordered Variant</h2>
                <div className="max-w-md">
                    <SearchBox
                        placeholder="Search in documents..."
                        variant="filled"
                        onSearch={(q) => console.log('Search:', q)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Full — Suggestions + Shortcut</h2>
                <div className="max-w-lg">
                    <SearchBox
                        placeholder="Search across all records..."
                        suggestions={['Teachers', 'Students', 'Parents', 'Attendance', 'Grades', 'Fees']}
                        shortcut="/"
                        variant="pill"
                        onSearch={(q) => console.log('Search:', q)}
                    />
                </div>
            </div>
        </div>
    );
}
