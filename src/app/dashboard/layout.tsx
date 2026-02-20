"use client";
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import DashboardSidebar from '@/features/navigation/dashboard-sidebar';
import NotificationMenu from '@/features/navigation/notification-menu';
import UserMenu from '@/features/navigation/user-menu';
import { ROUTES } from '@/lib/routes';
import React from 'react';
import { LayoutDashboard, CheckCircle2, BarChart3, FileText, DollarSign, Settings, Bell, Users, Shield, Lock, GraduationCap, BookOpen, UserCheck, Crown } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardSidebar sidebarItems={DASHBOARD_MENU} userRole="admin">
            <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b h-14 shrink-0">
                <div className="flex h-14 w-full items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-6" />
                    <h1 className="font-semibold text-sm">Dashboard</h1>
                    <div className="ml-auto flex items-center gap-4">
                        <NotificationMenu notifications={notifications} unreadCount={1} />
                        <UserMenu user={user} />
                    </div>
                </div>
            </header>
            <main className='p-4'>{children}</main>
        </DashboardSidebar>
    );
}


export const DASHBOARD_MENU = [
    {
        label: "Dashboard",
        items: [
            {
                label: "Overview",
                href: ROUTES.dashboard.home,
                icon: <LayoutDashboard />,
            },
        ],
    },
    {
        label: "Academic",
        items: [
            {
                label: "Attendance",
                items: [
                    { label: "Overview", href: ROUTES.dashboard.attendance.root },
                    { label: "Mark Attendance", href: ROUTES.dashboard.attendance.mark },
                    { label: "Corrections", href: ROUTES.dashboard.attendance.corrections },
                    { label: "Reports", href: ROUTES.dashboard.attendance.reports },
                ],
                icon: <CheckCircle2 />,
            },
            {
                label: "Results",
                items: [
                    { label: "Overview", href: ROUTES.dashboard.results.root },
                    { label: "Enter Results", href: ROUTES.dashboard.results.enter },
                    { label: "View Results", href: ROUTES.dashboard.results.view },
                    { label: "Report Cards", href: ROUTES.dashboard.results.reportCards },
                    { label: "Analytics", href: ROUTES.dashboard.results.analytics },
                ],
                icon: <BarChart3 />,
            },
            {
                label: "Reports",
                items: [
                    { label: "Overview", href: ROUTES.dashboard.reports.root },
                    { label: "Standard Reports", href: ROUTES.dashboard.reports.standard },
                    { label: "Custom Reports", href: ROUTES.dashboard.reports.custom },
                    { label: "Analytics", href: ROUTES.dashboard.reports.analytics },
                ],
                icon: <FileText />,
            },
        ],
    },
    {
        label: "Finance",
        items: [
            {
                label: "Fees",
                items: [
                    { label: "Overview", href: ROUTES.dashboard.fees.root },
                    { label: "Collection", href: ROUTES.dashboard.fees.collection },
                    { label: "Tracking", href: ROUTES.dashboard.fees.tracking },
                    { label: "Statements", href: ROUTES.dashboard.fees.statements },
                    { label: "Fee Structure", href: ROUTES.dashboard.fees.structure },
                ],
                icon: <DollarSign />,
            },
        ],
    },
    {
        label: "Operations",
        items: [
            {
                label: "Operations",
                items: [
                    { label: "Overview", href: ROUTES.dashboard.operations.root },
                    { label: "Calendar", href: ROUTES.dashboard.operations.calendar },
                    { label: "Classes", href: ROUTES.dashboard.operations.classes },
                    { label: "Staff", href: ROUTES.dashboard.operations.staff },
                    { label: "Students", href: ROUTES.dashboard.operations.students },
                    { label: "Settings", href: ROUTES.dashboard.operations.settings },
                ],
                icon: <Settings />,
            },
            {
                label: "Notices",
                items: [
                    { label: "Overview", href: ROUTES.dashboard.notices.root },
                    { label: "Manage", href: ROUTES.dashboard.notices.manage },
                    { label: "Publish", href: ROUTES.dashboard.notices.publish },
                    { label: "Analytics", href: ROUTES.dashboard.notices.analytics },
                ],
                icon: <Bell />,
            },
        ],
    },
    {
        label: "Administration",
        items: [
            {
                label: "Users",
                items: [
                    { label: "Overview", href: ROUTES.dashboard.users.root },
                    { label: "Credentials", href: ROUTES.dashboard.users.credentials },
                    { label: "Activity", href: ROUTES.dashboard.users.activity },
                ],
                icon: <Users />,
            },
            {
                label: "Roles",
                items: [
                    { label: "Overview", href: ROUTES.dashboard.roles.root },
                    { label: "Manage Roles", href: ROUTES.dashboard.roles.manage },
                    { label: "Permissions", href: ROUTES.dashboard.roles.permissions },
                    { label: "Role Users", href: ROUTES.dashboard.roles.users },
                ],
                icon: <Shield />,
            },
            {
                label: "Admin",
                href: ROUTES.dashboard.admin,
                icon: <Lock />,
            },
        ],
    },
    {
        label: "Portals",
        items: [
            {
                label: "Teacher",
                href: ROUTES.dashboard.teacher,
                icon: <GraduationCap />,
            },
            {
                label: "Student",
                href: ROUTES.dashboard.student,
                icon: <BookOpen />,
            },
            {
                label: "Parent",
                href: ROUTES.dashboard.parent,
                icon: <UserCheck />,
            },
            {
                label: "Principal",
                href: ROUTES.dashboard.principal,
                icon: <Crown />,
            },
        ],
    },
];

const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    avatar: 'https://github.com/shadcn.png',
};

const notifications = [
    {
        id: '1',
        title: 'New attendance mark',
        description: 'Class A submitted attendance',
        time: '5 minutes ago',
        read: false,
        href: ROUTES.dashboard.attendance.reports,
    },
    {
        id: '2',
        title: 'Fee payment received',
        description: 'Payment from student ID 001',
        time: '1 hour ago',
        read: true,
        href: ROUTES.dashboard.fees.tracking,
    },
];



