"use client";
import { ScoreCard } from '@/components/molecules/score-card';

export default function ScoreCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Subject Scores</h2>
                <div className="grid grid-cols-3 gap-4">
                    <ScoreCard subject="Mathematics" score={92} maxScore={100} grade="A+" />
                    <ScoreCard subject="Science" score={78} maxScore={100} grade="B+" />
                    <ScoreCard subject="English" score={85} maxScore={100} grade="A" />
                    <ScoreCard subject="History" score={60} maxScore={100} grade="C" />
                    <ScoreCard subject="Art" score={95} maxScore={100} grade="A+" />
                    <ScoreCard subject="Physical Ed." score={88} maxScore={100} grade="A" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Out of Different Maxes</h2>
                <div className="grid grid-cols-3 gap-4">
                    <ScoreCard subject="Mid-Term" score={45} maxScore={50} />
                    <ScoreCard subject="Final Exam" score={142} maxScore={200} />
                    <ScoreCard subject="Project" score={27} maxScore={30} />
                </div>
            </div>
        </div>
    );
}
