'use client';

import { cva } from 'class-variance-authority';
import { PenSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function Communication({
    title,
    messages,
    onCompose,
}: ICommunication) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{title}</CardTitle>
                    {/* TODO: Implement compose message modal */}
                    <Button size="sm" variant="outline" onClick={onCompose}>
                        <PenSquare className="size-4 mr-1.5" />
                        Compose
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-95 pr-3">
                    <div className="space-y-3">
                        {messages.map((message) => (
                            <MessageRow key={message.id} {...message} />
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const MessageRow = ({
    teacherName,
    teacherAvatar,
    subject,
    date,
    isRead,
}: IMessageItem) => (
    <div
        className={`flex items-start gap-3 rounded-lg border p-3 transition-colors ${isRead ? 'hover:bg-muted/50' : 'bg-primary/5 hover:bg-primary/10'
            }`}
    >
        <Avatar size="default">
            <AvatarImage src={teacherAvatar} alt={teacherName} />
            <AvatarFallback>{getInitials(teacherName)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium truncate">{teacherName}</p>
                <Badge className={readStatusBadge({ status: isRead ? 'read' : 'unread' })}>
                    {isRead ? 'Read' : 'Unread'}
                </Badge>
            </div>
            <p className="text-sm text-muted-foreground truncate">{subject}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
        </div>
    </div>
);

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

// ============= VARIANTS =============
const readStatusBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize shrink-0',
    {
        variants: {
            status: {
                read: 'bg-muted text-muted-foreground',
                unread:
                    'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
            },
        },
        defaultVariants: {
            status: 'unread',
        },
    }
);

// ============= TYPES =============
interface IMessageItem {
    id: string;
    teacherName: string;
    teacherAvatar: string;
    subject: string;
    date: string;
    isRead: boolean;
}

interface ICommunication {
    title: string;
    messages: IMessageItem[];
    /** TODO: Implement compose handler */
    onCompose?: () => void;
}
