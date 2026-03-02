"use client";
import { CharacterCount } from '@/components/molecules/character-count';

export default function CharacterCountPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Normal (Below Threshold)</h2>
                <div className="flex items-center gap-4">
                    <CharacterCount current={50} max={280} />
                    <span className="text-sm text-muted-foreground">50/280 characters</span>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Warning State (Near Limit)</h2>
                <div className="flex items-center gap-4">
                    <CharacterCount current={260} max={280} />
                    <span className="text-sm text-muted-foreground">260/280 — above 90% threshold</span>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Error State (At Limit)</h2>
                <div className="flex items-center gap-4">
                    <CharacterCount current={280} max={280} />
                    <span className="text-sm text-muted-foreground">280/280 — at limit</span>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Over Limit</h2>
                <div className="flex items-center gap-4">
                    <CharacterCount current={295} max={280} />
                    <span className="text-sm text-muted-foreground">295/280 — over limit</span>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Threshold (80%)</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <CharacterCount current={75} max={100} threshold={0.8} />
                        <span className="text-sm text-muted-foreground">75/100 — warning at 80%</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <CharacterCount current={90} max={100} threshold={0.8} />
                        <span className="text-sm text-muted-foreground">90/100 — over threshold</span>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Small Limit (SMS)</h2>
                <div className="flex items-center gap-4">
                    <CharacterCount current={128} max={160} />
                    <span className="text-sm text-muted-foreground">SMS character limit</span>
                </div>
            </div>
        </div>
    );
}
