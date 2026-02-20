import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// ============= MAIN COMPONENT =============
export default function MfaSetupCard({ title, description, skipHref }: IMfaSetupCard) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                <Brand />
                <SetupCard title={title} description={description} skipHref={skipHref} />
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

const SetupCard = ({ title, description, skipHref }: IMfaSetupCard) => (
    <Card>
        <CardHeader className="text-center space-y-1">
            <div className="flex items-center justify-center gap-2 mb-2">
                <ShieldAlert className="size-5 text-primary" />
                <Badge variant="secondary">Recommended</Badge>
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Steps />
            <Separator />
            <QrCodePlaceholder />
            <VerificationField />
            <div className="space-y-2">
                <Button className="w-full" type="submit">Enable Two-Factor Auth</Button>
                <Button className="w-full" variant="ghost" asChild>
                    <Link href={skipHref}>Skip for now</Link>
                </Button>
            </div>
        </CardContent>
    </Card>
);

const Steps = () => (
    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
        <li>Install an authenticator app (Google Authenticator, Authy)</li>
        <li>Scan the QR code below with your authenticator app</li>
        <li>Enter the 6-digit code to confirm setup</li>
    </ol>
);

const QrCodePlaceholder = () => (
    <div className="flex flex-col items-center gap-3">
        <div className="size-40 rounded-lg border-2 border-dashed flex items-center justify-center bg-muted">
            <span className="text-xs text-muted-foreground text-center px-2">QR Code placeholder</span>
        </div>
        <p className="text-xs text-muted-foreground">Or enter the secret key manually in your app</p>
        <code className="rounded bg-muted px-3 py-1 text-sm font-mono tracking-widest select-all">
            ABCD EFGH IJKL MNOP
        </code>
    </div>
);

const VerificationField = () => (
    <div className="space-y-2">
        <Label htmlFor="mfa-code">Verification Code</Label>
        <Input id="mfa-code" placeholder="000000" maxLength={6} className="text-center tracking-widest text-lg" />
    </div>
);

// ============= TYPES =============
interface IMfaSetupCard {
    title: string;
    description: string;
    skipHref: string;
}
