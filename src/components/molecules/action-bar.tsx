import { cn } from '@/lib/utils';

export const ActionBar = ({ children, align = 'right', sticky, className, classNames: cns }: ActionBarProps) => (
    <div className={cn("flex items-center gap-2 py-3 px-4 border-t bg-background", sticky && "sticky bottom-0 z-10", align === 'right' && "justify-end", align === 'center' && "justify-center", align === 'between' && "justify-between", className)}>
        {children}
    </div>
);

interface ActionBarProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right' | 'between';
    sticky?: boolean;
    className?: string;
    classNames?: { wrapper?: string };
}
