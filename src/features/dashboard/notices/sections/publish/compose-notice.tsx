'use client';

import { useState } from 'react';
import { CalendarIcon, Paperclip, Send, Save } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

// ============= MAIN COMPONENT =============
export default function ComposeNotice({
    title,
    description,
    priorities,
    audienceOptions,
    onPublish,
    onSaveDraft,
}: IComposeNotice) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <NoticeForm
                priorities={priorities}
                audienceOptions={audienceOptions}
                onPublish={onPublish}
                onSaveDraft={onSaveDraft}
            />
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const NoticeForm = ({
    priorities,
    audienceOptions,
    onPublish,
    onSaveDraft,
}: Omit<IComposeNotice, 'title' | 'description'>) => {
    const [noticeTitle, setNoticeTitle] = useState('');
    const [content, setContent] = useState('');
    const [priority, setPriority] = useState('');
    const [selectedAudience, setSelectedAudience] = useState<string[]>([]);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduleDate, setScheduleDate] = useState<Date | undefined>();
    // TODO: Implement file upload state management
    const [attachments] = useState<string[]>([]);

    // TODO: Add form validation
    // TODO: Integrate rich text editor
    // TODO: Handle file upload for attachments
    const handlePublish = () => {
        onPublish?.({
            title: noticeTitle,
            content,
            priority,
            audience: selectedAudience,
            isScheduled,
            scheduleDate,
            attachments,
        });
    };

    const handleSaveDraft = () => {
        onSaveDraft?.({
            title: noticeTitle,
            content,
            priority,
            audience: selectedAudience,
            isScheduled,
            scheduleDate,
            attachments,
        });
    };

    const toggleAudience = (value: string) => {
        setSelectedAudience((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    return (
        <>
            <CardContent className="space-y-6">
                <TitleField value={noticeTitle} onChange={setNoticeTitle} />
                <ContentField value={content} onChange={setContent} />

                <div className="@container grid grid-cols-1 @xl:grid-cols-2 gap-6">
                    <PriorityField
                        priorities={priorities}
                        value={priority}
                        onChange={setPriority}
                    />
                    <AudienceField
                        options={audienceOptions}
                        selected={selectedAudience}
                        onToggle={toggleAudience}
                    />
                </div>

                <ScheduleField
                    isScheduled={isScheduled}
                    onToggle={setIsScheduled}
                    date={scheduleDate}
                    onDateSelect={setScheduleDate}
                />

                <AttachmentArea attachments={attachments} />
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t pt-6">
                {onSaveDraft && (
                    <Button
                        variant="outline"
                        onClick={handleSaveDraft}
                        disabled={!noticeTitle.trim()}
                    >
                        <Save className="size-4 mr-2" />
                        Save Draft
                    </Button>
                )}
                <Button
                    onClick={handlePublish}
                    disabled={
                        !noticeTitle.trim() ||
                        !content.trim() ||
                        !priority ||
                        selectedAudience.length === 0
                    }
                >
                    <Send className="size-4 mr-2" />
                    {isScheduled ? 'Schedule Notice' : 'Publish Notice'}
                </Button>
            </CardFooter>
        </>
    );
};

const TitleField = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) => (
    <div className="space-y-2">
        <Label htmlFor="notice-title">Notice Title</Label>
        <Input
            id="notice-title"
            placeholder="Enter notice title..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

const ContentField = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) => (
    <div className="space-y-2">
        {/* TODO: Replace with rich text editor component */}
        <Label htmlFor="notice-content">Content</Label>
        <Textarea
            id="notice-content"
            placeholder="Write your notice content here..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-48 resize-y"
        />
    </div>
);

const PriorityField = ({
    priorities,
    value,
    onChange,
}: {
    priorities: IPriorityOption[];
    value: string;
    onChange: (value: string) => void;
}) => (
    <div className="space-y-2">
        <Label>Priority</Label>
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
                {priorities.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);

const AudienceField = ({
    options,
    selected,
    onToggle,
}: {
    options: IAudienceOption[];
    selected: string[];
    onToggle: (value: string) => void;
}) => (
    <div className="space-y-2">
        <Label>Target Audience</Label>
        <div className="grid grid-cols-2 gap-3">
            {options.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                    <Checkbox
                        id={`audience-${option.value}`}
                        checked={selected.includes(option.value)}
                        onCheckedChange={() => onToggle(option.value)}
                    />
                    <Label
                        htmlFor={`audience-${option.value}`}
                        className="text-sm font-normal cursor-pointer"
                    >
                        {option.label}
                    </Label>
                </div>
            ))}
        </div>
    </div>
);

const ScheduleField = ({
    isScheduled,
    onToggle,
    date,
    onDateSelect,
}: {
    isScheduled: boolean;
    onToggle: (value: boolean) => void;
    date: Date | undefined;
    onDateSelect: (date: Date | undefined) => void;
}) => (
    <div className="space-y-4">
        <div className="flex items-center gap-3">
            <Switch
                id="schedule-toggle"
                checked={isScheduled}
                onCheckedChange={onToggle}
            />
            <Label htmlFor="schedule-toggle" className="cursor-pointer">
                Schedule for later
            </Label>
        </div>
        {isScheduled && (
            <div className="space-y-2 pl-12">
                <Label>Publish Date</Label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                'w-full @xl:w-64 justify-start text-left font-normal',
                                !date && 'text-muted-foreground'
                            )}
                        >
                            <CalendarIcon className="size-4 mr-2" />
                            {date ? format(date, 'PPP') : 'Pick a date'}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={onDateSelect}
                            disabled={{ before: new Date() }}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
        )}
    </div>
);

const AttachmentArea = ({ attachments }: { attachments: string[] }) => (
    <div className="space-y-2">
        <Label>Attachments</Label>
        {/* TODO: Implement file upload drag-and-drop */}
        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Paperclip className="size-6 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
                Drag & drop files here or click to browse
            </p>
            <p className="text-xs text-muted-foreground mt-1">
                PDF, DOC, DOCX, JPG, PNG (max 10MB)
            </p>
        </div>
        {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
                {attachments.map((file, i) => (
                    <span
                        key={i}
                        className="text-xs bg-muted px-2 py-1 rounded"
                    >
                        {file}
                    </span>
                ))}
            </div>
        )}
    </div>
);

// ============= TYPES =============
interface IPriorityOption {
    label: string;
    value: string;
}

interface IAudienceOption {
    label: string;
    value: string;
}

interface INoticePayload {
    title: string;
    content: string;
    priority: string;
    audience: string[];
    isScheduled: boolean;
    scheduleDate?: Date;
    attachments: string[];
}

interface IComposeNotice {
    title: string;
    description?: string;
    priorities: IPriorityOption[];
    audienceOptions: IAudienceOption[];
    onPublish?: (payload: INoticePayload) => void;
    onSaveDraft?: (payload: INoticePayload) => void;
}
