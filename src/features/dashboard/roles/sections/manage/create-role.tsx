'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

// ============= MAIN COMPONENT =============
export default function CreateRole({
    trigger,
    title,
    description,
    baseRoles,
    colors,
    defaultValues,
    onSubmit,
    isSubmitting,
    open,
    onOpenChange,
}: ICreateRole) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                <RoleForm
                    baseRoles={baseRoles}
                    colors={colors}
                    defaultValues={defaultValues}
                    onSubmit={onSubmit}
                    isSubmitting={isSubmitting}
                />
            </DialogContent>
        </Dialog>
    );
}

// ============= CHILD COMPONENTS =============
const RoleForm = ({
    baseRoles,
    colors,
    defaultValues,
    onSubmit,
    isSubmitting,
}: Pick<
    ICreateRole,
    'baseRoles' | 'colors' | 'defaultValues' | 'onSubmit' | 'isSubmitting'
>) => {
    const [name, setName] = useState(defaultValues?.name ?? '');
    const [roleDescription, setRoleDescription] = useState(
        defaultValues?.description ?? ''
    );
    const [baseRole, setBaseRole] = useState(defaultValues?.baseRole ?? '');
    const [color, setColor] = useState(
        defaultValues?.color ?? colors[0]?.value ?? ''
    );
    const [isActive, setIsActive] = useState(
        defaultValues?.isActive ?? true
    );

    // TODO: Add form validation with zod + react-hook-form
    const handleSubmit = () => {
        onSubmit?.({
            name: name.trim(),
            description: roleDescription.trim(),
            baseRole: baseRole || undefined,
            color,
            isActive,
        });
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="role-name">Role Name</Label>
                <Input
                    id="role-name"
                    placeholder="e.g., Department Head"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="role-description">Description</Label>
                <Textarea
                    id="role-description"
                    placeholder="Describe what this role can do..."
                    value={roleDescription}
                    onChange={(e) => setRoleDescription(e.target.value)}
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="base-role">Clone From (Optional)</Label>
                <Select value={baseRole} onValueChange={setBaseRole}>
                    <SelectTrigger id="base-role">
                        <SelectValue placeholder="Select a base role" />
                    </SelectTrigger>
                    <SelectContent>
                        {baseRoles.map((r) => (
                            <SelectItem key={r.value} value={r.value}>
                                {r.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label>Color</Label>
                <ColorPicker
                    colors={colors}
                    selected={color}
                    onSelect={setColor}
                />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                    <Label htmlFor="role-status">Active</Label>
                    <p className="text-xs text-muted-foreground">
                        Enable this role for assignment
                    </p>
                </div>
                <Switch
                    id="role-status"
                    checked={isActive}
                    onCheckedChange={setIsActive}
                />
            </div>

            <DialogFooter>
                <Button
                    onClick={handleSubmit}
                    disabled={!name.trim() || isSubmitting}
                    className="w-full"
                >
                    {isSubmitting && (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    )}
                    {defaultValues ? 'Update Role' : 'Create Role'}
                </Button>
            </DialogFooter>
        </div>
    );
};

const ColorPicker = ({
    colors,
    selected,
    onSelect,
}: {
    colors: IColorOption[];
    selected: string;
    onSelect: (value: string) => void;
}) => (
    <div className="flex flex-wrap gap-2">
        {colors.map((c) => (
            <button
                key={c.value}
                type="button"
                onClick={() => onSelect(c.value)}
                className="size-8 rounded-full border-2 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                    backgroundColor: c.hex,
                    borderColor:
                        selected === c.value ? 'currentColor' : 'transparent',
                }}
                title={c.label}
            >
                <span className="sr-only">{c.label}</span>
            </button>
        ))}
    </div>
);

// ============= TYPES =============
interface IColorOption {
    label: string;
    value: string;
    hex: string;
}

interface IRoleFormValues {
    name: string;
    description: string;
    baseRole?: string;
    color: string;
    isActive: boolean;
}

interface ICreateRole {
    trigger?: React.ReactNode;
    title: string;
    description?: string;
    baseRoles: { label: string; value: string }[];
    colors: IColorOption[];
    defaultValues?: Partial<IRoleFormValues>;
    onSubmit?: (values: IRoleFormValues) => void;
    isSubmitting?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
