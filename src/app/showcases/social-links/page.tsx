"use client";
import { SocialLinks } from '@/components/molecules/social-links';
import { TwitterIcon, GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon, FacebookIcon } from 'lucide-react';

const socialLinks = [
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: GithubIcon, href: '#', label: 'GitHub' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: YoutubeIcon, href: '#', label: 'YouTube' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
];

export default function SocialLinksPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Ghost (Default)</h2>
                <SocialLinks links={socialLinks} variant="ghost" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Outline</h2>
                <SocialLinks links={socialLinks} variant="outline" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Secondary</h2>
                <SocialLinks links={socialLinks.slice(0, 3)} variant="secondary" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In Footer Context</h2>
                <div className="border rounded-xl p-6 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Follow us on social media</p>
                    <SocialLinks
                        links={[
                            { icon: TwitterIcon, href: '#', label: 'Twitter' },
                            { icon: GithubIcon, href: '#', label: 'GitHub' },
                            { icon: FacebookIcon, href: '#', label: 'Facebook' },
                        ]}
                        variant="ghost"
                    />
                </div>
            </div>
        </div>
    );
}
