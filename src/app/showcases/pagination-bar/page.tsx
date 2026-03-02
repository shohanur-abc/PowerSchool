'use client';
import { useState } from 'react';
import { PaginationBar } from '@/components/molecules/pagination-bar';

export default function PaginationBarPage() {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(5);
    const [page3, setPage3] = useState(10);

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">5 Pages (page 1)</h2>
                <PaginationBar currentPage={page1} totalPages={5} onPageChange={setPage1} />
                <p className="mt-2 text-sm text-muted-foreground">Current: {page1}</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">20 Pages (middle)</h2>
                <PaginationBar currentPage={page2} totalPages={20} onPageChange={setPage2} />
                <p className="mt-2 text-sm text-muted-foreground">Current: {page2}</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">50 Pages (near end) + siblingCount=2</h2>
                <PaginationBar currentPage={page3} totalPages={50} onPageChange={setPage3} siblingCount={2} />
                <p className="mt-2 text-sm text-muted-foreground">Current: {page3}</p>
            </div>
        </div>
    );
}
