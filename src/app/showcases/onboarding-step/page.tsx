"use client";
import { OnboardingStep } from '@/components/molecules/onboarding-step';
import { GraduationCapIcon, UsersIcon, BarChartIcon } from 'lucide-react';

export default function OnboardingStepPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Step 1 of 3</h2>
                <div className="border rounded-xl overflow-hidden">
                    <OnboardingStep
                        step={0}
                        totalSteps={3}
                        illustration={
                            <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center">
                                <GraduationCapIcon className="size-12 text-primary" />
                            </div>
                        }
                        title="Welcome to EduManage"
                        description="Your all-in-one school management platform. Let's get you set up in just a few steps."
                        primaryAction={{ label: "Get Started", onClick: () => { } }}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Step 2 of 3 (Middle)</h2>
                <div className="border rounded-xl overflow-hidden">
                    <OnboardingStep
                        step={1}
                        totalSteps={3}
                        illustration={
                            <div className="size-24 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                <UsersIcon className="size-12 text-blue-600" />
                            </div>
                        }
                        title="Invite Your Team"
                        description="Add teachers, staff, and administrators to collaborate on your school platform."
                        primaryAction={{ label: "Add Members", onClick: () => { } }}
                        secondaryAction={{ label: "Skip for Now", onClick: () => { } }}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Step 3 of 3 (Final)</h2>
                <div className="border rounded-xl overflow-hidden">
                    <OnboardingStep
                        step={2}
                        totalSteps={3}
                        illustration={
                            <div className="size-24 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                <BarChartIcon className="size-12 text-green-600" />
                            </div>
                        }
                        title="You're All Set!"
                        description="Your dashboard is ready. Start managing students, tracking attendance, and generating reports."
                        primaryAction={{ label: "Go to Dashboard", onClick: () => { } }}
                    />
                </div>
            </div>
        </div>
    );
}
