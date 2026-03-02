"use client";
import { Container } from '@/components/molecules/container';

export default function ContainerPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (lg)</h2>
                <Container>
                    <div className="h-20 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">Default container — max-w-screen-lg</div>
                </Container>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Small</h2>
                <Container size="sm">
                    <div className="h-20 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">Small — max-w-screen-sm</div>
                </Container>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Medium</h2>
                <Container size="md">
                    <div className="h-20 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">Medium — max-w-screen-md</div>
                </Container>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Large</h2>
                <Container size="lg">
                    <div className="h-20 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">Large — max-w-screen-xl</div>
                </Container>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">XL</h2>
                <Container size="xl">
                    <div className="h-20 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">XL — max-w-screen-2xl</div>
                </Container>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Full Width, No Padding</h2>
                <Container size="full" padding="none">
                    <div className="h-20 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">Full width, no padding</div>
                </Container>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Large Padding</h2>
                <Container padding="lg">
                    <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center text-sm text-muted-foreground">Large padding</div>
                </Container>
            </div>
        </div>
    );
}
