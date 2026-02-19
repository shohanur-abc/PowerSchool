'use client';

import { useState } from 'react';
import { Loader2, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
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
export default function AssignUser({
    trigger,
    title,
    description,
    roles,
    onSubmit,
    isSubmitting,
    open,
    onOpenChange,
}: IAssignUser) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                <AssignForm
                    roles={roles}
                    onSubmit={onSubmit}
                    isSubmitting={isSubmitting}
                />
            </DialogContent>
        </Dialog>
    );
}

// ============= CHILD COMPONENTS =============
const AssignForm = ({
    roles,
    onSubmit,
    isSubmitting,
}: Pick<IAssignUser, 'roles' | 'onSubmit' | 'isSubmitting'>) => {
    const [userSearch, setUserSearch] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [effectiveDate, setEffectiveDate] = useState<Date | undefined>(
        undefined
    );

    // TODO: Add user search autocomplete with debounce
    // TODO: Add form validation with zod + react-hook-form
    const handleSubmit = () => {
        onSubmit?.({
            userQuery: userSearch.trim(),
            roleId: selectedRole,
            effectiveDate,
        });
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="user-search">Search User</Label>
                <Input
                    id="user-search"
                    placeholder="Search by name or email..."
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="assign-role">Role</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger id="assign-role">
                        <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                        {roles.map((role) => (
                            <SelectItem key={role.value} value={role.value}>
                                {role.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label>Effective Date</Label>
                <div className="rounded-md border">
                    <Calendar
                        mode="single"
                        selected={effectiveDate}
                        onSelect={setEffectiveDate}
                        className="mx-auto"
                    />
                </div>
            </div>

            <DialogFooter>
                <Button
                    onClick={handleSubmit}
                    disabled={
                        !userSearch.trim() || !selectedRole || isSubmitting
                    }
                    className="w-full"
                >
                    {isSubmitting ? (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    ) : (
                        <UserPlus className="size-4 mr-2" />
                    )}
                    Assign User
                </Button>
            </DialogFooter>
        </div>
    );
};

// ============= TYPES =============
interface IAssignFormValues {
    userQuery: string;
    roleId: string;
    effectiveDate?: Date;
}

interface IAssignUser {
    trigger?: React.ReactNode;
    title: string;
    description?: string;
    roles: { label: string; value: string }[];
    onSubmit?: (values: IAssignFormValues) => void;
    isSubmitting?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
