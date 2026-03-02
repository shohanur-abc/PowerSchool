'use client';

import { PasswordStrength } from '@/components/molecules/password-strength';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

function PasswordDemo({ label, initialPassword = '' }: { label: string; initialPassword?: string }) {
    const [password, setPassword] = useState(initialPassword);
    return (
        <div className="space-y-2">
            <Label>{label}</Label>
            <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
            />
            <PasswordStrength password={password} />
        </div>
    );
}

export default function PasswordStrengthPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Empty (No Password)</h2>
                <div className="max-w-md">
                    <PasswordStrength password="" />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Weak Password</h2>
                <div className="max-w-md">
                    <PasswordStrength password="abc" />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Fair Password</h2>
                <div className="max-w-md">
                    <PasswordStrength password="abc12345" />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Good Password</h2>
                <div className="max-w-md">
                    <PasswordStrength password="Abc12345" />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Strong Password</h2>
                <div className="max-w-md">
                    <PasswordStrength password="Abc12345!" />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Without Label</h2>
                <div className="max-w-md">
                    <PasswordStrength password="Secure@Pass123" showLabel={false} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Live Demo (Type a Password)</h2>
                <div className="max-w-md">
                    <PasswordDemo label="Create Password" />
                </div>
            </div>
        </div>
    );
}
