"use client";
import { cn } from '@/lib/utils';

export const FormFieldGroup = ({ title, description, children, columns = 1, className, classNames: cns }: FormFieldGroupProps) => (
    <fieldset className={cn("@container", className)}>
        {(title || description) && (
            <div className={cn("mb-4", cns?.header)}>
                {title && <legend className={cn("text-sm font-semibold", cns?.title)}>{title}</legend>}
                {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</p>}
            </div>
        )}
        <div className={cn("grid gap-4", columns === 2 ? "grid-cols-1 @sm:grid-cols-2" : columns === 3 ? "grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3" : "", cns?.fields)}>
            {children}
        </div>
    </fieldset>
);

interface FormFieldGroupProps {
    title?: string; description?: string; children: React.ReactNode; columns?: 1 | 2 | 3;
    className?: string; classNames?: { header?: string; title?: string; description?: string; fields?: string };
}
