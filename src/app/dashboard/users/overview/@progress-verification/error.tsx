"use client"

import { ErrorAlert } from "@/components/molecules/error-alert"

export default function ProgressVerificationError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return <ErrorAlert title="Error" message="Failed to load verification progress." onRetry={reset} />
}
