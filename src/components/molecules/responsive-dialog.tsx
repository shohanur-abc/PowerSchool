"use client";
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

export const ResponsiveDialog = ({ trigger, title, description, children, className, classNames: cns }: ResponsiveDialogProps) => {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Drawer>
                <DrawerTrigger asChild>{trigger}</DrawerTrigger>
                <DrawerContent className={cn(className)}>
                    <DrawerHeader className={cns?.header}>
                        <DrawerTitle className={cns?.title}>{title}</DrawerTitle>
                        {description && <DrawerDescription className={cns?.description}>{description}</DrawerDescription>}
                    </DrawerHeader>
                    <div className={cn("p-4", cns?.content)}>{children}</div>
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className={cn(className)}>
                <DialogHeader className={cns?.header}>
                    <DialogTitle className={cns?.title}>{title}</DialogTitle>
                    {description && <DialogDescription className={cns?.description}>{description}</DialogDescription>}
                </DialogHeader>
                <div className={cns?.content}>{children}</div>
            </DialogContent>
        </Dialog>
    );
};

interface ResponsiveDialogProps {
    trigger: React.ReactNode; title: string; description?: string; children: React.ReactNode;
    className?: string; classNames?: { header?: string; title?: string; description?: string; content?: string };
}
