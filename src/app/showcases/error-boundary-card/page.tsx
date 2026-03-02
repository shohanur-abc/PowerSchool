'use client';
import { ErrorBoundaryCard } from '@/components/molecules/error-boundary-card';

const BrokenComponent = () => {
    throw new Error('Simulated render error');
};

export default function ErrorBoundaryCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-md">
            <div>
                <h2 className="text-lg font-semibold mb-4">Catching a Render Error</h2>
                <ErrorBoundaryCard title="Widget Failed to Load">
                    <BrokenComponent />
                </ErrorBoundaryCard>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Safe Content (no error)</h2>
                <ErrorBoundaryCard>
                    <div className="p-4 bg-muted rounded-lg text-sm">This content renders fine.</div>
                </ErrorBoundaryCard>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Title on Error</h2>
                <ErrorBoundaryCard title="Chart unavailable — please refresh">
                    <BrokenComponent />
                </ErrorBoundaryCard>
            </div>
        </div>
    );
}
