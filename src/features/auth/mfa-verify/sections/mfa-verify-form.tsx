import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

// ============= MAIN COMPONENT =============
export default function MfaVerifyForm({ title, description, loginHref }: IMfaVerifyForm) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                <Brand />
                <FormCard title={title} description={description} loginHref={loginHref} />
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

const FormCard = ({ title, description, loginHref }: IMfaVerifyForm) => (
    <Card>
        <CardHeader className="text-center space-y-4">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="size-8 text-primary" />
            </div>
            <div className="space-y-1">
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <OtpInput />
            <Button className="w-full" type="submit">Verify Code</Button>
            <p className="text-center text-sm text-muted-foreground">
                Having trouble?{' '}
                <Link href={loginHref} className="text-primary hover:underline font-medium">
                    Use a backup code
                </Link>
            </p>
        </CardContent>
    </Card>
);

const OtpInput = () => (
    <div className="flex justify-center">
        <InputOTP maxLength={6}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
    </div>
);

// ============= TYPES =============
interface IMfaVerifyForm {
    title: string;
    description: string;
    loginHref: string;
}
