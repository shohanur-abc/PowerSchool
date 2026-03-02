"use client";
import { Footer } from '@/components/molecules/footer';

export default function FooterPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Full Footer</h2>
                <div className="border rounded-xl overflow-hidden">
                    <Footer
                        columns={[
                            {
                                title: 'Product',
                                links: [
                                    { label: 'Features', href: '#' },
                                    { label: 'Pricing', href: '#' },
                                    { label: 'Changelog', href: '#' },
                                    { label: 'Documentation', href: '#' },
                                ],
                            },
                            {
                                title: 'Company',
                                links: [
                                    { label: 'About Us', href: '#' },
                                    { label: 'Blog', href: '#' },
                                    { label: 'Careers', href: '#' },
                                    { label: 'Contact', href: '#' },
                                ],
                            },
                            {
                                title: 'Resources',
                                links: [
                                    { label: 'Help Center', href: '#' },
                                    { label: 'Community', href: '#' },
                                    { label: 'Webinars', href: '#' },
                                ],
                            },
                            {
                                title: 'Legal',
                                links: [
                                    { label: 'Privacy Policy', href: '#' },
                                    { label: 'Terms of Service', href: '#' },
                                    { label: 'Cookie Policy', href: '#' },
                                ],
                            },
                        ]}
                        bottom={
                            <div className="flex justify-between">
                                <span>© 2024 EduManage Inc. All rights reserved.</span>
                                <span>Made with ♥ by the team</span>
                            </div>
                        }
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Simple Footer (No Bottom Bar)</h2>
                <div className="border rounded-xl overflow-hidden">
                    <Footer
                        columns={[
                            { title: 'Platform', links: [{ label: 'Dashboard', href: '#' }, { label: 'Reports', href: '#' }] },
                            { title: 'Support', links: [{ label: 'Help', href: '#' }, { label: 'Contact', href: '#' }] },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
