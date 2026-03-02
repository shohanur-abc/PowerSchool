"use client";
import { cn } from '@/lib/utils';
import { FileIcon, FileTextIcon, ImageIcon, VideoIcon, MusicIcon, ArchiveIcon } from 'lucide-react';

export const FileList = ({ files, onFileClick, className, classNames: cns }: FileListProps) => {
    const getIcon = (type?: string) => {
        if (!type) return FileIcon;
        if (type.startsWith('image')) return ImageIcon;
        if (type.startsWith('video')) return VideoIcon;
        if (type.startsWith('audio')) return MusicIcon;
        if (type.includes('zip') || type.includes('archive')) return ArchiveIcon;
        if (type.includes('text') || type.includes('pdf') || type.includes('document')) return FileTextIcon;
        return FileIcon;
    };

    return (
        <div className={cn("space-y-1", className)}>
            {files.map(({ name, size, type, date, action }, i) => {
                const Icon = getIcon(type);
                return (
                    <div key={i} onClick={() => onFileClick?.(files[i])} className={cn("flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group", cns?.item)}>
                        <Icon className={cn("size-5 text-muted-foreground shrink-0", cns?.icon)} />
                        <div className="flex-1 min-w-0">
                            <p className={cn("text-sm font-medium truncate", cns?.name)}>{name}</p>
                            <div className="flex gap-2 text-xs text-muted-foreground">
                                {size && <span>{size}</span>}
                                {date && <span>{date}</span>}
                            </div>
                        </div>
                        {action && <div className={cn("opacity-0 group-hover:opacity-100 transition-opacity shrink-0", cns?.action)}>{action}</div>}
                    </div>
                );
            })}
        </div>
    );
};

interface FileListProps {
    files: { name: string; size?: string; type?: string; date?: string; action?: React.ReactNode }[];
    onFileClick?: (file: { name: string; size?: string; type?: string; date?: string }) => void;
    className?: string; classNames?: { item?: string; icon?: string; name?: string; action?: string };
}
