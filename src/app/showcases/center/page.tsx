"use client";
import { Center } from '@/components/molecules/center';

export default function CenterPage() {
    return (
        <div className="space-y-12 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Center</h2>
                <Center className="border rounded-lg" minHeight={200}>
                    <div className="text-center">
                        <p className="text-2xl font-bold">Perfectly Centered</p>
                        <p className="text-muted-foreground text-sm mt-1">Both axes</p>
                    </div>
                </Center>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Min Height (300px)</h2>
                <Center minHeight={300} className="bg-muted/30 rounded-lg border-2 border-dashed">
                    <p className="text-muted-foreground text-sm">300px min height</p>
                </Center>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Full Screen-like</h2>
                <Center minHeight="60vh" className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                    <div className="text-center space-y-2">
                        <div className="size-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <p className="font-semibold">Center Component</p>
                        <p className="text-xs text-muted-foreground">{'minHeight="60vh"'}</p>
                    </div>
                </Center>
            </div>
        </div>
    );
}
