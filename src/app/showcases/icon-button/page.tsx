"use client";
import { IconButton } from '@/components/molecules/icon-button';
import { EditIcon, TrashIcon, ShareIcon, HeartIcon, BookmarkIcon, DownloadIcon } from 'lucide-react';

export default function IconButtonPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default with Tooltip</h2>
                <div className="flex flex-wrap gap-3">
                    <IconButton icon={EditIcon} label="Edit" tooltip="Edit this item" />
                    <IconButton icon={TrashIcon} label="Delete" tooltip="Delete this item" />
                    <IconButton icon={ShareIcon} label="Share" tooltip="Share with others" />
                    <IconButton icon={HeartIcon} label="Like" tooltip="Add to favorites" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Variants</h2>
                <div className="flex flex-wrap gap-3">
                    <IconButton icon={BookmarkIcon} label="Bookmark" variant="default" tooltip="Default" />
                    <IconButton icon={BookmarkIcon} label="Bookmark" variant="outline" tooltip="Outline" />
                    <IconButton icon={BookmarkIcon} label="Bookmark" variant="ghost" tooltip="Ghost" />
                    <IconButton icon={BookmarkIcon} label="Bookmark" variant="secondary" tooltip="Secondary" />
                    <IconButton icon={BookmarkIcon} label="Bookmark" variant="destructive" tooltip="Destructive" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <IconButton icon={DownloadIcon} label="Download" size="sm" tooltip="Small" />
                    <IconButton icon={DownloadIcon} label="Download" tooltip="Default" />
                    <IconButton icon={DownloadIcon} label="Download" size="lg" tooltip="Large" />
                </div>
            </div>
        </div>
    );
}
