import { Send, Paperclip, CalendarDays, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

// ============= MAIN COMPONENT =============
export default function PublishNotice({ noticeTypes, audienceOptions }: IPublishNotice) {
    return (
        <div className="space-y-6">
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <NoticeForm />
                </div>
                <PublishSettings noticeTypes={noticeTypes} audienceOptions={audienceOptions} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Publish Notice</h1>
        <p className="text-muted-foreground mt-1">Create and publish notices to students, parents and staff</p>
    </div>
);

const NoticeForm = () => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Notice Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="notice-title">Title</Label>
                <Input id="notice-title" placeholder="Enter notice title..." />
            </div>
            <div className="space-y-2">
                <Label htmlFor="notice-body">Message</Label>
                <Textarea
                    id="notice-body"
                    placeholder="Write your notice content here..."
                    className="min-h-[200px] resize-y"
                />
            </div>
            <AttachmentSection />
        </CardContent>
    </Card>
);

const AttachmentSection = () => (
    <div className="space-y-2">
        <Label>Attachments</Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <Paperclip className="mx-auto size-8 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Drop files here or click to attach</p>
            <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, PNG up to 10MB</p>
            <Button variant="outline" size="sm" className="mt-3">Browse Files</Button>
        </div>
    </div>
);

const PublishSettings = ({
    noticeTypes,
    audienceOptions,
}: {
    noticeTypes: IPublishNotice['noticeTypes'];
    audienceOptions: IPublishNotice['audienceOptions'];
}) => (
    <div className="space-y-4">
        <TypeSelector types={noticeTypes} />
        <AudienceSelector options={audienceOptions} />
        <ScheduleCard />
        <PublishActions />
    </div>
);

const TypeSelector = ({ types }: { types: IPublishNotice['noticeTypes'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Notice Type</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
            {types.map((type, i) => (
                <Badge
                    key={i}
                    variant={i === 0 ? 'default' : 'outline'}
                    className="cursor-pointer px-3 py-1 text-sm"
                >
                    {type}
                </Badge>
            ))}
        </CardContent>
    </Card>
);

const AudienceSelector = ({ options }: { options: IPublishNotice['audienceOptions'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Target Audience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
            {options.map((opt, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked={opt.selected} className="size-4 rounded" />
                    <span className="text-sm">{opt.label}</span>
                </label>
            ))}
        </CardContent>
    </Card>
);

const ScheduleCard = () => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Schedule</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            <div className="space-y-2">
                <Label className="text-xs text-muted-foreground flex items-center gap-1">
                    <CalendarDays className="size-3" /> Publish Date
                </Label>
                <Input type="date" />
            </div>
            <div className="space-y-2">
                <Label className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="size-3" /> Publish Time
                </Label>
                <Input type="time" />
            </div>
        </CardContent>
    </Card>
);

const PublishActions = () => (
    <Card>
        <CardContent className="pt-6 space-y-3">
            <Button className="w-full gap-2">
                <Send className="size-4" />
                Publish Now
            </Button>
            <Separator />
            <Button variant="outline" className="w-full">Save as Draft</Button>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IPublishNotice {
    noticeTypes: string[];
    audienceOptions: {
        label: string;
        selected: boolean;
    }[];
}
