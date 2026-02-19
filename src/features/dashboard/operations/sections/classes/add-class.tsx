'use client';

import { useState } from 'react';
import { Loader2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function AddClass({
    triggerLabel,
    title,
    description,
    availableTeachers,
    onSubmit,
    isSubmitting,
}: IAddClass) {
    const [open, setOpen] = useState(false);

    const handleSubmit = (data: IClassPayload) => {
        onSubmit?.(data);
        // TODO: Close dialog only after successful submission
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="size-4 mr-2" />
                    {triggerLabel ?? 'Add Class'}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        {title ?? 'Add New Class'}
                    </DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                <ClassForm
                    availableTeachers={availableTeachers}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                />
            </DialogContent>
        </Dialog>
    );
}

// ============= CHILD COMPONENTS =============
const ClassForm = ({
    availableTeachers,
    onSubmit,
    isSubmitting,
}: {
    availableTeachers: ITeacherOption[];
    onSubmit?: (data: IClassPayload) => void;
    isSubmitting?: boolean;
}) => {
    const [className, setClassName] = useState('');
    const [section, setSection] = useState('');
    const [capacity, setCapacity] = useState('');
    const [teacher, setTeacher] = useState('');
    const [roomNo, setRoomNo] = useState('');

    // TODO: Add form validation with zod + react-hook-form
    const isValid =
        className.trim() && section.trim() && capacity && teacher;

    const handleSubmit = () => {
        if (!isValid) return;
        onSubmit?.({
            className: className.trim(),
            section: section.trim(),
            capacity: parseInt(capacity, 10),
            teacherId: teacher,
            roomNo: roomNo.trim() || undefined,
        });
    };

    return (
        <Card className="border-0 shadow-none">
            <CardContent className="px-0 space-y-4">
                {/* Class Name & Section */}
                <div className="@container grid grid-cols-1 @sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="class-name">Class Name</Label>
                        <Input
                            id="class-name"
                            placeholder="e.g., Class 10"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="section">Section</Label>
                        <Input
                            id="section"
                            placeholder="e.g., A"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                        />
                    </div>
                </div>

                {/* Capacity & Room */}
                <div className="@container grid grid-cols-1 @sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="capacity">Capacity</Label>
                        <Input
                            id="capacity"
                            type="number"
                            placeholder="e.g., 40"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            min={1}
                            className="tabular-nums"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="room-no">
                            Room No{' '}
                            <span className="text-muted-foreground">
                                (optional)
                            </span>
                        </Label>
                        <Input
                            id="room-no"
                            placeholder="e.g., 201"
                            value={roomNo}
                            onChange={(e) => setRoomNo(e.target.value)}
                        />
                    </div>
                </div>

                {/* Class Teacher */}
                <div className="space-y-2">
                    <Label htmlFor="class-teacher">Class Teacher</Label>
                    <Select value={teacher} onValueChange={setTeacher}>
                        <SelectTrigger id="class-teacher">
                            <SelectValue placeholder="Select a teacher" />
                        </SelectTrigger>
                        <SelectContent>
                            {availableTeachers.map((t) => (
                                <SelectItem key={t.value} value={t.value}>
                                    {t.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardFooter className="px-0 justify-end gap-2">
                <Button
                    onClick={handleSubmit}
                    disabled={!isValid || isSubmitting}
                >
                    {isSubmitting && (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    )}
                    Create Class
                </Button>
            </CardFooter>
        </Card>
    );
};

// TODO: Add bulk section creation (e.g., A, B, C, D at once)
// TODO: Add subject assignment to class during creation

// ============= TYPES =============
interface ITeacherOption {
    label: string;
    value: string;
}

interface IClassPayload {
    className: string;
    section: string;
    capacity: number;
    teacherId: string;
    roomNo?: string;
}

interface IAddClass {
    triggerLabel?: string;
    title?: string;
    description?: string;
    availableTeachers: ITeacherOption[];
    onSubmit?: (data: IClassPayload) => void;
    isSubmitting?: boolean;
}
