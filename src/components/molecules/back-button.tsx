"use client";
import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const BackButton = ({ label = 'Back', href, className, classNames: cns }: BackButtonProps) => {
    const router = useRouter();
    const handleClick = () => { href ? router.push(href) : router.back(); };

    return (
        <Button variant="ghost" size="sm" onClick={handleClick} className={cn("gap-1", className)}>
            <ArrowLeftIcon className={cn("size-4", cns?.icon)} />
            <span className={cns?.label}>{label}</span>
        </Button>
    );
};

interface BackButtonProps {
    label?: string; href?: string;
    className?: string; classNames?: { icon?: string; label?: string };
}
