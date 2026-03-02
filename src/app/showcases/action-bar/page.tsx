"use client";
import { ActionBar } from '@/components/molecules/action-bar';
import { Button } from '@/components/ui/button';
import { SaveIcon, XIcon, TrashIcon, CheckIcon } from 'lucide-react';

export default function ActionBarPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Align Right (Default)</h2>
                <div className="border rounded-xl p-4">
                    <ActionBar align="right">
                        <Button variant="outline"><XIcon className="size-4 mr-2" />Cancel</Button>
                        <Button><SaveIcon className="size-4 mr-2" />Save Changes</Button>
                    </ActionBar>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Align Left</h2>
                <div className="border rounded-xl p-4">
                    <ActionBar align="left">
                        <Button variant="destructive"><TrashIcon className="size-4 mr-2" />Delete</Button>
                        <Button variant="outline">Duplicate</Button>
                    </ActionBar>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Align Center</h2>
                <div className="border rounded-xl p-4">
                    <ActionBar align="center">
                        <Button variant="outline">Back</Button>
                        <Button variant="outline">Skip</Button>
                        <Button><CheckIcon className="size-4 mr-2" />Confirm</Button>
                    </ActionBar>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Space Between</h2>
                <div className="border rounded-xl p-4">
                    <ActionBar align="between">
                        <Button variant="ghost">← Previous</Button>
                        <Button>Next →</Button>
                    </ActionBar>
                </div>
            </div>
        </div>
    );
}
