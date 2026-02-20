import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ============= MAIN COMPONENT =============
export default function SessionTimeoutCard({ title, description, loginHref }: ISessionTimeoutCard) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                <Brand />
                <InfoCard title={title} description={description} loginHref={loginHref} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Brand = () => (
    <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold text-primary">EduManager</h1>
        <p className="text-sm text-muted-foreground">School Management Platform</p>
    </div>
);

const InfoCard = ({ title, description, loginHref }: ISessionTimeoutCard) => (
    <Card>
        <CardHeader className="text-center space-y-4">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/20">
                <Clock className="size-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="space-y-1">
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-4 text-center">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                    Your session has expired due to inactivity. Please sign in again to continue.
                </p>
            </div>
            <Button className="w-full" asChild>
                <Link href={loginHref}>Sign In Again</Link>
            </Button>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface ISessionTimeoutCard {
    title: string;
    description: string;
    loginHref: string;
}
