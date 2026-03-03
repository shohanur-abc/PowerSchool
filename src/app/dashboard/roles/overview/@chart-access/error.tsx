"use client"

import { ErrorAlert } from "@/components/molecules/error-alert"

export default function ChartAccessError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return <ErrorAlert title="Error" message="Failed to load access type chart." onRetry={reset} />
}
