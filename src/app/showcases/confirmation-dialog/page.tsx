'use client';
import { ConfirmationDialog } from '@/components/molecules/confirmation-dialog';
import { Button } from '@/components/ui/button';

export default function ConfirmationDialogPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Confirm Dialog</h2>
                <ConfirmationDialog
                    trigger={<Button variant="outline">Archive Record</Button>}
                    title="Archive Student Record?"
                    description="The record will be moved to archives. You can restore it later."
                    confirmLabel="Archive"
                    cancelLabel="Cancel"
                    onConfirm={() => { }}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Destructive Variant</h2>
                <ConfirmationDialog
                    trigger={<Button variant="destructive">Delete Student</Button>}
                    title="Delete Student Record?"
                    description="This action is permanent. All data for this student will be removed and cannot be recovered."
                    confirmLabel="Delete Permanently"
                    cancelLabel="Keep Record"
                    variant="destructive"
                    onConfirm={() => { }}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Simple Confirm</h2>
                <ConfirmationDialog
                    trigger={<Button size="sm">Publish Notice</Button>}
                    title="Publish this notice?"
                    description="All parents and students will receive a notification."
                    confirmLabel="Publish"
                    cancelLabel="Not yet"
                />
            </div>
        </div>
    );
}
