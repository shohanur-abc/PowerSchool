"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const ConversationBubble = ({ message, time, sender, isOwn, className, classNames: cns }: ConversationBubbleProps) => (
    <div className={cn("flex", isOwn ? "justify-end" : "justify-start", className)}>
        <div className={cn(bubbleVariant({ isOwn: !!isOwn }), "max-w-[75%]", cns?.bubble)}>
            {sender && !isOwn && <p className={cn("text-xs font-semibold mb-1", cns?.sender)}>{sender}</p>}
            <p className={cn("text-sm", cns?.message)}>{message}</p>
            {time && <p className={cn("text-[10px] mt-1 opacity-70 text-right", cns?.time)}>{time}</p>}
        </div>
    </div>
);

const bubbleVariant = cva("px-3 py-2 rounded-2xl", {
    variants: { isOwn: { true: "bg-primary text-primary-foreground rounded-br-sm", false: "bg-muted rounded-bl-sm" } },
});

interface ConversationBubbleProps {
    message: string; time?: string; sender?: string; isOwn?: boolean;
    className?: string; classNames?: { bubble?: string; sender?: string; message?: string; time?: string };
}
