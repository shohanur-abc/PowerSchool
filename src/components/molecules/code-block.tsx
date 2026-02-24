import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const CodeBlock = ({ code, language, title, showLineNumbers, className, classNames: cns }: CodeBlockProps) => {
    const lines = code.split('\n');
    return (
        <div className={cn(codeBlockVariant({}), "@container", className)}>
            {(title || language) && (
                <div className={cn("flex items-center justify-between px-4 py-2 border-b bg-muted/50", cns?.header)}>
                    <span className={cn("text-xs font-medium text-muted-foreground", cns?.title)}>{title || language}</span>
                </div>
            )}
            <pre className={cn("p-4 overflow-x-auto text-sm", cns?.pre)}>
                <code className={cn("font-mono", cns?.code)}>
                    {lines.map((line, i) => (
                        <div key={i} className="flex">
                            {showLineNumbers && <span className={cn("select-none text-muted-foreground/50 w-8 text-right pr-4 shrink-0", cns?.lineNumber)}>{i + 1}</span>}
                            <span>{line}</span>
                        </div>
                    ))}
                </code>
            </pre>
        </div>
    );
};

const codeBlockVariant = cva("rounded-lg border bg-muted/30 overflow-hidden font-mono");

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
    showLineNumbers?: boolean;
    className?: string;
    classNames?: { header?: string; title?: string; pre?: string; code?: string; lineNumber?: string };
}
