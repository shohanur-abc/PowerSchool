"use client";
import { GradientText } from '@/components/molecules/gradient-text';

export default function GradientTextPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (Primary Gradient)</h2>
                <p className="text-2xl font-bold">
                    Welcome to <GradientText>School Manager</GradientText>
                </p>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Heading Tags</h2>
                <GradientText as="h1" from="from-blue-600" to="to-cyan-400" className="text-4xl font-bold mb-2">
                    Education Platform
                </GradientText>
                <GradientText as="h2" from="from-purple-600" to="to-pink-400" className="text-3xl font-bold mb-2">
                    Powerful Analytics
                </GradientText>
                <GradientText as="h3" from="from-green-600" to="to-emerald-400" className="text-2xl font-semibold">
                    Real-time Reports
                </GradientText>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Inline in Text</h2>
                <p className="text-xl">
                    Our platform uses <GradientText from="from-orange-500" to="to-yellow-400">AI-powered insights</GradientText> to help you make better decisions.
                </p>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Three-Stop Gradient (Via)</h2>
                <GradientText
                    as="p"
                    from="from-rose-500"
                    via="via-orange-400"
                    to="to-yellow-300"
                    className="text-3xl font-extrabold"
                >
                    Sunset Learning Experience
                </GradientText>
            </div>
        </div>
    );
}
