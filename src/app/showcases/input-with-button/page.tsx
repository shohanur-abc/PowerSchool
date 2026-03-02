"use client";
import { InputWithButton } from '@/components/molecules/input-with-button';
import { SearchIcon, MailIcon, PlusIcon } from 'lucide-react';

export default function InputWithButtonPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Input With Button</h2>
                <div className="max-w-md">
                    <InputWithButton buttonLabel="Submit" placeholder="Enter value..." />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Search Input</h2>
                <div className="max-w-md">
                    <InputWithButton
                        buttonLabel="Search"
                        placeholder="Search students..."
                        icon={SearchIcon}
                        onSubmit={() => console.log('Search submitted')}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Email Subscribe</h2>
                <div className="max-w-md">
                    <InputWithButton
                        buttonLabel="Subscribe"
                        placeholder="Enter your email..."
                        icon={MailIcon}
                        type="email"
                        onSubmit={() => console.log('Subscribed')}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Add Item</h2>
                <div className="max-w-md">
                    <InputWithButton
                        buttonLabel="Add"
                        placeholder="New item name..."
                        icon={PlusIcon}
                        onSubmit={() => console.log('Item added')}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Disabled State</h2>
                <div className="max-w-md">
                    <InputWithButton
                        buttonLabel="Submit"
                        placeholder="Disabled input..."
                        disabled
                    />
                </div>
            </div>
        </div>
    );
}
