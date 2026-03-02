'use client';

import { PopoverForm } from '@/components/molecules/popover-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PencilIcon, PlusIcon, SettingsIcon } from 'lucide-react';

export default function PopoverFormPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Popover Form</h2>
                <PopoverForm
                    trigger={<Button variant="outline">Open Form</Button>}
                    title="Quick Edit"
                    onSave={() => console.log('Saved')}
                >
                    <div className="space-y-3">
                        <div>
                            <Label className="text-sm">Name</Label>
                            <Input placeholder="Enter name..." className="mt-1" />
                        </div>
                    </div>
                </PopoverForm>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Icon Trigger</h2>
                <PopoverForm
                    trigger={
                        <Button size="icon" variant="ghost">
                            <PencilIcon className="size-4" />
                        </Button>
                    }
                    title="Edit Title"
                    onSave={() => console.log('Saved')}
                >
                    <div>
                        <Label className="text-sm">Title</Label>
                        <Input defaultValue="Project Alpha" className="mt-1" />
                    </div>
                </PopoverForm>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Side Top</h2>
                <PopoverForm
                    trigger={<Button variant="outline"><SettingsIcon className="size-4 mr-2" />Settings</Button>}
                    title="Quick Settings"
                    side="top"
                    saveLabel="Apply"
                    onSave={() => console.log('Applied')}
                    onCancel={() => console.log('Cancelled')}
                >
                    <div className="space-y-3">
                        <div>
                            <Label className="text-sm">Display Name</Label>
                            <Input placeholder="Your name..." className="mt-1" />
                        </div>
                        <div>
                            <Label className="text-sm">Bio</Label>
                            <Textarea placeholder="Short bio..." rows={3} className="mt-1" />
                        </div>
                    </div>
                </PopoverForm>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Add Item Form</h2>
                <PopoverForm
                    trigger={<Button size="sm"><PlusIcon className="size-4 mr-2" />Add Note</Button>}
                    title="New Note"
                    saveLabel="Add"
                    onSave={() => console.log('Note added')}
                >
                    <div className="space-y-3">
                        <div>
                            <Label className="text-sm">Note</Label>
                            <Textarea placeholder="Write your note..." rows={4} className="mt-1" />
                        </div>
                    </div>
                </PopoverForm>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Side Right</h2>
                <PopoverForm
                    trigger={<Button variant="outline">Open Right</Button>}
                    title="Filter Options"
                    side="right"
                    saveLabel="Apply Filters"
                    onSave={() => console.log('Filters applied')}
                >
                    <div className="space-y-3">
                        <div>
                            <Label className="text-sm">Category</Label>
                            <Input placeholder="Filter by category..." className="mt-1" />
                        </div>
                    </div>
                </PopoverForm>
            </div>
        </div>
    );
}
