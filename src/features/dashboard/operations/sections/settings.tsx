import { Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

// ============= MAIN COMPONENT =============
export default function OperationsSettings({ schoolInfo, academicYear, gradingSystem, notifications }: IOperationsSettings) {
    return (
        <div className="space-y-6">
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GeneralSettings info={schoolInfo} />
                <AcademicYearSettings year={academicYear} />
                <GradingSystem grading={gradingSystem} />
                <NotificationSettings notifications={notifications} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground mt-1">Configure school operations and system preferences</p>
        </div>
        <Button className="gap-2">
            <Save className="size-4" />
            Save Changes
        </Button>
    </div>
);

const GeneralSettings = ({ info }: { info: IOperationsSettings['schoolInfo'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">General Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <SettingField label="School Name" defaultValue={info.name} />
            <SettingField label="Address" defaultValue={info.address} />
            <SettingField label="Phone" defaultValue={info.phone} type="tel" />
            <SettingField label="Email" defaultValue={info.email} type="email" />
            <SettingField label="Website" defaultValue={info.website} type="url" />
        </CardContent>
    </Card>
);

const AcademicYearSettings = ({ year }: { year: IOperationsSettings['academicYear'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Academic Year</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <SettingField label="Current Year" defaultValue={year.current} />
            <SettingField label="Start Date" defaultValue={year.startDate} type="date" />
            <SettingField label="End Date" defaultValue={year.endDate} type="date" />
            <SettingField label="Working Days per Week" defaultValue={year.workingDays} />
            <Separator />
            <div className="flex items-center justify-between">
                <Label className="text-sm">Auto-roll over academic year</Label>
                <Switch defaultChecked={year.autoRollover} />
            </div>
        </CardContent>
    </Card>
);

const GradingSystem = ({ grading }: { grading: IOperationsSettings['gradingSystem'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Grading System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {grading.map((grade, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center font-bold text-sm">
                        {grade.grade}
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-2">
                        <Input placeholder="Min %" defaultValue={grade.min} className="h-8 text-sm" />
                        <Input placeholder="Max %" defaultValue={grade.max} className="h-8 text-sm" />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">{grade.label}</span>
                </div>
            ))}
        </CardContent>
    </Card>
);

const NotificationSettings = ({ notifications }: { notifications: IOperationsSettings['notifications'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            {notifications.map((notif, i) => (
                <div key={i} className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium">{notif.label}</p>
                        <p className="text-xs text-muted-foreground">{notif.description}</p>
                    </div>
                    <Switch defaultChecked={notif.enabled} />
                </div>
            ))}
        </CardContent>
    </Card>
);

const SettingField = ({
    label,
    defaultValue,
    type = 'text',
}: {
    label: string;
    defaultValue: string;
    type?: string;
}) => (
    <div className="space-y-2">
        <Label className="text-sm">{label}</Label>
        <Input type={type} defaultValue={defaultValue} />
    </div>
);

// ============= TYPES =============
interface IOperationsSettings {
    schoolInfo: {
        name: string;
        address: string;
        phone: string;
        email: string;
        website: string;
    };
    academicYear: {
        current: string;
        startDate: string;
        endDate: string;
        workingDays: string;
        autoRollover: boolean;
    };
    gradingSystem: {
        grade: string;
        min: string;
        max: string;
        label: string;
    }[];
    notifications: {
        label: string;
        description: string;
        enabled: boolean;
    }[];
}
