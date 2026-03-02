'use client';

import { NumberInput } from '@/components/molecules/number-input';
import { useState } from 'react';

export default function NumberInputPage() {
    const [quantity, setQuantity] = useState(1);
    const [age, setAge] = useState(18);

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Number Input</h2>
                <NumberInput />
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Label</h2>
                <NumberInput label="Quantity" />
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Range (1–10)</h2>
                <NumberInput label="Score" min={1} max={10} />
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Step of 5</h2>
                <NumberInput label="Minutes" min={0} max={60} step={5} />
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Controlled — Quantity</h2>
                <div className="space-y-2">
                    <NumberInput
                        label="Items"
                        value={quantity}
                        onChange={setQuantity}
                        min={1}
                        max={99}
                    />
                    <p className="text-sm text-muted-foreground">Selected: {quantity}</p>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Age Selector (18–120)</h2>
                <div className="space-y-2">
                    <NumberInput
                        label="Age"
                        value={age}
                        onChange={setAge}
                        min={18}
                        max={120}
                    />
                    <p className="text-sm text-muted-foreground">Age: {age} years</p>
                </div>
            </div>
        </div>
    );
}
