import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// ============= MAIN COMPONENT =============
export default function SignupForm({ title, description, loginHref }: ISignupForm) {
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

const FormCard = ({ title, description, loginHref }: ISignupForm) => (
    <Card>
        <CardHeader className="text-center space-y-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="school-name">School Name</Label>
                <Input id="school-name" placeholder="Springfield Academy" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="admin@school.edu" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full" type="submit">Create Account</Button>
            <Separator />
            <p className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href={loginHref} className="text-primary hover:underline font-medium">
                    Sign in
                </Link>
            </p>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface ISignupForm {
    title: string;
    description: string;
    loginHref: string;
}
