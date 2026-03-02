"use client";
import { CommentCard } from '@/components/molecules/comment-card';
import { Button } from '@/components/ui/button';
import { HeartIcon, ReplyIcon } from 'lucide-react';

export default function CommentCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-xl">
            <div>
                <h2 className="text-lg font-semibold mb-4">Simple Comment</h2>
                <CommentCard
                    author="Alice Johnson"
                    time="2 hours ago"
                    content="Great explanation! This really helped me understand the topic better."
                    avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=alice"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Actions</h2>
                <CommentCard
                    author="Bob Smith"
                    time="Yesterday"
                    content="I have a question about the assignment deadline. Can it be extended by a day?"
                    avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=bob"
                    actions={
                        <>
                            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                                <HeartIcon className="size-3 mr-1" />Like
                            </Button>
                            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                                <ReplyIcon className="size-3 mr-1" />Reply
                            </Button>
                        </>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Replies</h2>
                <CommentCard
                    author="Mrs. Carol White"
                    time="3 days ago"
                    content="Please review chapters 5-8 before the exam next Friday."
                    avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=carol"
                    actions={
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                            <ReplyIcon className="size-3 mr-1" />Reply
                        </Button>
                    }
                    replies={[
                        {
                            author: 'David Lee',
                            time: '2 days ago',
                            content: 'Thanks for the reminder, Mrs. White!',
                            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
                        },
                        {
                            author: 'Emma Wilson',
                            time: '1 day ago',
                            content: 'Will there be a practice test beforehand?',
                        },
                    ]}
                />
            </div>
        </div>
    );
}
