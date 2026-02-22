---
applyTo: 'src/app/**/page.tsx'
---

* নতুন করে component বানানো যাবে না . Declaration or definition or অন্য কিছু করা যাবে না।
* কোনো logical কাজ কর্ম করা যাবে না।
* শুধু বাইরে থেকে import করে ব্যবহার করতে হবে। 
* implement এর জায়গা এটা। 
* export comprehensive metadata or generateMetadata


# Page Component Instructions

**TL;DR:** Pages are composition layers that import and arrange pre-built components. No logic, no definitions, no state.

## Core Rules

- Import components from `@/components` or `@/features` ✓
- Export metadata or generateMetadata ✓
- Pass props clearly to each component ✓

- No business logic or state hooks ✗
- No conditional rendering logic ✗
- No data fetching ✗

## Real Example

```tsx
import { AboutHero, Mission, Values, Timeline, Team } from '@/features/(marketing)/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about our mission...',
};

export default function Page() {
return (
<>
    <AboutHero
        badge="About EduManager"
        title={{
            text: 'Empowering Schools to',
            highlight: 'Shape the Future',
        }}
        description="We believe every school deserves world-class management tools. Since 2016, EduManager has been on a mission to simplify school operations so educators can focus on what matters most — teaching and inspiring the next generation."
        cta={{ text: 'Join Our Mission', href: '/contact' }}
    />
    <Mission {...missionProps} />
    <Values {...valuesProps} />
    <Timeline {...timelineProps} />
    <Team {...teamProps} />
</>
);
}
```

## Props Organization

```tsx
{/* Short props on one line */}
<Hero badge="New" />

{/* Multi-line: one component per line, aligned */}
<Mission
    eyebrow="Our Mission"
    title="Making it Effortless"
    description="..."
    image={{ src: '/mission.svg', alt: '...' }}
/>

{/* Use spread for large objects */}
<Values {...valuesProps} />
```

## Metadata

```tsx
// Static pages
export const metadata: Metadata = {
    title: 'Page Title',
    description: 'SEO description',
    openGraph: { title: '...', description: '...', images: [...] },
};

// Dynamic pages with params
export async function generateMetadata({ params }: { params: { id: string } }) {
    const data = await fetchData(params.id);
    return { title: data.name, description: data.description };
}

// Query parameters (searchParams)
export default function Page({ searchParams }: { searchParams: { q: string; filter?: string } }) {
  return <Results query={searchParams.q} filter={searchParams.filter} />;
}
```

## Common Mistakes

- ❌ Inline components → ✅ Import from features
- ❌ useState/useEffect → ✅ Use server components
- ❌ Conditional rendering → ✅ Let components handle it
- ❌ Business logic → ✅ Move to utilities / server actions

## Checklist

- ✓ Only imports at top
- ✓ Metadata exported
- ✓ Single default function
- ✓ No hooks or logic
- ✓ Components from @/components or @/features
- ✓ Props clearly organized
- ✓ File length 40-50 lines max

## Checklist for Page Components

Before submitting a page.tsx file, verify:

- ✓ Only imports at the top (components, utilities, types)
- ✓ Metadata or generateMetadata exported with proper typing
- ✓ Single default export function with proper parameters
- ✓ No useState, useEffect, or custom hooks
- ✓ No inline components, types, or business logic
- ✓ No conditional rendering logic beyond component composition
- ✓ Components imported from @/components or @/features
- ✓ Props passed clearly and organized (one per line if many)
- ✓ File length 30-50 lines (excluding metadata)
- ✓ TODO comments used for known future work (non-blocking)
- ✓ Uses fragments `<>` to avoid unnecessary DOM wrappers
- ✓ Each component can be tested independently