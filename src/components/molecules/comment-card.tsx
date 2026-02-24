import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const CommentCard = ({ author, avatar, time, content, actions, replies, className, classNames: cns }: CommentCardProps) => (
    <div className={cn("@container", className)}>
        <div className={cn("flex gap-3", cns?.main)}>
            <Avatar className={cn("size-8 shrink-0", cns?.avatar)}>
                {avatar && <AvatarImage src={avatar} alt={author} />}
                <AvatarFallback className="text-xs">{author.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className={cn("text-sm font-semibold", cns?.author)}>{author}</span>
                    {time && <span className={cn("text-xs text-muted-foreground", cns?.time)}>{time}</span>}
                </div>
                <div className={cn("text-sm mt-1", cns?.content)}>{content}</div>
                {actions && <div className={cn("flex items-center gap-2 mt-2", cns?.actions)}>{actions}</div>}
            </div>
        </div>
        {replies && replies.length > 0 && (
            <div className={cn("ml-11 mt-3 space-y-3 border-l-2 pl-4", cns?.replies)}>
                {replies.map((reply, i) => <CommentCard key={i} {...reply} />)}
            </div>
        )}
    </div>
);

interface CommentCardProps {
    author: string; avatar?: string; time?: string; content: React.ReactNode; actions?: React.ReactNode;
    replies?: CommentCardProps[];
    className?: string; classNames?: { main?: string; avatar?: string; author?: string; time?: string; content?: string; actions?: string; replies?: string };
}
