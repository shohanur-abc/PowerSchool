"use client";
import { LogoCloud } from '@/components/molecules/logo-cloud';

export default function LogoCloudPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">With Title (Grayscale Default)</h2>
                <LogoCloud
                    title="Trusted by leading institutions worldwide"
                    logos={[
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png', alt: 'Microsoft' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png', alt: 'Google' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png', alt: 'Amazon' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png', alt: 'Netflix' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/100px-Notion-logo.svg.png', alt: 'Notion' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Full Color (No Grayscale)</h2>
                <LogoCloud
                    title="Our integration partners"
                    grayscale={false}
                    logos={[
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png', alt: 'Microsoft', href: 'https://microsoft.com' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png', alt: 'Google', href: 'https://google.com' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png', alt: 'Amazon', href: 'https://amazon.com' },
                    ]}
                />
            </div>
        </div>
    );
}
