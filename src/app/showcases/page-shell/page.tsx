"use client";
import { PageShell } from '@/components/molecules/page-shell';

const SampleHeader = () => (
    <header className="px-6 py-4 border-b flex items-center gap-2 font-semibold">
        📄 Page Shell Header
    </header>
);
const SampleFooter = () => (
    <footer className="px-6 py-4 border-t text-sm text-muted-foreground text-center">
        Footer content
    </footer>
);

export default function PageShellPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (with header &amp; footer)</h2>
                <div className="border rounded-xl overflow-hidden h-80">
                    <PageShell header={<SampleHeader />} footer={<SampleFooter />}>
                        <div className="p-8 text-sm text-muted-foreground">
                            Main content goes here.
                        </div>
                    </PageShell>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">No Footer</h2>
                <div className="border rounded-xl overflow-hidden h-64">
                    <PageShell header={<SampleHeader />}>
                        <div className="p-8 text-sm text-muted-foreground">
                            Content without a footer.
                        </div>
                    </PageShell>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">maxWidth=&quot;md&quot;</h2>
                <div className="border rounded-xl overflow-hidden h-64">
                    <PageShell header={<SampleHeader />} maxWidth="md">
                        <div className="p-8 text-sm text-muted-foreground">
                            Constrained to medium width.
                        </div>
                    </PageShell>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">maxWidth=&quot;xl&quot;</h2>
                <div className="border rounded-xl overflow-hidden h-64">
                    <PageShell header={<SampleHeader />} maxWidth="xl">
                        <div className="p-8 text-sm text-muted-foreground">
                            Constrained to xl width.
                        </div>
                    </PageShell>
                </div>
            </div>
        </div>
    );
}
