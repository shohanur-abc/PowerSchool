'use client';

import { PhoneInput } from '@/components/molecules/phone-input';
import { useState } from 'react';

export default function PhoneInputPage() {
    const [phone, setPhone] = useState('');
    const [phone2, setPhone2] = useState('');

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Phone Input (US Default)</h2>
                <div className="max-w-md">
                    <PhoneInput onChange={(v) => console.log(v)} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">UK Default Country Code</h2>
                <div className="max-w-md">
                    <PhoneInput defaultCountryCode="+44" onChange={(v) => console.log(v)} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Bangladesh Default</h2>
                <div className="max-w-md">
                    <PhoneInput defaultCountryCode="+880" onChange={(v) => console.log(v)} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Controlled (Live Value)</h2>
                <div className="max-w-md space-y-2">
                    <PhoneInput value={phone} onChange={setPhone} />
                    <p className="text-sm text-muted-foreground">Value: {phone || '(empty)'}</p>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Pre-filled Value</h2>
                <div className="max-w-md space-y-2">
                    <PhoneInput
                        value="5551234567"
                        defaultCountryCode="+1"
                        onChange={setPhone2}
                    />
                    <p className="text-sm text-muted-foreground">Value: {phone2 || '+15551234567'}</p>
                </div>
            </div>
        </div>
    );
}
