"use client";
import { ScrollAreaWrapper } from '@/components/molecules/scroll-area-wrapper';

export default function ScrollAreaWrapperPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical Scroll</h2>
                <ScrollAreaWrapper orientation="vertical" height="200px" className="border rounded-xl">
                    <div className="p-4 space-y-2">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="text-sm py-1 border-b last:border-0">
                                Item {i + 1} — Lorem ipsum dolor sit amet
                            </div>
                        ))}
                    </div>
                </ScrollAreaWrapper>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal Scroll</h2>
                <ScrollAreaWrapper orientation="horizontal" className="border rounded-xl">
                    <div className="flex gap-3 p-4 w-max">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <div key={i} className="w-32 h-20 bg-muted rounded-lg flex items-center justify-center text-xs shrink-0">
                                Card {i + 1}
                            </div>
                        ))}
                    </div>
                </ScrollAreaWrapper>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Tall Content with Custom Height</h2>
                <ScrollAreaWrapper orientation="vertical" height="150px" className="border rounded-xl bg-muted/30">
                    <div className="p-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </ScrollAreaWrapper>
            </div>
        </div>
    );
}
