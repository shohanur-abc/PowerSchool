import Link from 'next/link';
import { ShieldX } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ============= MAIN COMPONENT =============
export default function UnauthorizedCard({ title, description, loginHref, dashboardHref }: IUnauthorizedCard) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                <Brand />
                <InfoCard title={title} description={description} loginHref={loginHref} dashboardHref={dashboardHref} />
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

const InfoCard = ({ title, description, loginHref, dashboardHref }: IUnauthorizedCard) => (
    <Card>
        <CardHeader className="text-center space-y-4">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-destructive/10">
                <ShieldX className="size-8 text-destructive" />
            </div>
            <div className="space-y-1">
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-3">
            <div className="rounded-lg bg-destructive/5 border border-destructive/20 p-4 text-center">
                <p className="text-sm text-muted-foreground">
                    You don&apos;t have permission to access this resource. Contact your school administrator if you believe this is an error.
                </p>
            </div>
            <Button className="w-full" asChild>
                <Link href={dashboardHref}>Go to Dashboard</Link>
            </Button>
            <Button className="w-full" variant="outline" asChild>
                <Link href={loginHref}>Sign In with Different Account</Link>
            </Button>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IUnauthorizedCard {
    title: string;
    description: string;
    loginHref: string;
    dashboardHref: string;
}
