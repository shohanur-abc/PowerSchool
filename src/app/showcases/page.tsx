import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ComponentIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Molecule Showcases',
    description: 'Browse 200+ reusable UI molecule components',
};

export default function ShowcasesPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <ComponentIcon className="size-8 text-primary" />
                    <h1 className="text-3xl font-bold tracking-tight">Molecule Showcases</h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                    Browse 200+ reusable, flexible UI molecule components. Each component supports granular styling via classNames prop,
                    uses container queries, and is built on top of shadcn/ui primitives.
                </p>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {CATEGORIES.map(({ category, description, count, slug }) => (
                    <Link key={category} href={slug ? `/showcases/${slug}` : '#'} className="no-underline">
                        <Card className="hover:border-primary/50 transition-colors h-full">
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-base">{category}</CardTitle>
                                    <Badge variant="secondary">{count}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const CATEGORIES = [
    { category: 'Layout', description: 'Section, Container, Stack, Grid, Split View, Resizable Panels and more', count: 14, slug: 'section' },
    { category: 'Navigation', description: 'Breadcrumbs, Tabs, Sidebar Menu, Pagination, Step Indicators', count: 13, slug: 'breadcrumb-nav' },
    { category: 'Data Display', description: 'Tables, Stats, Timelines, Activity Feeds, Counters', count: 27, slug: 'data-table' },
    { category: 'Cards', description: 'Info, Feature, Pricing, Testimonial, Profile and 20+ card variants', count: 26, slug: 'info-card' },
    { category: 'Charts', description: 'Area, Bar, Line, Pie, Donut and Radial chart cards', count: 6, slug: 'area-chart-card' },
    { category: 'Forms', description: 'Input, Select, Textarea, Checkbox, Switch, Date Picker, Tag Input and more', count: 28, slug: 'input' },
    { category: 'Feedback', description: 'Alerts, Banners, Progress, Status, Notifications, Loading states', count: 19, slug: 'alert-banner' },
    { category: 'Interactive', description: 'Dialogs, Dropdowns, Tooltips, Command Menu, Context Menu', count: 20, slug: 'accordion' },
    { category: 'Content', description: 'Headers, Hero, CTA, Footer, Code Block, Comments, Marquee', count: 19, slug: 'hero-banner' },
    { category: 'Utility', description: 'Avatar Group, Badges, Tags, Rating, Logo, Theme Toggle', count: 16, slug: 'avatar-group' },
    { category: 'Education', description: 'Attendance, Grades, Timetable, Exams, Fee Summary', count: 9, slug: 'timetable' },
    { category: 'Skeleton', description: 'Skeleton loaders for Forms, Profiles and more', count: 3, slug: 'skeleton-loaders' },
];
