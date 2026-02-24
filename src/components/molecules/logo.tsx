import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Logo = ({ src, alt, text, icon: Icon, size = 'default', href, className, classNames: cns }: LogoProps) => {
    const sizes = { sm: 24, default: 32, lg: 40 };
    const content = (
        <div className={cn("flex items-center gap-2", className)}>
            {src ? (
                <Image src={src} alt={alt || text || 'Logo'} width={sizes[size]} height={sizes[size]} className={cns?.image} />
            ) : Icon ? (
                <Icon className={cn(size === 'sm' ? "size-6" : size === 'lg' ? "size-10" : "size-8", "text-primary", cns?.icon)} />
            ) : null}
            {text && <span className={cn(size === 'sm' ? "text-base" : size === 'lg' ? "text-xl" : "text-lg", "font-bold", cns?.text)}>{text}</span>}
        </div>
    );

    if (href) return <a href={href} className="no-underline">{content}</a>;
    return content;
};


// ============= TYPES =============
interface LogoProps {
    src?: string;
    alt?: string;
    text?: string;
    icon?: React.ElementType;
    size?: 'sm' | 'default' | 'lg';
    href?: string;
    className?: string;
    classNames?: { image?: string; icon?: string; text?: string };
}
