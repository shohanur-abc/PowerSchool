"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Container = ({ children, size = 'default', padding = 'default', className }: ContainerProps) => (
    <div className={cn(containerVariant({ size, padding }), className)}>{children}</div>
);

const containerVariant = cva("mx-auto w-full", {
    variants: {
        size: { sm: "max-w-screen-sm", md: "max-w-screen-md", default: "max-w-screen-lg", lg: "max-w-screen-xl", xl: "max-w-screen-2xl", full: "max-w-full" },
        padding: { none: "", sm: "px-2", default: "px-4 @md:px-6 @xl:px-8", lg: "px-6 @md:px-10 @xl:px-16" },
    },
});

interface ContainerProps {
    children: React.ReactNode; size?: 'sm' | 'md' | 'default' | 'lg' | 'xl' | 'full';
    padding?: 'none' | 'sm' | 'default' | 'lg'; className?: string;
}
