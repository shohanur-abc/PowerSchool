"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangleIcon, RefreshCwIcon } from 'lucide-react';
import { Component, type ReactNode, type ErrorInfo } from 'react';

export class ErrorBoundaryCard extends Component<ErrorBoundaryCardProps, { hasError: boolean; error?: Error }> {
    constructor(props: ErrorBoundaryCardProps) { super(props); this.state = { hasError: false }; }
    static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
    componentDidCatch(error: Error, info: ErrorInfo) { this.props.onError?.(error, info); }

    render() {
        if (this.state.hasError) {
            return (
                <Card className={cn("@container", this.props.className)}>
                    <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                        <AlertTriangleIcon className="size-10 text-destructive mb-3" />
                        <h3 className="font-semibold">{this.props.title || 'Something went wrong'}</h3>
                        <p className="text-sm text-muted-foreground mt-1 max-w-sm">{this.state.error?.message || 'An unexpected error occurred'}</p>
                        <Button variant="outline" size="sm" onClick={() => this.setState({ hasError: false })} className="mt-4">
                            <RefreshCwIcon className="size-3.5 mr-1.5" /> Try again
                        </Button>
                    </CardContent>
                </Card>
            );
        }
        return this.props.children;
    }
}

interface ErrorBoundaryCardProps {
    children: ReactNode; title?: string; onError?: (error: Error, info: ErrorInfo) => void;
    className?: string;
}
