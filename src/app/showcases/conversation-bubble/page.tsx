"use client";
import { ConversationBubble } from '@/components/molecules/conversation-bubble';

export default function ConversationBubblePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Chat Thread</h2>
                <div className="max-w-sm border rounded-xl p-4 space-y-3 bg-muted/20">
                    <ConversationBubble message="Hello! I have a question about the homework." sender="Alice" time="10:00 AM" />
                    <ConversationBubble message="Sure, go ahead! What's your question?" isOwn time="10:01 AM" />
                    <ConversationBubble message="When is the Science project due?" sender="Alice" time="10:02 AM" />
                    <ConversationBubble message="It's due next Monday, October 14th. Make sure to submit via the portal." isOwn time="10:03 AM" />
                    <ConversationBubble message="Got it, thank you!" sender="Alice" time="10:04 AM" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Group Chat</h2>
                <div className="max-w-sm border rounded-xl p-4 space-y-3 bg-muted/20">
                    <ConversationBubble message="Don't forget we have a test tomorrow!" sender="Bob" time="9:00 AM" />
                    <ConversationBubble message="Which chapters will it cover?" sender="Carol" time="9:01 AM" />
                    <ConversationBubble message="Chapters 4 through 7." isOwn time="9:02 AM" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Simple (No Time/Sender)</h2>
                <div className="max-w-sm border rounded-xl p-4 space-y-3">
                    <ConversationBubble message="Are you available for a meeting?" />
                    <ConversationBubble message="Yes, let's connect at 3 PM." isOwn />
                </div>
            </div>
        </div>
    );
}
