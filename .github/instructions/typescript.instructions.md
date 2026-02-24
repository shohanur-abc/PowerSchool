---
applyTo: 'src/**/*.tsx'
---


## 1. Extract Complex Props into Dedicated Interfaces

When component props become unwieldy, create a separate interface with a descriptive name for better maintainability.

```tsx
//bad
export default function Story({ eyebrow, title, subtitle, paragraphs, image }: {
    eyebrow: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    image: { src: string; alt: string };
}) //...

//good
export default function Story({ eyebrow, title, subtitle, paragraphs, image }: StoryProps) {}

interface StoryProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    image: { src: string; alt: string };
}

```

## 2. Keep Simple Props Inline for Clarity

For props with only a few simple properties, define the type directly in the parameter list to avoid unnecessary abstraction.

```tsx
//bad
const ImageBlock = ({ src, alt }: ImageBlockProps) => //...
interface ImageBlockProps {
    src: string;
    alt: string;
}

//good
const ImageBlock = ({ src, alt }: { src: string; alt: string }) => //...

```

## 3. Reuse Related Component Interfaces with `Pick` and Indexed Access

When child components need props from a parent's interface, always derive them from the parent interface using `Pick` or indexed access instead of creating duplicate type definitions.

```tsx
//bad
export default function Story({ eyebrow, title, subtitle, paragraphs, image }: StoryProps) {}
const ImageBlock = ({ src, alt }: { src: string; alt: string }) => ()
const ContentBlock = ({ eyebrow, title, subtitle, paragraphs }: ContentBlockProps) => ()

interface StoryProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    image: { src: string; alt: string };
}

interface ContentBlockProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
}

//good
export default function Story({ eyebrow, title, subtitle, paragraphs, image }: StoryProps) {}
const ImageBlock = ({ src, alt }: StoryProps['image']) => ()
const ContentBlock = ({ eyebrow, title, subtitle, paragraphs }: Pick<StoryProps, 'eyebrow' | 'title' | 'subtitle' | 'paragraphs'>) => ()

interface StoryProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    image: { src: string; alt: string };
}
```

## 4. Use `Pick` and Indexed Access Types to Avoid Redundant Interface Definitions

Extract only the needed properties from existing interfaces instead of redefining types or hard-coding keys.
```tsx
//bad
const ContentBlock = ({ eyebrow, title, subtitle, paragraphs }: {eyebrow: string; title: string; subtitle: string; paragraphs: string[]}) => ()
//bad
const ContentBlock = ({ eyebrow, title, subtitle, paragraphs }: {eyebrow: StoryProps['eyebrow']; title: StoryProps['title']; subtitle: StoryProps['subtitle']; paragraphs: StoryProps['paragraphs']}) => ()

//good
const ContentBlock = ({ eyebrow, title, subtitle, paragraphs }: Pick<StoryProps, 'eyebrow' | 'title' | 'subtitle' | 'paragraphs'>) => ()

```


