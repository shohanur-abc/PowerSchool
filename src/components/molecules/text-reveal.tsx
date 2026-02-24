"use client";
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';

export const TextReveal = ({ text, className, classNames: cns }: TextRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const words = text.split(' ');

    return (
        <div ref={ref} className={cn("@container", className)}>
            <p className={cns?.text}>
                {words.map((word, i) => (
                    <span key={i} className={cn("inline-block transition-all duration-500", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2", cns?.word)} style={{ transitionDelay: `${i * 50}ms` }}>
                        {word}&nbsp;
                    </span>
                ))}
            </p>
        </div>
    );
};

interface TextRevealProps { text: string; className?: string; classNames?: { text?: string; word?: string } }
