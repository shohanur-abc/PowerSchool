"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { ArrowRightIcon, XIcon } from 'lucide-react';

export const AnnouncementBar = ({ message, href, variant = 'default', closable, onClose, className, classNames: cns }: AnnouncementBarProps) => (
    <div className={cn(announcementVariant({ variant }), "relative @container", className)}>
        <div className={cn("flex items-center justify-center gap-2 px-4 py-2 text-sm", cns?.content)}>
            <span className={cns?.message}>{message}</span>
            {href && <Link href={href} className={cn("inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline no-underline", cns?.link)}>Learn more <ArrowRightIcon className="size-3" /></Link>}
        </div>
        {closable && <button onClick={onClose} className={cn("absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/10", cns?.close)} aria-label="Close"><XIcon className="size-3.5" /></button>}
    </div>
);

const announcementVariant = cva("", {
    variants: { variant: { default: "bg-primary text-primary-foreground", muted: "bg-muted border-b", warning: "bg-yellow-500 text-black", info: "bg-blue-600 text-white" } },
});

interface AnnouncementBarProps {
    message: string; href?: string; variant?: 'default' | 'muted' | 'warning' | 'info';
    closable?: boolean; onClose?: () => void;
    className?: string; classNames?: { content?: string; message?: string; link?: string; close?: string };
}
