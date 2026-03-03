import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function InfoLoading() {
    return (
        <Card data-loading={true}>
            <CardHeader>
                <Skeleton className="h-6 w-64" />
                <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-4 w-48" />
            </CardContent>
        </Card>
    )
}
