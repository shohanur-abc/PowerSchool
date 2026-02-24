import { Section } from '@/components/molecules/section';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
    return (
        <div className="space-y-20 py-12">
            {/* Showcase 1: Default Center Alignment */}
            <Section
                eyebrow="Foundation"
                title="Default Section"
                subtitle="Center-aligned with standard spacing and styling"
                cols={3}
            >
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardContent>
                            <div className="h-32 bg-muted rounded flex items-center justify-center">
                                Card {i}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Section>

            {/* Showcase 2: Left Alignment */}
            <Section
                eyebrow="Layout"
                title="Left Aligned Section"
                subtitle="Headers aligned to the left with content"
                align="left"
                cols={2}
            >
                {[1, 2, 3, 4].map((i) => (
                    <Card key={i}>
                        <CardContent>
                            <div className="h-32 bg-muted rounded flex items-center justify-center">
                                Card {i}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Section>

            {/* Showcase 3: Right Alignment */}
            <Section
                eyebrow="Alignment"
                title="Right Aligned Section"
                subtitle="Headers aligned to the right"
                align="right"
                cols={4}
            >
                {[1, 2, 3, 4].map((i) => (
                    <Card key={i}>
                        <CardContent>
                            <div className="h-24 bg-muted rounded flex items-center justify-center text-sm">
                                Item {i}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Section>

            {/* Showcase 4: Two Column Grid */}
            <Section
                eyebrow="Grid"
                title="Two Column Layout"
                subtitle="Perfect for larger content blocks"
                cols={2}
            >
                {[1, 2].map((i) => (
                    <Card key={i}>
                        <CardContent>
                            <div className="h-48 bg-muted rounded flex items-center justify-center">
                                Full Width Card {i}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Section>

            {/* Showcase 5: Single Column */}
            <Section
                eyebrow="Responsive"
                title="Single Column With Wide Content"
                subtitle="Responsive design that adapts to container size"
                cols={2}
            >
                <Card>
                    <CardContent>
                        <div className="h-56 bg-muted rounded flex items-center justify-center">
                            Full Width Feature Card
                        </div>
                    </CardContent>
                </Card>
            </Section>

            {/* Showcase 6: Custom Styling with Theme */}
            <Section
                eyebrow="Customization"
                title="Custom Styled Section"
                subtitle="With custom className and container classes"
                cols={3}
                className="gap-6"
                classNames={{
                    outerContainer: "border-t",
                    innerContainer: "py-16",
                    headingContainer: "mb-16",
                }}
            >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="hover:shadow-lg transition-shadow">
                        <CardContent>
                            <div className="h-40 bg-accent rounded flex items-center justify-center font-semibold text-accent-foreground">
                                Item {i}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Section>

            {/* Showcase 7: Minimal Header */}
            <Section
                title="Minimal Section"
                cols={4}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Card key={i}>
                        <CardContent>
                            <div className="h-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                                {i}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Section>

            {/* Showcase 8: Full Details */}
            <Section
                eyebrow="Complete Example"
                title="Full Featured Section"
                subtitle="All props demonstrated with complete styling and content"
                align="center"
                cols={3}
                classNames={{
                    outerContainer: "border-t",
                    headingContainer: "mb-8",
                }}
            >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 space-y-3">
                            <div className="h-32 bg-secondary rounded" />
                            <p className="text-sm font-medium text-foreground">Card Title {i}</p>
                            <p className="text-xs text-muted-foreground">Description for card item number {i}</p>
                        </CardContent>
                    </Card>
                ))}
            </Section>
        </div>
    );
}
