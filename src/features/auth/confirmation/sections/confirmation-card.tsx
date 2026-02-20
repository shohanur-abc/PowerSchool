import Link from 'next/link';
import { MailCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ============= MAIN COMPONENT =============
export default function ConfirmationCard({ title, description, email, loginHref }: IConfirmationCard) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                <Brand />
                <InfoCard title={title} description={description} email={email} loginHref={loginHref} />
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

const InfoCard = ({ title, description, email, loginHref }: IConfirmationCard) => (
    <Card>
        <CardHeader className="text-center space-y-4">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
                <MailCheck className="size-8 text-primary" />
            </div>
            <div className="space-y-1">
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <EmailNotice email={email} />
            <Button className="w-full" variant="outline" asChild>
                <Link href={loginHref}>Back to Sign In</Link>
            </Button>
            <p className="text-center text-xs text-muted-foreground">
                Didn&apos;t receive the email? Check your spam folder or{' '}
                <button className="text-primary hover:underline">resend</button>.
            </p>
        </CardContent>
    </Card>
);

const EmailNotice = ({ email }: { email: string }) => (
    <div className="rounded-lg bg-muted p-4 text-center space-y-1">
        <p className="text-sm text-muted-foreground">Confirmation sent to</p>
        <p className="font-medium text-sm">{email}</p>
    </div>
);

// ============= TYPES =============
interface IConfirmationCard {
    title: string;
    description: string;
    email: string;
    loginHref: string;
}
