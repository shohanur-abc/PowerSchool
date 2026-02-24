"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SearchIcon, ComponentIcon, ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';

export default function ShowcasesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname();
    const [search, setSearch] = useState('');
    const filtered = search ? COMPONENTS.filter(c => c.label.toLowerCase().includes(search.toLowerCase()) || c.category.toLowerCase().includes(search.toLowerCase())) : COMPONENTS;
    const grouped = CATEGORIES.map(cat => ({ category: cat, items: filtered.filter(c => c.category === cat) })).filter(g => g.items.length > 0);

    return (
        <div className="flex h-screen">
            <aside className="w-72 border-r flex flex-col shrink-0 h-screen overflow-y-auto">
                <div className="p-4 border-b">
                    <Link href="/showcases" className="flex items-center gap-2 font-semibold text-sm no-underline">
                        <ComponentIcon className="size-5 text-primary" />
                        Molecule Showcases
                    </Link>
                </div>
                <div className="p-3">
                    <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                        <Input placeholder="Search components..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-8 h-8 text-xs" />
                    </div>
                </div>
                <ScrollArea className="flex-1">
                    <nav className="px-3 pb-4">
                        {grouped.map(({ category, items }) => (
                            <div key={category} className="mb-4">
                                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-1">{category}</h4>
                                {items.map(({ slug, label }) => {
                                    const active = pathname === `/showcases/${slug}`;
                                    return (
                                        <Link
                                            key={slug}
                                            href={`/showcases/${slug}`}
                                            className={cn("flex items-center gap-1.5 px-2 py-1 text-xs rounded-md transition-colors no-underline", active ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted")}
                                        >
                                            <ChevronRightIcon className={cn("size-3 transition-transform", active && "rotate-90")} />
                                            {label}
                                        </Link>
                                    );
                                })}
                            </div>
                        ))}
                    </nav>
                </ScrollArea>
                <div className="p-3 border-t text-[10px] text-muted-foreground text-center">
                    {COMPONENTS.length} molecules
                </div>
            </aside>
            <main className="flex-1 overflow-y-auto">
                <div className="p-8">{children}</div>
            </main>
        </div>
    );
}

const CATEGORIES = ['Layout', 'Navigation', 'Data Display', 'Cards', 'Charts', 'Forms', 'Feedback', 'Interactive', 'Content', 'Utility', 'Education', 'Skeleton'] as const;

const COMPONENTS: { slug: string; label: string; category: typeof CATEGORIES[number] }[] = [
    // Layout
    { slug: 'section', label: 'Section', category: 'Layout' },
    { slug: 'container', label: 'Container', category: 'Layout' },
    { slug: 'stack', label: 'Stack', category: 'Layout' },
    { slug: 'center', label: 'Center', category: 'Layout' },
    { slug: 'grid-container', label: 'Grid Container', category: 'Layout' },
    { slug: 'responsive-grid', label: 'Responsive Grid', category: 'Layout' },
    { slug: 'split-view', label: 'Split View', category: 'Layout' },
    { slug: 'resizable-panels', label: 'Resizable Panels', category: 'Layout' },
    { slug: 'sidebar-layout', label: 'Sidebar Layout', category: 'Layout' },
    { slug: 'page-shell', label: 'Page Shell', category: 'Layout' },
    { slug: 'overlay', label: 'Overlay', category: 'Layout' },
    { slug: 'divider', label: 'Divider', category: 'Layout' },
    { slug: 'section-divider', label: 'Section Divider', category: 'Layout' },
    { slug: 'masonry-grid', label: 'Masonry Grid', category: 'Layout' },
    // Navigation
    { slug: 'breadcrumb-nav', label: 'Breadcrumb Nav', category: 'Navigation' },
    { slug: 'breadcrumb-trail', label: 'Breadcrumb Trail', category: 'Navigation' },
    { slug: 'breadcrumb-page', label: 'Breadcrumb Page', category: 'Navigation' },
    { slug: 'tab-group', label: 'Tab Group', category: 'Navigation' },
    { slug: 'tab-nav', label: 'Tab Nav', category: 'Navigation' },
    { slug: 'nav-item', label: 'Nav Item', category: 'Navigation' },
    { slug: 'sidebar-menu', label: 'Sidebar Menu', category: 'Navigation' },
    { slug: 'topbar', label: 'Topbar', category: 'Navigation' },
    { slug: 'sticky-header', label: 'Sticky Header', category: 'Navigation' },
    { slug: 'pagination-bar', label: 'Pagination Bar', category: 'Navigation' },
    { slug: 'back-button', label: 'Back Button', category: 'Navigation' },
    { slug: 'step-indicator', label: 'Step Indicator', category: 'Navigation' },
    { slug: 'progress-steps', label: 'Progress Steps', category: 'Navigation' },
    // Data Display
    { slug: 'list', label: 'List', category: 'Data Display' },
    { slug: 'data-table', label: 'Data Table', category: 'Data Display' },
    { slug: 'data-list', label: 'Data List', category: 'Data Display' },
    { slug: 'key-value', label: 'Key Value', category: 'Data Display' },
    { slug: 'label-value', label: 'Label Value', category: 'Data Display' },
    { slug: 'info-row', label: 'Info Row', category: 'Data Display' },
    { slug: 'stat-card', label: 'Stat Card', category: 'Data Display' },
    { slug: 'stat-grid', label: 'Stat Grid', category: 'Data Display' },
    { slug: 'stat-list', label: 'Stat List', category: 'Data Display' },
    { slug: 'stat-pill', label: 'Stat Pill', category: 'Data Display' },
    { slug: 'stat-comparison', label: 'Stat Comparison', category: 'Data Display' },
    { slug: 'inline-stat', label: 'Inline Stat', category: 'Data Display' },
    { slug: 'metric-card', label: 'Metric Card', category: 'Data Display' },
    { slug: 'metric-row', label: 'Metric Row', category: 'Data Display' },
    { slug: 'percentage-change', label: 'Percentage Change', category: 'Data Display' },
    { slug: 'timeline', label: 'Timeline', category: 'Data Display' },
    { slug: 'activity-feed', label: 'Activity Feed', category: 'Data Display' },
    { slug: 'comparison-table', label: 'Comparison Table', category: 'Data Display' },
    { slug: 'responsive-table', label: 'Responsive Table', category: 'Data Display' },
    { slug: 'sortable-header', label: 'Sortable Header', category: 'Data Display' },
    { slug: 'table-card', label: 'Table Card', category: 'Data Display' },
    { slug: 'date-range-display', label: 'Date Range Display', category: 'Data Display' },
    { slug: 'time-ago', label: 'Time Ago', category: 'Data Display' },
    { slug: 'countdown', label: 'Countdown', category: 'Data Display' },
    { slug: 'number-ticker', label: 'Number Ticker', category: 'Data Display' },
    { slug: 'animated-counter', label: 'Animated Counter', category: 'Data Display' },
    { slug: 'sortable-list', label: 'Sortable List', category: 'Data Display' },
    { slug: 'search-results', label: 'Search Results', category: 'Data Display' },
    { slug: 'file-list', label: 'File List', category: 'Data Display' },
    { slug: 'status-page', label: 'Status Page', category: 'Data Display' },
    // Cards
    { slug: 'info-card', label: 'Info Card', category: 'Cards' },
    { slug: 'feature-card', label: 'Feature Card', category: 'Cards' },
    { slug: 'link-card', label: 'Link Card', category: 'Cards' },
    { slug: 'media-card', label: 'Media Card', category: 'Cards' },
    { slug: 'notice-card', label: 'Notice Card', category: 'Cards' },
    { slug: 'pricing-card', label: 'Pricing Card', category: 'Cards' },
    { slug: 'testimonial-card', label: 'Testimonial Card', category: 'Cards' },
    { slug: 'team-card', label: 'Team Card', category: 'Cards' },
    { slug: 'user-card', label: 'User Card', category: 'Cards' },
    { slug: 'profile-card', label: 'Profile Card', category: 'Cards' },
    { slug: 'avatar-card', label: 'Avatar Card', category: 'Cards' },
    { slug: 'detail-card', label: 'Detail Card', category: 'Cards' },
    { slug: 'dual-action-card', label: 'Dual Action Card', category: 'Cards' },
    { slug: 'welcome-card', label: 'Welcome Card', category: 'Cards' },
    { slug: 'auth-card', label: 'Auth Card', category: 'Cards' },
    { slug: 'schedule-card', label: 'Schedule Card', category: 'Cards' },
    { slug: 'score-card', label: 'Score Card', category: 'Cards' },
    { slug: 'receipt-card', label: 'Receipt Card', category: 'Cards' },
    { slug: 'weather-card', label: 'Weather Card', category: 'Cards' },
    { slug: 'event-card', label: 'Event Card', category: 'Cards' },
    { slug: 'tabs-card', label: 'Tabs Card', category: 'Cards' },
    { slug: 'carousel-card', label: 'Carousel Card', category: 'Cards' },
    { slug: 'card-stack', label: 'Card Stack', category: 'Cards' },
    { slug: 'menu-card', label: 'Menu Card', category: 'Cards' },
    { slug: 'accordion-card', label: 'Accordion Card', category: 'Cards' },
    { slug: 'aspect-card', label: 'Aspect Card', category: 'Cards' },
    { slug: 'progress-card', label: 'Progress Card', category: 'Cards' },
    // Charts
    { slug: 'area-chart-card', label: 'Area Chart Card', category: 'Charts' },
    { slug: 'bar-chart-card', label: 'Bar Chart Card', category: 'Charts' },
    { slug: 'line-chart-card', label: 'Line Chart Card', category: 'Charts' },
    { slug: 'pie-chart-card', label: 'Pie Chart Card', category: 'Charts' },
    { slug: 'donut-chart-card', label: 'Donut Chart Card', category: 'Charts' },
    { slug: 'radial-chart-card', label: 'Radial Chart Card', category: 'Charts' },
    // Forms
    { slug: 'input', label: 'Input (Form)', category: 'Forms' },
    { slug: 'form-select', label: 'Form Select', category: 'Forms' },
    { slug: 'form-textarea', label: 'Form Textarea', category: 'Forms' },
    { slug: 'form-checkbox', label: 'Form Checkbox', category: 'Forms' },
    { slug: 'form-switch', label: 'Form Switch', category: 'Forms' },
    { slug: 'form-radio-group', label: 'Form Radio Group', category: 'Forms' },
    { slug: 'form-slider', label: 'Form Slider', category: 'Forms' },
    { slug: 'form-otp', label: 'Form OTP', category: 'Forms' },
    { slug: 'form-date-picker', label: 'Form Date Picker', category: 'Forms' },
    { slug: 'form-combobox', label: 'Form Combobox', category: 'Forms' },
    { slug: 'form-field-group', label: 'Form Field Group', category: 'Forms' },
    { slug: 'form-actions', label: 'Form Actions', category: 'Forms' },
    { slug: 'form-wizard', label: 'Form Wizard', category: 'Forms' },
    { slug: 'search-box', label: 'Search Box', category: 'Forms' },
    { slug: 'input-with-button', label: 'Input With Button', category: 'Forms' },
    { slug: 'password-strength', label: 'Password Strength', category: 'Forms' },
    { slug: 'character-count', label: 'Character Count', category: 'Forms' },
    { slug: 'number-input', label: 'Number Input', category: 'Forms' },
    { slug: 'phone-input', label: 'Phone Input', category: 'Forms' },
    { slug: 'tag-input', label: 'Tag Input', category: 'Forms' },
    { slug: 'inline-edit', label: 'Inline Edit', category: 'Forms' },
    { slug: 'switch-card', label: 'Switch Card', category: 'Forms' },
    { slug: 'switch-group', label: 'Switch Group', category: 'Forms' },
    { slug: 'radio-cards', label: 'Radio Cards', category: 'Forms' },
    { slug: 'popover-form', label: 'Popover Form', category: 'Forms' },
    { slug: 'filter-bar', label: 'Filter Bar', category: 'Forms' },
    { slug: 'file-upload', label: 'File Upload', category: 'Forms' },
    { slug: 'settings-row', label: 'Settings Row', category: 'Forms' },
    { slug: 'checklist', label: 'Checklist', category: 'Forms' },
    // Feedback
    { slug: 'alert-banner', label: 'Alert Banner', category: 'Feedback' },
    { slug: 'alert-card', label: 'Alert Card', category: 'Feedback' },
    { slug: 'callout', label: 'Callout', category: 'Feedback' },
    { slug: 'announcement-bar', label: 'Announcement Bar', category: 'Feedback' },
    { slug: 'banner', label: 'Banner', category: 'Feedback' },
    { slug: 'empty-state', label: 'Empty State', category: 'Feedback' },
    { slug: 'error-page', label: 'Error Page', category: 'Feedback' },
    { slug: 'error-boundary-card', label: 'Error Boundary Card', category: 'Feedback' },
    { slug: 'loading', label: 'Loading', category: 'Feedback' },
    { slug: 'placeholder', label: 'Placeholder', category: 'Feedback' },
    { slug: 'progress-bar', label: 'Progress Bar', category: 'Feedback' },
    { slug: 'progress-ring', label: 'Progress Ring', category: 'Feedback' },
    { slug: 'circular-progress', label: 'Circular Progress', category: 'Feedback' },
    { slug: 'status-badge', label: 'Status Badge', category: 'Feedback' },
    { slug: 'toast-action', label: 'Toast Action', category: 'Feedback' },
    { slug: 'notification-item', label: 'Notification Item', category: 'Feedback' },
    { slug: 'notification-bell', label: 'Notification Bell', category: 'Feedback' },
    { slug: 'typing-indicator', label: 'Typing Indicator', category: 'Feedback' },
    { slug: 'dot-indicator', label: 'Dot Indicator', category: 'Feedback' },
    // Interactive
    { slug: 'accordion', label: 'Accordion', category: 'Interactive' },
    { slug: 'command-menu', label: 'Command Menu', category: 'Interactive' },
    { slug: 'confirmation-dialog', label: 'Confirmation Dialog', category: 'Interactive' },
    { slug: 'responsive-dialog', label: 'Responsive Dialog', category: 'Interactive' },
    { slug: 'dropdown-actions', label: 'Dropdown Actions', category: 'Interactive' },
    { slug: 'context-menu-wrapper', label: 'Context Menu Wrapper', category: 'Interactive' },
    { slug: 'popover-menu', label: 'Popover Menu', category: 'Interactive' },
    { slug: 'tooltip-wrapper', label: 'Tooltip Wrapper', category: 'Interactive' },
    { slug: 'tooltip-icon', label: 'Tooltip Icon', category: 'Interactive' },
    { slug: 'hover-info', label: 'Hover Info', category: 'Interactive' },
    { slug: 'hover-grow', label: 'Hover Grow', category: 'Interactive' },
    { slug: 'collapsible-section', label: 'Collapsible Section', category: 'Interactive' },
    { slug: 'scroll-to-top', label: 'Scroll To Top', category: 'Interactive' },
    { slug: 'scroll-area-wrapper', label: 'Scroll Area Wrapper', category: 'Interactive' },
    { slug: 'quick-action', label: 'Quick Action', category: 'Interactive' },
    { slug: 'copy-button', label: 'Copy Button', category: 'Interactive' },
    { slug: 'icon-button', label: 'Icon Button', category: 'Interactive' },
    { slug: 'action-bar', label: 'Action Bar', category: 'Interactive' },
    { slug: 'comparison-slider', label: 'Comparison Slider', category: 'Interactive' },
    { slug: 'spotlight', label: 'Spotlight', category: 'Interactive' },
    // Content
    { slug: 'page-header', label: 'Page Header', category: 'Content' },
    { slug: 'section-header', label: 'Section Header', category: 'Content' },
    { slug: 'hero-banner', label: 'Hero Banner', category: 'Content' },
    { slug: 'cta-section', label: 'CTA Section', category: 'Content' },
    { slug: 'footer', label: 'Footer', category: 'Content' },
    { slug: 'testimonial-slider', label: 'Testimonial Slider', category: 'Content' },
    { slug: 'feature-list', label: 'Feature List', category: 'Content' },
    { slug: 'pricing-toggle', label: 'Pricing Toggle', category: 'Content' },
    { slug: 'logo-cloud', label: 'Logo Cloud', category: 'Content' },
    { slug: 'code-block', label: 'Code Block', category: 'Content' },
    { slug: 'comment-card', label: 'Comment Card', category: 'Content' },
    { slug: 'conversation-bubble', label: 'Conversation Bubble', category: 'Content' },
    { slug: 'marquee', label: 'Marquee', category: 'Content' },
    { slug: 'text-reveal', label: 'Text Reveal', category: 'Content' },
    { slug: 'gradient-text', label: 'Gradient Text', category: 'Content' },
    { slug: 'truncate-text', label: 'Truncate Text', category: 'Content' },
    { slug: 'truncate-list', label: 'Truncate List', category: 'Content' },
    { slug: 'image-gallery', label: 'Image Gallery', category: 'Content' },
    { slug: 'aspect-image', label: 'Aspect Image', category: 'Content' },
    // Utility
    { slug: 'avatar-group', label: 'Avatar Group', category: 'Utility' },
    { slug: 'mini-profile', label: 'Mini Profile', category: 'Utility' },
    { slug: 'badge-group', label: 'Badge Group', category: 'Utility' },
    { slug: 'chip', label: 'Chip', category: 'Utility' },
    { slug: 'tag', label: 'Tag', category: 'Utility' },
    { slug: 'counter', label: 'Counter', category: 'Utility' },
    { slug: 'rating', label: 'Rating', category: 'Utility' },
    { slug: 'logo', label: 'Logo', category: 'Utility' },
    { slug: 'social-links', label: 'Social Links', category: 'Utility' },
    { slug: 'kbd-combo', label: 'Kbd Combo', category: 'Utility' },
    { slug: 'icon-badge', label: 'Icon Badge', category: 'Utility' },
    { slug: 'color-swatch', label: 'Color Swatch', category: 'Utility' },
    { slug: 'theme-toggle', label: 'Theme Toggle', category: 'Utility' },
    { slug: 'mini-calendar', label: 'Mini Calendar', category: 'Utility' },
    { slug: 'image-with-fallback', label: 'Image With Fallback', category: 'Utility' },
    // Education
    { slug: 'attendance-card', label: 'Attendance Card', category: 'Education' },
    { slug: 'grade-badge', label: 'Grade Badge', category: 'Education' },
    { slug: 'subject-card', label: 'Subject Card', category: 'Education' },
    { slug: 'assignment-card', label: 'Assignment Card', category: 'Education' },
    { slug: 'exam-result-card', label: 'Exam Result Card', category: 'Education' },
    { slug: 'fee-summary', label: 'Fee Summary', category: 'Education' },
    { slug: 'role-badge', label: 'Role Badge', category: 'Education' },
    { slug: 'onboarding-step', label: 'Onboarding Step', category: 'Education' },
    { slug: 'timetable', label: 'Timetable', category: 'Education' },
    // Skeleton
    { slug: 'skeleton-loaders', label: 'Skeleton Loaders', category: 'Skeleton' },
    { slug: 'skeleton-form', label: 'Skeleton Form', category: 'Skeleton' },
    { slug: 'skeleton-profile', label: 'Skeleton Profile', category: 'Skeleton' },
];
