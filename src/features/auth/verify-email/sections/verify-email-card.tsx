import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ============= MAIN COMPONENT =============
export default function VerifyEmailCard({ title, description, loginHref }: IVerifyEmailCard) {
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

const InfoCard = ({ title, description, loginHref }: IVerifyEmailCard) => (
    <Card>
        <CardHeader className="text-center space-y-4">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="size-8 text-primary" />
            </div>
            <div className="space-y-1">
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="rounded-lg border border-dashed p-6 text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                    A verification link has been sent to your registered email address. Please check your inbox and click the link to verify.
                </p>
            </div>
            <Button className="w-full" variant="outline" type="button">
                Resend Verification Email
            </Button>
            <Button className="w-full" variant="ghost" asChild>
                <Link href={loginHref}>Back to Sign In</Link>
            </Button>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IVerifyEmailCard {
    title: string;
    description: string;
    loginHref: string;
}
