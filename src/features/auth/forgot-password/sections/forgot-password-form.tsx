import Link from 'next/link';
import { KeyRound } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// ============= MAIN COMPONENT =============
export default function ForgotPasswordForm({ title, description, loginHref }: IForgotPasswordForm) {
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

const FormCard = ({ title, description, loginHref }: IForgotPasswordForm) => (
    <Card>
        <CardHeader className="text-center space-y-4">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
                <KeyRound className="size-8 text-primary" />
            </div>
            <div className="space-y-1">
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="admin@school.edu" />
            </div>
            <Button className="w-full" type="submit">Send Reset Link</Button>
            <p className="text-center text-sm text-muted-foreground">
                Remember your password?{' '}
                <Link href={loginHref} className="text-primary hover:underline font-medium">
                    Back to sign in
                </Link>
            </p>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IForgotPasswordForm {
    title: string;
    description: string;
    loginHref: string;
}
