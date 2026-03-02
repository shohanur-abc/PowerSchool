'use client';
import { ResponsiveDialog } from '@/components/molecules/responsive-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ResponsiveDialogPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Simple Dialog</h2>
                <ResponsiveDialog
                    trigger={<Button>Open Dialog</Button>}
                    title="Add New Student"
                    description="Fill in the details to enroll a new student."
                >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Full Name</Label>
                            <Input placeholder="Alice Johnson" />
                        </div>
                        <div className="space-y-2">
                            <Label>Email</Label>
                            <Input type="email" placeholder="alice@school.edu" />
                        </div>
                        <Button className="w-full">Enroll Student</Button>
                    </div>
                </ResponsiveDialog>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Without Description</h2>
                <ResponsiveDialog
                    trigger={<Button variant="outline">Quick View</Button>}
                    title="Student Details"
                >
                    <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> Alice Johnson</p>
                        <p><strong>Class:</strong> Grade 10 A</p>
                        <p><strong>Score:</strong> 92%</p>
                    </div>
                </ResponsiveDialog>
            </div>
        </div>
    );
}
