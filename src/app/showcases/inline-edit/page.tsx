'use client';

import { InlineEdit } from '@/components/molecules/inline-edit';
import { useState } from 'react';

export default function InlineEditPage() {
    const [title, setTitle] = useState('Project Alpha');
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Inline Edit</h2>
                <div className="max-w-md">
                    <InlineEdit value="Click me to edit" onSave={(v) => console.log(v)} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Controlled Value</h2>
                <div className="max-w-md space-y-2">
                    <InlineEdit value={title} onSave={setTitle} />
                    <p className="text-sm text-muted-foreground">Current: {title}</p>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Empty with Placeholder</h2>
                <div className="max-w-md">
                    <InlineEdit
                        value=""
                        placeholder="Click to add a description..."
                        onSave={(v) => console.log('Saved:', v)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Profile Fields</h2>
                <div className="max-w-md space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground w-16">Name:</span>
                        <InlineEdit value={name} onSave={setName} />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground w-16">Email:</span>
                        <InlineEdit value={email} onSave={setEmail} />
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">In a Table Row</h2>
                <div className="max-w-md border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted/50">
                            <tr>
                                <th className="text-left p-3 font-medium">Student</th>
                                <th className="text-left p-3 font-medium">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['Alice Johnson', 'Bob Smith', 'Carol White'].map((student) => (
                                <tr key={student} className="border-t">
                                    <td className="p-3">{student}</td>
                                    <td className="p-3">
                                        <InlineEdit value="A" onSave={(v) => console.log(student, v)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
