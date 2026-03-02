"use client";
import { StatusPage } from '@/components/molecules/status-page';

export default function StatusPagePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Operational</h2>
                <StatusPage
                    services={[
                        { name: 'Web Application', status: 'operational', uptime: 99.98 },
                        { name: 'API Gateway', status: 'operational', uptime: 99.95 },
                        { name: 'Database', status: 'operational', uptime: 99.99 },
                        { name: 'File Storage', status: 'operational', uptime: 100 },
                        { name: 'Email Service', status: 'operational', uptime: 99.90 },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Mixed Status</h2>
                <StatusPage
                    services={[
                        { name: 'Web Application', status: 'operational', description: 'All systems normal', uptime: 99.9 },
                        { name: 'API Gateway', status: 'degraded', description: 'Elevated response times', uptime: 98.5 },
                        { name: 'Database', status: 'operational', uptime: 99.99 },
                        { name: 'Payment Processing', status: 'partial', description: 'Some transactions may be affected', uptime: 95 },
                        { name: 'CDN', status: 'maintenance', description: 'Scheduled maintenance until 3:00 AM', uptime: 99.5 },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Major Outage</h2>
                <StatusPage
                    services={[
                        { name: 'Core Services', status: 'major-outage', description: 'We are investigating the issue' },
                        { name: 'API', status: 'major-outage', description: 'Dependent on core services' },
                        { name: 'Dashboard', status: 'operational', uptime: 100 },
                    ]}
                />
            </div>
        </div>
    );
}
