import { DollarSign, TrendingUp, AlertCircle, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ROUTES from '@/lib/routes';

// ============= MAIN COMPONENT =============
export default function FeesOverview({ stats, recentTransactions, quickLinks }: IFeesOverview) {
    return (
        <div className="space-y-6">
            <Header />
            <StatsGrid stats={stats} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RecentTransactions transactions={recentTransactions} />
                </div>
                <QuickLinks links={quickLinks} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Fees</h1>
        <p className="text-muted-foreground mt-1">Manage fee collection, tracking and financial records</p>
    </div>
);

const StatsGrid = ({ stats }: { stats: IFeesOverview['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <FeeStatIcon icon={stat.icon} />
                    </div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    {stat.subtitle && <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>}
                </CardContent>
            </Card>
        ))}
    </div>
);

const FeeStatIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        collected: <DollarSign className="size-5 text-green-500" />,
        pending: <AlertCircle className="size-5 text-yellow-500" />,
        month: <TrendingUp className="size-5 text-blue-500" />,
        overdue: <Calendar className="size-5 text-red-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const RecentTransactions = ({ transactions }: { transactions: IFeesOverview['recentTransactions'] }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Recent Transactions</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1 text-xs" asChild>
                <Link href={ROUTES.dashboard.fees.tracking}>
                    View all <ArrowRight className="size-3" />
                </Link>
            </Button>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Fee Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((tx, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div>
                                    <p className="font-medium">{tx.studentName}</p>
                                    <p className="text-xs text-muted-foreground">{tx.class}</p>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{tx.feeType}</TableCell>
                            <TableCell className="font-semibold text-green-600">{tx.amount}</TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="text-xs">{tx.method}</Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">{tx.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const QuickLinks = ({ links }: { links: IFeesOverview['quickLinks'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {links.map((link, i) => (
                <Button key={i} variant="outline" className="w-full justify-between" asChild>
                    <Link href={link.href}>
                        <span>{link.label}</span>
                        <ArrowRight className="size-4" />
                    </Link>
                </Button>
            ))}
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IFeesOverview {
    stats: {
        label: string;
        value: string;
        icon: string;
        subtitle?: string;
    }[];
    recentTransactions: {
        studentName: string;
        class: string;
        feeType: string;
        amount: string;
        method: string;
        date: string;
    }[];
    quickLinks: {
        label: string;
        href: string;
    }[];
}
