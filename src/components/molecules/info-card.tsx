"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const InfoCard = ({ title, description, icon: Icon, children, footer, variant = 'default', className, classNames: cns }: InfoCardProps) => (
    <Card className={cn(cardVariant({ variant }), "@container", className)}>
        <CardHeader className={cns?.header}>
            <div className="flex items-center gap-3">
                {Icon && (
                    <div className={cn("flex items-center justify-center size-10 rounded-lg bg-primary/10", cns?.iconWrapper)}>
                        <Icon className={cn("size-5 text-primary", cns?.icon)} />
                    </div>
                )}
                <div>
                    <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>
                    {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
                </div>
            </div>
        </CardHeader>
        {children && <CardContent className={cns?.content}>{children}</CardContent>}
        {footer && <CardFooter className={cn("border-t pt-4", cns?.footer)}>{footer}</CardFooter>}
    </Card>
);


// ============= VARIANTS =============
const cardVariant = cva("", {
    variants: {
        variant: {
            default: "",
            outline: "border-2",
            ghost: "border-none shadow-none bg-transparent",
            elevated: "shadow-md",
        },
    },
});


// ============= TYPES =============
interface InfoCardProps {
    title: string;
    description?: string;
    icon?: React.ElementType;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    variant?: 'default' | 'outline' | 'ghost' | 'elevated';
    className?: string;
    classNames?: {
        header?: string;
        title?: string;
        description?: string;
        iconWrapper?: string;
        icon?: string;
        content?: string;
        footer?: string;
    };
}
