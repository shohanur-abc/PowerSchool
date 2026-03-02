"use client";
import { cn } from '@/lib/utils';

export const GradientText = ({ children, from = 'from-primary', to = 'to-primary/50', via, as: Tag = 'span', className }: GradientTextProps) => (
    <Tag className={cn("bg-gradient-to-r bg-clip-text text-transparent", from, via, to, className)}>
        {children}
    </Tag>
);

interface GradientTextProps {
    children: React.ReactNode; from?: string; to?: string; via?: string;
    as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'; className?: string;
}
