import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';

// ============= MAIN COMPONENT =============
export default function LoginForm({ title, description, forgotPasswordHref, signupHref }: ILoginForm) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                <Brand />
                <FormCard
                    title={title}
                    description={description}
                    forgotPasswordHref={forgotPasswordHref}
                    signupHref={signupHref}
                />
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

const FormCard = ({ title, description, forgotPasswordHref, signupHref }: ILoginForm) => (
    <Card>
        <CardHeader className="text-center space-y-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="admin@school.edu" />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href={forgotPasswordHref} className="text-sm text-primary hover:underline">
                        Forgot password?
                    </Link>
                </div>
                <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground cursor-pointer">
                    Keep me signed in
                </Label>
            </div>
            <Button className="w-full" type="submit">Sign In</Button>
            <Separator />
            <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href={signupHref} className="text-primary hover:underline font-medium">
                    Sign up
                </Link>
            </p>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface ILoginForm {
    title: string;
    description: string;
    forgotPasswordHref: string;
    signupHref: string;
}
