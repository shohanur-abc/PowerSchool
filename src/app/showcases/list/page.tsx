"use client";
import { Bell, CalendarCheck, CheckCircle, CheckCircle2, CreditCard, FileBarChart, Lock, MessageSquare } from "lucide-react";
import { Section as Comp } from "@/components/molecules/section";
import { List } from "@/components/molecules/list";

const Section = (props: React.ComponentProps<typeof Comp>) => <Comp  {...props} />;
export default function ListPage() {
    return (
        <>
            <Section title="Number + Title + Text" className="space-y-10">
                <List items={[
                    {
                        title: 'Mark Attendance',
                        content: 'Teachers can mark and submit attendance in under 30 seconds per class.',
                    },
                    {
                        title: 'Instant Alerts',
                        content: 'Parents receive real-time push notifications for absences, grades, and notices.',
                    },
                    {
                        title: 'Pay Fees',
                        content: 'Parents pay fees securely via UPI, cards, or net banking from the app.',
                    },
                    {
                        title: 'Chat & Messaging',
                        content: 'Direct messaging between teachers and parents with media sharing.',
                    },
                    {
                        title: 'View Reports',
                        content: 'Access report cards, attendance records, and progress charts anywhere.',
                    },
                    {
                        title: 'Secure Login',
                        content: 'Biometric login and session management for data protection.',
                    },
                ]} />
            </Section>

            <Section title="Icon + Text">
                <List items={[
                    { content: 'Teachers can mark and submit attendance in under 30 seconds per class.', },
                    { content: 'Parents receive real-time push notifications for absences, grades, and notices.', },
                    { content: 'Parents pay fees securely via UPI, cards, or net banking from the app.', },
                    { content: 'Direct messaging between teachers and parents with media sharing.', },
                    { content: 'Access report cards, attendance records, and progress charts anywhere.', },
                    { content: 'Biometric login and session management for data protection.', },]}
                    icon={CheckCircle}
                />
            </Section>

            <Section title="Icon + Title">
                <List items={[
                    { title: 'Mark Attendance', },
                    { title: 'Instant Alerts', },
                    { title: 'Pay Fees', },
                    { title: 'Chat & Messaging', },
                    { title: 'View Reports', },
                    { title: 'Secure Login', },
                    { title: 'Additional Feature', },
                    { title: 'Another Feature', },
                    { title: 'More Features', },
                    { title: 'Feature 10', },]}
                    icon={CheckCircle}
                />
            </Section>

            <Section title="Icon + Title + Text">
                <List items={[
                    {
                        icon: CalendarCheck,
                        title: 'Mark Attendance',
                        content: 'Teachers can mark and submit attendance in under 30 seconds per class.',
                    },
                    {
                        icon: Bell,
                        title: 'Instant Alerts',
                        content: 'Parents receive real-time push notifications for absences, grades, and notices.',
                    },
                    {
                        icon: CreditCard,
                        title: 'Pay Fees',
                        content: 'Parents pay fees securely via UPI, cards, or net banking from the app.',
                    },
                    {
                        icon: MessageSquare,
                        title: 'Chat & Messaging',
                        content: 'Direct messaging between teachers and parents with media sharing.',
                    },
                    {
                        icon: FileBarChart,
                        title: 'View Reports',
                        content: 'Access report cards, attendance records, and progress charts anywhere.',
                    },
                    {
                        icon: Lock,
                        title: 'Secure Login',
                        content: 'Biometric login and session management for data protection.',
                    },
                ]} />

            </Section>

            <Section title="Number + Title">
                <List items={[
                    { title: 'Mark Attendance', },
                    { title: 'Instant Alerts', },
                    { title: 'Pay Fees', },
                    { title: 'Chat & Messaging', },
                    { title: 'View Reports', },
                    { title: 'Secure Login', },
                    { title: 'Additional Feature', },
                    { title: 'Another Feature', },
                    { title: 'More Features', },
                    { title: 'Feature 10', },
                ]}
                />
            </Section>

            <Section title="Number + Text">
                <List items={[
                    { content: 'Teachers can mark and submit attendance in under 30 seconds per class.', },
                    { content: 'Parents receive real-time push notifications for absences, grades, and notices.', },
                    { content: 'Parents pay fees securely via UPI, cards, or net banking from the app.', },
                    { content: 'Direct messaging between teachers and parents with media sharing.', },
                    { content: 'Access report cards, attendance records, and progress charts anywhere.', },
                    { content: 'Biometric login and session management for data protection.', },
                    { content: 'Additional feature description goes here.', },
                    { content: 'Another feature description goes here.', },
                    { content: 'More features description goes here.', },
                    { content: 'Feature 10 description goes here.', },
                    { content: 'Feature 11 description goes here.', },
                    { content: 'Feature 12 description goes here.', },
                ]} />
            </Section>
        </>
    );
}