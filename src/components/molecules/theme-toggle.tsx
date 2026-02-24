"use client";
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export const ThemeToggle = ({ variant = 'ghost', size = 'icon', className, classNames: cns }: ThemeToggleProps) => {
    const { theme, setTheme } = useTheme();

    return (
        <Button variant={variant} size={size} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={className} aria-label="Toggle theme">
            <SunIcon className={cn("size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0", cns?.sun)} />
            <MoonIcon className={cn("absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100", cns?.moon)} />
        </Button>
    );
};

interface ThemeToggleProps {
    variant?: React.ComponentProps<typeof Button>['variant']; size?: React.ComponentProps<typeof Button>['size'];
    className?: string; classNames?: { sun?: string; moon?: string };
}
