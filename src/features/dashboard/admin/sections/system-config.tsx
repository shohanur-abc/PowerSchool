'use client';

import { useState } from 'react';
import { Loader2, Save } from 'lucide-react';
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
import { Switch } from '@/components/ui/switch';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';

// ============= MAIN COMPONENT =============
export default function SystemConfig({
    title,
    description,
    defaultValues,
    onSubmit,
    isSubmitting,
}: ISystemConfig) {
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
    onSubmit,
    isSubmitting,
}: Omit<ISystemConfig, 'title' | 'description'>) => {
    const [siteName, setSiteName] = useState(
        defaultValues?.siteName ?? ''
    );
    const [maintenanceMode, setMaintenanceMode] = useState(
        defaultValues?.maintenanceMode ?? false
    );
    const [smtpHost, setSmtpHost] = useState(
        defaultValues?.smtpHost ?? ''
    );
    const [smtpPort, setSmtpPort] = useState(
        defaultValues?.smtpPort ?? ''
    );
    const [smtpUser, setSmtpUser] = useState(
        defaultValues?.smtpUser ?? ''
    );
    const [sessionTimeout, setSessionTimeout] = useState(
        defaultValues?.sessionTimeout ?? ''
    );
    const [passwordMinLength, setPasswordMinLength] = useState(
        defaultValues?.passwordMinLength ?? ''
    );
    const [apiKey, setApiKey] = useState(defaultValues?.apiKey ?? '');

    // TODO: Add form validation with zod + react-hook-form
    const handleSave = () => {
        onSubmit?.({
            siteName: siteName.trim(),
            maintenanceMode,
            smtpHost: smtpHost.trim(),
            smtpPort: smtpPort.trim(),
            smtpUser: smtpUser.trim(),
            sessionTimeout: sessionTimeout.trim(),
            passwordMinLength: passwordMinLength.trim(),
            apiKey: apiKey.trim(),
        });
    };

    return (
        <div className="space-y-4">
            <Tabs defaultValue="general" className="w-full">
                <TabsList className="w-full @container grid grid-cols-2 @xl:grid-cols-4">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="integrations">
                        Integrations
                    </TabsTrigger>
                </TabsList>

                {/* General */}
                <TabsContent value="general" className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="site-name">Site Name</Label>
                        <Input
                            id="site-name"
                            placeholder="e.g., EduManager"
                            value={siteName}
                            onChange={(e) => setSiteName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                            <Label htmlFor="maintenance-mode">
                                Maintenance Mode
                            </Label>
                            <p className="text-xs text-muted-foreground">
                                Temporarily disable access for non-admin users
                            </p>
                        </div>
                        <Switch
                            id="maintenance-mode"
                            checked={maintenanceMode}
                            onCheckedChange={setMaintenanceMode}
                        />
                    </div>
                </TabsContent>

                {/* Email / SMTP */}
                <TabsContent value="email" className="space-y-4 pt-4">
                    <div className="@container grid grid-cols-1 @sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="smtp-host">SMTP Host</Label>
                            <Input
                                id="smtp-host"
                                placeholder="smtp.example.com"
                                value={smtpHost}
                                onChange={(e) => setSmtpHost(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="smtp-port">SMTP Port</Label>
                            <Input
                                id="smtp-port"
                                placeholder="587"
                                value={smtpPort}
                                onChange={(e) => setSmtpPort(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="smtp-user">SMTP Username</Label>
                        <Input
                            id="smtp-user"
                            placeholder="noreply@example.com"
                            value={smtpUser}
                            onChange={(e) => setSmtpUser(e.target.value)}
                        />
                    </div>
                </TabsContent>

                {/* Security */}
                <TabsContent value="security" className="space-y-4 pt-4">
                    <div className="@container grid grid-cols-1 @sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="session-timeout">
                                Session Timeout (minutes)
                            </Label>
                            <Input
                                id="session-timeout"
                                type="number"
                                placeholder="30"
                                value={sessionTimeout}
                                onChange={(e) =>
                                    setSessionTimeout(e.target.value)
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password-min-length">
                                Min Password Length
                            </Label>
                            <Input
                                id="password-min-length"
                                type="number"
                                placeholder="8"
                                value={passwordMinLength}
                                onChange={(e) =>
                                    setPasswordMinLength(e.target.value)
                                }
                            />
                        </div>
                    </div>
                </TabsContent>

                {/* Integrations */}
                <TabsContent value="integrations" className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="api-key">API Key</Label>
                        <Input
                            id="api-key"
                            type="password"
                            placeholder="Enter API key"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            Used for external service integrations
                        </p>
                    </div>
                </TabsContent>
            </Tabs>

            <div className="flex justify-end pt-2">
                <Button onClick={handleSave} disabled={isSubmitting}>
                    {isSubmitting ? (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    ) : (
                        <Save className="size-4 mr-2" />
                    )}
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

// ============= TYPES =============
interface IConfigValues {
    siteName: string;
    maintenanceMode: boolean;
    smtpHost: string;
    smtpPort: string;
    smtpUser: string;
    sessionTimeout: string;
    passwordMinLength: string;
    apiKey: string;
}

interface ISystemConfig {
    title: string;
    description?: string;
    defaultValues?: Partial<IConfigValues>;
    onSubmit?: (values: IConfigValues) => void;
    isSubmitting?: boolean;
}
