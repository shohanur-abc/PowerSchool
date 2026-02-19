'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';

// ============= MAIN COMPONENT =============
export default function AcademicConfig({
    title,
    description,
    defaultValues,
    gradingSystems,
    onSubmit,
    isSubmitting,
}: IAcademicConfig) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <ConfigTabs
                    defaultValues={defaultValues}
                    gradingSystems={gradingSystems}
                    onSubmit={onSubmit}
                    isSubmitting={isSubmitting}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ConfigTabs = ({
    defaultValues,
    gradingSystems,
    onSubmit,
    isSubmitting,
}: Omit<IAcademicConfig, 'title' | 'description'>) => {
    const [session, setSession] = useState(
        defaultValues?.currentSession ?? ''
    );
    const [gradingSystem, setGradingSystem] = useState(
        defaultValues?.gradingSystem ?? ''
    );
    const [minAttendance, setMinAttendance] = useState(
        defaultValues?.minAttendancePercent?.toString() ?? ''
    );
    const [lateFee, setLateFee] = useState(
        defaultValues?.lateFeeAmount?.toString() ?? ''
    );
    const [gracePeriod, setGracePeriod] = useState(
        defaultValues?.gracePeriodDays?.toString() ?? ''
    );

    // TODO: Add form validation with zod + react-hook-form
    const handleSave = () => {
        onSubmit?.({
            currentSession: session.trim(),
            gradingSystem: gradingSystem || undefined,
            minAttendancePercent: minAttendance
                ? parseFloat(minAttendance)
                : undefined,
            lateFeeAmount: lateFee ? parseFloat(lateFee) : undefined,
            gracePeriodDays: gracePeriod
                ? parseInt(gracePeriod, 10)
                : undefined,
        });
    };

    return (
        <div className="space-y-4">
            <Tabs defaultValue="session" className="w-full">
                <TabsList className="w-full @container grid grid-cols-1 @sm:grid-cols-3">
                    <TabsTrigger value="session">Session</TabsTrigger>
                    <TabsTrigger value="attendance">Attendance</TabsTrigger>
                    <TabsTrigger value="fees">Fees</TabsTrigger>
                </TabsList>

                {/* Session & Grading */}
                <TabsContent value="session" className="space-y-4 pt-4">
                    <div className="@container grid grid-cols-1 @sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="current-session">
                                Current Session
                            </Label>
                            <Input
                                id="current-session"
                                placeholder="e.g., 2025-2026"
                                value={session}
                                onChange={(e) => setSession(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="grading-system">
                                Grading System
                            </Label>
                            <Select
                                value={gradingSystem}
                                onValueChange={setGradingSystem}
                            >
                                <SelectTrigger id="grading-system">
                                    <SelectValue placeholder="Select grading system" />
                                </SelectTrigger>
                                <SelectContent>
                                    {gradingSystems.map((gs) => (
                                        <SelectItem
                                            key={gs.value}
                                            value={gs.value}
                                        >
                                            {gs.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </TabsContent>

                {/* Attendance Rules */}
                <TabsContent value="attendance" className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="min-attendance">
                            Minimum Attendance (%)
                        </Label>
                        <Input
                            id="min-attendance"
                            type="number"
                            placeholder="e.g., 75"
                            value={minAttendance}
                            onChange={(e) =>
                                setMinAttendance(e.target.value)
                            }
                            min={0}
                            max={100}
                            className="tabular-nums max-w-48"
                        />
                        <p className="text-xs text-muted-foreground">
                            Students below this threshold will be flagged.
                        </p>
                    </div>
                </TabsContent>

                {/* Fee Settings */}
                <TabsContent value="fees" className="space-y-4 pt-4">
                    <div className="@container grid grid-cols-1 @sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="late-fee">Late Fee Amount</Label>
                            <Input
                                id="late-fee"
                                type="number"
                                placeholder="0.00"
                                value={lateFee}
                                onChange={(e) => setLateFee(e.target.value)}
                                min={0}
                                step="0.01"
                                className="tabular-nums"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="grace-period">
                                Grace Period (days)
                            </Label>
                            <Input
                                id="grace-period"
                                type="number"
                                placeholder="e.g., 7"
                                value={gracePeriod}
                                onChange={(e) =>
                                    setGracePeriod(e.target.value)
                                }
                                min={0}
                                className="tabular-nums"
                            />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            <div className="flex justify-end border-t pt-4">
                <Button
                    onClick={handleSave}
                    disabled={isSubmitting}
                >
                    {isSubmitting && (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    )}
                    Save Configuration
                </Button>
            </div>
        </div>
    );
};

// TODO: Add exam term configuration tab
// TODO: Add subject/stream configuration
// TODO: Add promotion rules configuration
// TODO: Add academic calendar year start/end date settings

// ============= TYPES =============
interface IGradingOption {
    label: string;
    value: string;
}

interface IAcademicPayload {
    currentSession: string;
    gradingSystem?: string;
    minAttendancePercent?: number;
    lateFeeAmount?: number;
    gracePeriodDays?: number;
}

interface IAcademicConfig {
    title: string;
    description?: string;
    defaultValues?: Partial<IAcademicPayload>;
    gradingSystems: IGradingOption[];
    onSubmit?: (data: IAcademicPayload) => void;
    isSubmitting?: boolean;
}
