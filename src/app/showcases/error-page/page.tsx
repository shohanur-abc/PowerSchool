"use client";
import { ErrorPage } from '@/components/molecules/error-page';
import { Button } from '@/components/ui/button';

export default function ErrorPagePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">404 Not Found</h2>
                <ErrorPage
                    code="404"
                    title="Page Not Found"
                    description="The page you are looking for doesn&apos;t exist or has been moved."
                    action={[{ label: 'Go Home', href: '/' }, { label: 'Contact Support', href: '/contact' }]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">500 Server Error</h2>
                <ErrorPage
                    code="500"
                    title="Internal Server Error"
                    description="Something went wrong on our end. We&apos;re working on fixing it."
                    action={{ label: 'Try Again', href: '#' }}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">403 Unauthorized</h2>
                <ErrorPage
                    code="403"
                    title="Access Denied"
                    description="You don&apos;t have permission to view this page."
                    action={{ label: 'Go Back', href: '#' }}
                />
            </div>
        </div>
    );
}
