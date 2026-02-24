"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { UploadCloudIcon, FileIcon, XIcon } from 'lucide-react';
import { useRef, useState, useCallback } from 'react';

export const FileUpload = ({ accept, multiple, maxSize, onFilesChange, variant = 'default', className, classNames: cns }: FileUploadProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [dragOver, setDragOver] = useState(false);

    const handleFiles = useCallback((newFiles: FileList | null) => {
        if (!newFiles) return;
        const arr = Array.from(newFiles).filter(f => !maxSize || f.size <= maxSize);
        const updated = multiple ? [...files, ...arr] : arr.slice(0, 1);
        setFiles(updated);
        onFilesChange?.(updated);
    }, [files, maxSize, multiple, onFilesChange]);

    const removeFile = (index: number) => {
        const updated = files.filter((_, i) => i !== index);
        setFiles(updated);
        onFilesChange?.(updated);
    };

    return (
        <div className={cn("@container", className)}>
            <div
                className={cn(uploadVariant({ variant, dragOver }), cns?.dropzone)}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                onClick={() => inputRef.current?.click()}
            >
                <UploadCloudIcon className={cn("size-10 text-muted-foreground mb-2", cns?.icon)} />
                <p className={cn("text-sm font-medium", cns?.title)}>Drop files here or click to upload</p>
                <p className={cn("text-xs text-muted-foreground mt-1", cns?.hint)}>
                    {accept ? `Accepted: ${accept}` : 'All file types accepted'}
                    {maxSize && ` • Max ${(maxSize / 1024 / 1024).toFixed(0)}MB`}
                </p>
                <input ref={inputRef} type="file" accept={accept} multiple={multiple} className="hidden" onChange={(e) => handleFiles(e.target.files)} />
            </div>
            {files.length > 0 && (
                <div className={cn("mt-3 space-y-2", cns?.fileList)}>
                    {files.map((file, i) => (
                        <div key={i} className={cn("flex items-center gap-2 p-2 rounded-lg border text-sm", cns?.fileItem)}>
                            <FileIcon className="size-4 text-muted-foreground shrink-0" />
                            <span className="flex-1 truncate">{file.name}</span>
                            <span className="text-xs text-muted-foreground shrink-0">{(file.size / 1024).toFixed(1)}KB</span>
                            <button onClick={(e) => { e.stopPropagation(); removeFile(i); }} className="text-muted-foreground hover:text-foreground"><XIcon className="size-3.5" /></button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const uploadVariant = cva("flex flex-col items-center justify-center p-8 rounded-lg border-2 border-dashed cursor-pointer transition-colors", {
    variants: {
        variant: {
            default: "hover:border-primary/50 hover:bg-muted/50",
            minimal: "p-4 hover:bg-muted/50",
        },
        dragOver: {
            true: "border-primary bg-primary/5",
            false: "",
        },
    },
});

interface FileUploadProps {
    accept?: string;
    multiple?: boolean;
    maxSize?: number;
    onFilesChange?: (files: File[]) => void;
    variant?: 'default' | 'minimal';
    className?: string;
    classNames?: { dropzone?: string; icon?: string; title?: string; hint?: string; fileList?: string; fileItem?: string };
}
