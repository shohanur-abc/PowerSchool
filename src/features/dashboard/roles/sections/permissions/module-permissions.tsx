import { ShieldCheck } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function ModulePermissions({
    title,
    description,
    modules,
}: IModulePermissions) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <ModuleAccordion modules={modules} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ModuleAccordion = ({ modules }: { modules: IModulePerms[] }) => (
    <Accordion type="multiple" className="w-full">
        {modules.map((mod) => (
            <AccordionItem key={mod.id} value={mod.id}>
                <AccordionTrigger className="hover:no-underline">
                    <ModuleHeader
                        name={mod.name}
                        grantedCount={mod.permissions.length}
                    />
                </AccordionTrigger>
                <AccordionContent>
                    <PermissionBadges permissions={mod.permissions} />
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);

const ModuleHeader = ({
    name,
    grantedCount,
}: {
    name: string;
    grantedCount: number;
}) => (
    <div className="flex items-center gap-3">
        <ShieldCheck className="size-4 text-muted-foreground" />
        <span className="font-medium">{name}</span>
        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
            {grantedCount} granted
        </Badge>
    </div>
);

const PermissionBadges = ({ permissions }: { permissions: string[] }) =>
    permissions.length > 0 ? (
        <div className="flex flex-wrap gap-2 pt-2">
            {permissions.map((perm) => (
                <Badge key={perm} variant="outline" className="text-xs capitalize">
                    {perm}
                </Badge>
            ))}
        </div>
    ) : (
        <p className="text-sm text-muted-foreground pt-2">
            No permissions granted for this module.
        </p>
    );

// ============= TYPES =============
interface IModulePerms {
    id: string;
    name: string;
    permissions: string[];
}

interface IModulePermissions {
    title: string;
    description?: string;
    modules: IModulePerms[];
}
