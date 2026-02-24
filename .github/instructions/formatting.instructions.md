---
applyTo: 'src/**/*.tsx'
---
must follow the sequence and structure below.
Component File Structure (Top → Bottom)

## 1. Imports formatting: Single-line grouped imports preferred
```typescript
// wrong
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// right
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
```

## 2. Prop declarations: Keep props inline with function signature
```tsx
// wrong
export default function ApiUsage({
    title,
    description,
    data,
    rateLimit,
}: IApiUsage) {
    return (<></>);
}

// right
export default function ApiUsage({ title, description, data, rateLimit }: IApiUsage){
    return (<></>);
}
```

## 3. Prop Implementation: Multiline for readability if multiple props
```tsx
// wrong
<ApiUsage title="API Usage — Last 15 Days" description="Total REST API requests from the school..." data={apiUsageData} />

// right
<ApiUsage
    title="API Usage — Last 15 Days"
    description="Total REST API requests from the school ..."
    data={apiUsageData}
/>
```

## 4. cva formatting: Keep cva declarations concise and inline
```tsx
// wrong
const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap ...",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-white hover:bg-destructive/90 ...",
				outline:
					"border bg-background shadow-xs hover:bg-accent ...",
			},
		},
        // ... other cva options
	}
)
// right
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap ...",{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90 ...",
				destructive: "bg-destructive text-white hover:bg-destructive/90 ...",
				outline: "border bg-background shadow-xs hover:bg-accent ...",
			},
		},
        // ... other cva options
});
```

## 5. State declarations:
```tsx
// wrong
    const [siteName, setSiteName] = useState(
        defaultValues?.siteName ?? ''
    );

// right
    const [siteName, setSiteName] = useState(defaultValues?.siteName ?? '');
```

