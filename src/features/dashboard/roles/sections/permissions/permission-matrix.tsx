'use client';

import { Loader2, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function PermissionMatrix({
    title,
    description,
    roles,
    modules,
    permissions,
    matrix,
    selectedRole,
    onRoleChange,
    onPermissionToggle,
    onSave,
    isSaving,
}: IPermissionMatrix) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-4">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    <div className="flex items-center gap-3">
                        <RoleSelector
                            roles={roles}
                            selected={selectedRole}
                            onChange={onRoleChange}
                        />
                        <SaveButton onSave={onSave} isSaving={isSaving} />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <MatrixTable
                    modules={modules}
                    permissions={permissions}
                    matrix={matrix}
                    onToggle={onPermissionToggle}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const RoleSelector = ({
    roles,
    selected,
    onChange,
}: {
    roles: { label: string; value: string }[];
    selected: string;
    onChange?: (value: string) => void;
}) => (
    <Select value={selected} onValueChange={(v) => onChange?.(v)}>
        <SelectTrigger className="w-48">
            <SelectValue placeholder="Select role" />
        </SelectTrigger>
        <SelectContent>
            {roles.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                    {role.label}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
);

const SaveButton = ({
    onSave,
    isSaving,
}: {
    onSave?: () => void;
    isSaving?: boolean;
}) => (
    <Button onClick={() => onSave?.()} disabled={isSaving} size="sm">
        {isSaving ? (
            <Loader2 className="size-4 mr-2 animate-spin" />
        ) : (
            <Save className="size-4 mr-2" />
        )}
        Save
    </Button>
);

const MatrixTable = ({
    modules,
    permissions,
    matrix,
    onToggle,
}: {
    modules: IModule[];
    permissions: string[];
    matrix: Record<string, Record<string, boolean>>;
    onToggle?: (moduleId: string, permission: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead className="min-w-40">Module</TableHead>
                    {permissions.map((perm) => (
                        <TableHead key={perm} className="text-center capitalize">
                            {perm}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {modules.map((mod) => (
                    <MatrixRow
                        key={mod.id}
                        module={mod}
                        permissions={permissions}
                        values={matrix[mod.id] ?? {}}
                        onToggle={onToggle}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const MatrixRow = ({
    module: mod,
    permissions,
    values,
    onToggle,
}: {
    module: IModule;
    permissions: string[];
    values: Record<string, boolean>;
    onToggle?: (moduleId: string, permission: string) => void;
}) => (
    <TableRow>
        <TableCell className="font-medium">{mod.name}</TableCell>
        {permissions.map((perm) => (
            <TableCell key={perm} className="text-center">
                <Checkbox
                    checked={values[perm] ?? false}
                    onCheckedChange={() => onToggle?.(mod.id, perm)}
                    aria-label={`${perm} permission for ${mod.name}`}
                />
            </TableCell>
        ))}
    </TableRow>
);

// ============= TYPES =============
interface IModule {
    id: string;
    name: string;
}

interface IPermissionMatrix {
    title: string;
    description?: string;
    roles: { label: string; value: string }[];
    modules: IModule[];
    permissions: string[];
    matrix: Record<string, Record<string, boolean>>;
    selectedRole: string;
    onRoleChange?: (role: string) => void;
    onPermissionToggle?: (moduleId: string, permission: string) => void;
    onSave?: () => void;
    isSaving?: boolean;
}
