'use client';
import { ToastAction } from '@/components/molecules/toast-action';

export default function ToastActionPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Variants</h2>
                <div className="flex flex-wrap gap-3">
                    <ToastAction label="Default Toast" message="Action completed" variant="default" />
                    <ToastAction label="Success Toast" message="Student enrolled successfully" variant="success" />
                    <ToastAction label="Error Toast" message="Failed to save changes" variant="error" />
                    <ToastAction label="Warning Toast" message="Low attendance detected" variant="warning" />
                    <ToastAction label="Info Toast" message="New feature is available" variant="info" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Description</h2>
                <div className="flex flex-wrap gap-3">
                    <ToastAction
                        label="Show with Description"
                        message="Payment received"
                        description="$500 fee paid by Alice Johnson"
                        variant="success"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Action Button</h2>
                <div className="flex flex-wrap gap-3">
                    <ToastAction
                        label="Undo Action"
                        message="Student record deleted"
                        description="Alice Johnson was removed"
                        variant="warning"
                        action={{ label: 'Undo', onClick: () => { } }}
                    />
                </div>
            </div>
        </div>
    );
}
