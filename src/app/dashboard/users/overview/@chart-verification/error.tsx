"use client"

import { ErrorAlert } from "@/components/molecules/error-alert"

export default function ChartVerificationError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return <ErrorAlert title="Error" message="Failed to load verification chart." onRetry={reset} />
}
