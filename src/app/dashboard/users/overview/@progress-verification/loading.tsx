import { UserVerificationProgress } from "@/features/dashboard/users/overview/@progress-verification"

export default function ProgressVerificationLoading() {
    return <UserVerificationProgress verified={333} unverified={333} loading={true} />
}
