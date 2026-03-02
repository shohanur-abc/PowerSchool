"use client";
import { AuthCard } from '@/components/molecules/auth-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AuthCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Login Form</h2>
                <div className="max-w-sm mx-auto">
                    <AuthCard
                        title="Welcome Back"
                        description="Sign in to your SchoolPro account"
                    >
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="you@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="••••••••" />
                            </div>
                            <Button className="w-full">Sign In</Button>
                        </div>
                    </AuthCard>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sign Up Form</h2>
                <div className="max-w-sm mx-auto">
                    <AuthCard
                        title="Create Account"
                        description="Join thousands of schools using SchoolPro"
                    >
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="Alice Johnson" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email2">Email</Label>
                                <Input id="email2" type="email" placeholder="you@example.com" />
                            </div>
                            <Button className="w-full">Create Account</Button>
                        </div>
                    </AuthCard>
                </div>
            </div>
        </div>
    );
}
