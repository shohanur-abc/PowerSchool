"use client";
import { Logo } from '@/components/molecules/logo';
import { GraduationCapIcon, BookOpenIcon, SchoolIcon } from 'lucide-react';

export default function LogoPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Icon + Text</h2>
                <div className="space-y-4">
                    <Logo icon={GraduationCapIcon} text="EduManage" />
                    <Logo icon={BookOpenIcon} text="ClassRoom" />
                    <Logo icon={SchoolIcon} text="SchoolPro" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="space-y-4">
                    <Logo icon={GraduationCapIcon} text="EduManage" size="sm" />
                    <Logo icon={GraduationCapIcon} text="EduManage" size="default" />
                    <Logo icon={GraduationCapIcon} text="EduManage" size="lg" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Text Only</h2>
                <Logo text="SchoolManager" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Icon Only</h2>
                <Logo icon={GraduationCapIcon} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With href (Link)</h2>
                <Logo icon={GraduationCapIcon} text="EduManage" href="#" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Image Logo</h2>
                <Logo
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png"
                    alt="Microsoft"
                    text="Microsoft"
                />
            </div>
        </div>
    );
}
