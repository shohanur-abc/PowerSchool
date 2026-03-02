"use client";
import { Overlay } from '@/components/molecules/overlay';

const InnerBox = ({ text }: { text: string }) => (
    <div className="rounded-xl p-8 flex items-center justify-center text-sm font-medium">
        {text}
    </div>
);

export default function OverlayPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Overlay</h2>
                <div className="relative h-40 rounded-xl overflow-hidden">
                    <Overlay>
                        <InnerBox text="Default overlay content" />
                    </Overlay>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Light Variant</h2>
                <div className="relative h-40 rounded-xl overflow-hidden">
                    <Overlay variant="light">
                        <InnerBox text="Light overlay content" />
                    </Overlay>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Dark Variant</h2>
                <div className="relative h-40 rounded-xl overflow-hidden">
                    <Overlay variant="dark">
                        <InnerBox text="Dark overlay content" />
                    </Overlay>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Transparent Variant</h2>
                <div className="relative h-40 rounded-xl overflow-hidden">
                    <Overlay variant="transparent">
                        <InnerBox text="Transparent overlay content" />
                    </Overlay>
                </div>
            </div>
        </div>
    );
}
