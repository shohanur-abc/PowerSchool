import { type Metadata } from 'next';
import { Award, GraduationCap, Heart, School, Star, TrendingUp, Users, Zap, } from 'lucide-react';
import { Hero, Featured, Grid, VideoTestimonials, ByRole, Stats, Logos, Awards, Submit, CTA, } from '@/features/(marketing)/testimonials';
import { ROUTES } from '@/lib/routes';

// TODO: Add structured data (JSON-LD) for testimonials / reviews page
// TODO: Fetch testimonials dynamically from CMS or database
// TODO: Add pagination or infinite scroll for testimonial grid
// TODO: Implement testimonial filtering by school type, role, and rating
// TODO: Track video testimonial play events via analytics
// TODO: Add schema.org Review aggregate markup for SEO

export const metadata: Metadata = {
    title: 'Testimonials — Hear from Schools That Trust EduSync',
    description:
        'Discover why 2,500+ schools trust EduSync for attendance tracking, fee management, student records, and parent communication. Read real stories from principals, teachers, and administrators.',
    keywords: [
        'school management testimonials',
        'edtech reviews',
        'school ERP feedback',
        'EduSync reviews',
        'school administration software reviews',
        'teacher testimonials',
        'principal reviews school software',
        'parent portal feedback',
        'attendance management reviews',
        'fee management testimonials',
    ],
    openGraph: {
        title: 'Testimonials — Hear from Schools That Trust EduSync',
        description:
            'Real stories from principals, teachers, administrators, and parents who transformed their schools with EduSync. See why we are rated 4.9/5 by 2,500+ institutions.',
        url: ROUTES.marketing.testimonials,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Testimonials — Schools Love EduSync | 4.9/5 Rating',
        description:
            'Read authentic reviews and success stories from educators and administrators using EduSync to streamline school operations.',
    },
};

export default function Page() {
    return (
        <>
            {/* TODO: Add breadcrumb navigation */}
            <Hero
                badge="Loved by Educators"
                title="Trusted by Schools"
                highlight="Worldwide"
                description="Join over 2,500 schools that have transformed their administration with EduSync. Hear directly from the principals, teachers, and parents who rely on us every day."
                rating={{ value: 4.9, max: 5 }}
                totalReviews="12,400+"
            />

            {/* TODO: Rotate featured testimonial periodically or fetch from CMS */}
            <Featured
                eyebrow="Featured Story"
                title="A Principal's Journey with EduSync"
                subtitle="How one school went from drowning in paperwork to running a fully digital campus in just 3 months."
                testimonial={{
                    image: '/placeholder.svg',
                    name: 'Dr. Ananya Sharma',
                    role: 'Principal',
                    school: 'Delhi Public School, Vasant Kunj',
                    location: 'New Delhi, India',
                    quote: 'Before EduSync, we spent 15+ hours each week on manual attendance registers, fee receipts, and report card generation. Now, every process is automated. Our teachers reclaimed their time, parents love the real-time updates, and I can monitor the entire school from my dashboard. The transition was seamless — EduSync\'s onboarding team trained our 120-member staff in just two days.',
                    rating: 5,
                    tags: ['Attendance Automation', 'Fee Management', 'Parent Communication', 'Report Cards'],
                }}
            />

            {/* TODO: Load testimonials from API with pagination support */}
            <Grid
                eyebrow="What Educators Say"
                title="Stories from Our Community"
                subtitle="Real feedback from administrators, teachers, and parents across different school types and sizes."
                testimonials={[
                    {
                        avatar: '/placeholder.svg',
                        name: 'Rajesh Patel',
                        role: 'Vice Principal',
                        school: 'Greenfield International School',
                        quote: 'EduSync cut our administrative workload by 60%. The automated attendance system alone saves us 3 hours daily. I wish we had adopted it sooner.',
                        rating: 5,
                    },
                    {
                        avatar: '/placeholder.svg',
                        name: 'Sarah Mitchell',
                        role: 'Head of Academics',
                        school: 'Riverside Academy',
                        quote: 'The exam management module is brilliant. We generate report cards for 800 students in minutes instead of days. Parents can view results instantly on the portal.',
                        rating: 5,
                    },
                    {
                        avatar: '/placeholder.svg',
                        name: 'Fatima Al-Rashid',
                        role: 'School Administrator',
                        school: 'Al Noor International School',
                        quote: 'Fee collection used to be our biggest headache. With EduSync\'s automated reminders and online payment gateway, our fee default rate dropped from 22% to 4%.',
                        rating: 5,
                    },
                    {
                        avatar: '/placeholder.svg',
                        name: 'Michael Chen',
                        role: 'IT Coordinator',
                        school: 'Pacific Heights Preparatory',
                        quote: 'As someone who manages the tech stack, I appreciate how easy EduSync integrates with our existing systems. The API documentation is excellent, and support response times are under 2 hours.',
                        rating: 4,
                    },
                    {
                        avatar: '/placeholder.svg',
                        name: 'Priya Nair',
                        role: 'Class Teacher, Grade 5',
                        school: 'Oakridge International',
                        quote: 'I used to dread the end of term when I had to manually calculate grades and fill report cards. EduSync does it all automatically. I can finally focus on what I love — teaching.',
                        rating: 5,
                    },
                    {
                        avatar: '/placeholder.svg',
                        name: 'James Okafor',
                        role: 'Bursar',
                        school: 'Covenant Academy',
                        quote: 'The financial reporting in EduSync is incredibly detailed. I can track every fee installment, generate audit-ready reports, and reconcile accounts in minutes. It transformed our finance department.',
                        rating: 5,
                    },
                    {
                        avatar: '/placeholder.svg',
                        name: 'Maria Gonzales',
                        role: 'Parent',
                        school: 'St. Xavier\'s Convent School',
                        quote: 'As a working parent, I love that I can check my daughter\'s attendance, exam scores, and fee status all from my phone. The push notifications for important announcements are a lifesaver.',
                        rating: 5,
                    },
                    {
                        avatar: '/placeholder.svg',
                        name: 'David Thompson',
                        role: 'Principal',
                        school: 'Maple Leaf Grammar School',
                        quote: 'We evaluated 8 school management systems before choosing EduSync. The depth of features, ease of use, and pricing made it a clear winner. Two years in, we have zero regrets.',
                        rating: 5,
                    },
                    {
                        avatar: '/placeholder.svg',
                        name: 'Sunita Deshmukh',
                        role: 'Hostel Warden',
                        school: 'Vidyamandir Residential School',
                        quote: 'Managing hostel operations — room allotments, mess schedules, visitor logs — was chaotic until EduSync. Now everything is tracked digitally, and parents get real-time updates about their children.',
                        rating: 4,
                    },
                ]}
            />

            {/* TODO: Host and stream video testimonials via CDN */}
            <VideoTestimonials
                eyebrow="Watch & Listen"
                title="See EduSync in Action"
                subtitle="Watch educators share their firsthand experiences of how EduSync transformed their school operations."
                videos={[
                    {
                        thumbnail: '/placeholder.svg',
                        title: 'How DPS Saved 200+ Hours Monthly',
                        name: 'Dr. Ananya Sharma',
                        role: 'Principal',
                        school: 'Delhi Public School',
                        duration: '4:32',
                    },
                    {
                        thumbnail: '/placeholder.svg',
                        title: 'From Paper Registers to Digital Attendance',
                        name: 'Rajesh Patel',
                        role: 'Vice Principal',
                        school: 'Greenfield International',
                        duration: '3:15',
                    },
                    {
                        thumbnail: '/placeholder.svg',
                        title: 'Reducing Fee Defaults with EduSync',
                        name: 'Fatima Al-Rashid',
                        role: 'Administrator',
                        school: 'Al Noor International',
                        duration: '5:08',
                    },
                    {
                        thumbnail: '/placeholder.svg',
                        title: 'A Parent\'s Perspective on the EduSync Portal',
                        name: 'Maria Gonzales',
                        role: 'Parent',
                        school: 'St. Xavier\'s Convent',
                        duration: '2:45',
                    },
                    {
                        thumbnail: '/placeholder.svg',
                        title: 'Streamlining Exams and Report Cards',
                        name: 'Sarah Mitchell',
                        role: 'Head of Academics',
                        school: 'Riverside Academy',
                        duration: '3:52',
                    },
                    {
                        thumbnail: '/placeholder.svg',
                        title: 'Scaling from 1 to 12 Campuses with EduSync',
                        name: 'David Thompson',
                        role: 'Director',
                        school: 'Maple Leaf Education Group',
                        duration: '6:10',
                    },
                ]}
            />

            {/* TODO: Dynamically load testimonials per role tab from API */}
            <ByRole
                eyebrow="By Role"
                title="Testimonials from Every Stakeholder"
                subtitle="Whether you are a principal, teacher, administrator, or parent — hear from people in your role who use EduSync every day."
                roles={[
                    {
                        label: 'Principals',
                        value: 'principals',
                        testimonials: [
                            {
                                avatar: '/placeholder.svg',
                                name: 'Dr. Ananya Sharma',
                                school: 'Delhi Public School, Vasant Kunj',
                                quote: 'EduSync gave me a bird\'s-eye view of my entire school. From attendance trends to fee collection rates, I make better decisions with real-time data at my fingertips.',
                                rating: 5,
                            },
                            {
                                avatar: '/placeholder.svg',
                                name: 'David Thompson',
                                school: 'Maple Leaf Grammar School',
                                quote: 'Managing 12 campuses used to require a team of coordinators just for data consolidation. EduSync unified everything into a single dashboard. It\'s a game changer.',
                                rating: 5,
                            },
                            {
                                avatar: '/placeholder.svg',
                                name: 'Grace Mwangi',
                                school: 'Nairobi International Academy',
                                quote: 'The compliance reporting feature saved us during our last accreditation review. All the data was organized, exportable, and audit-ready without any last-minute scrambling.',
                                rating: 5,
                            },
                        ],
                    },
                    {
                        label: 'Teachers',
                        value: 'teachers',
                        testimonials: [
                            {
                                avatar: '/placeholder.svg',
                                name: 'Priya Nair',
                                school: 'Oakridge International',
                                quote: 'Attendance, grading, and parent communication — everything that used to eat into my teaching hours is now automated. I reclaimed at least 5 hours every week.',
                                rating: 5,
                            },
                            {
                                avatar: '/placeholder.svg',
                                name: 'John Okello',
                                school: 'Hillcrest Preparatory School',
                                quote: 'The lesson planning module helps me organize my curriculum for the entire term. I can even share plans with substitute teachers instantly if I\'m absent.',
                                rating: 4,
                            },
                            {
                                avatar: '/placeholder.svg',
                                name: 'Lisa Park',
                                school: 'Seoul Foreign School',
                                quote: 'I love how I can take attendance on my tablet, and parents get notified within seconds if their child is absent. It builds so much trust between school and families.',
                                rating: 5,
                            },
                        ],
                    },
                    {
                        label: 'Administrators',
                        value: 'administrators',
                        testimonials: [
                            {
                                avatar: '/placeholder.svg',
                                name: 'Fatima Al-Rashid',
                                school: 'Al Noor International School',
                                quote: 'Our fee collection process went from chaotic manual entries to a fully automated system. We process 2,000+ fee transactions monthly without a single error.',
                                rating: 5,
                            },
                            {
                                avatar: '/placeholder.svg',
                                name: 'James Okafor',
                                school: 'Covenant Academy',
                                quote: 'Generating end-of-year financial statements used to take two full weeks. With EduSync, I produce the same reports in under an hour with complete accuracy.',
                                rating: 5,
                            },
                            {
                                avatar: '/placeholder.svg',
                                name: 'Elena Volkov',
                                school: 'Moscow British International School',
                                quote: 'Student records, transfer certificates, and alumni data — everything is searchable and backed up securely in the cloud. No more digging through filing cabinets.',
                                rating: 4,
                            },
                        ],
                    },
                    {
                        label: 'Parents',
                        value: 'parents',
                        testimonials: [
                            {
                                avatar: '/placeholder.svg',
                                name: 'Maria Gonzales',
                                school: 'St. Xavier\'s Convent School',
                                quote: 'The parent portal keeps me connected to my daughter\'s school life. I get real-time attendance alerts, can view homework assignments, and pay fees online — all from my phone.',
                                rating: 5,
                            },
                            {
                                avatar: '/placeholder.svg',
                                name: 'Ahmed Hassan',
                                school: 'Modern Academy, Cairo',
                                quote: 'As a busy parent, I rarely have time to visit school. EduSync\'s parent app lets me attend virtual PTMs, track my son\'s grades, and message teachers directly. It\'s brilliant.',
                                rating: 5,
                            },
                            {
                                avatar: '/placeholder.svg',
                                name: 'Jennifer Williams',
                                school: 'Westbridge Charter School',
                                quote: 'I used to miss important school notices all the time. Now I get push notifications for events, holidays, and even bus route changes. No more missed permission slips!',
                                rating: 4,
                            },
                        ],
                    },
                ]}
            />

            {/* TODO: Connect stats to live metrics from analytics dashboard */}
            <Stats
                eyebrow="By the Numbers"
                title="The Impact Schools Are Seeing"
                subtitle="Real metrics from real schools that have been using EduSync for 12+ months."
                stats={[
                    {
                        icon: School,
                        value: '2,500+',
                        label: 'Schools Onboarded',
                        description: 'K-12 institutions across 40+ countries trust EduSync for daily operations.',
                    },
                    {
                        icon: Star,
                        value: '4.9/5',
                        label: 'Average Rating',
                        description: 'Based on 12,400+ verified reviews from principals, teachers, and admins.',
                    },
                    {
                        icon: TrendingUp,
                        value: '60%',
                        label: 'Less Admin Work',
                        description: 'Schools report a 60% reduction in administrative workload within the first 6 months.',
                    },
                    {
                        icon: Heart,
                        value: '98%',
                        label: 'Customer Retention',
                        description: 'Nearly every school that starts with EduSync continues year after year.',
                    },
                ]}
            />

            {/* TODO: Fetch partner logos from CMS with links to their case studies */}
            <Logos
                eyebrow="Trusted Partners"
                title="Schools & Groups That Chose EduSync"
                subtitle="From single-campus independent schools to multi-branch education groups — institutions of all sizes rely on EduSync."
                logos={[
                    { src: '/placeholder.svg', alt: 'Delhi Public School Society' },
                    { src: '/placeholder.svg', alt: 'Greenfield Education Group' },
                    { src: '/placeholder.svg', alt: 'Al Noor International Schools' },
                    { src: '/placeholder.svg', alt: 'Riverside Academy Network' },
                    { src: '/placeholder.svg', alt: 'Maple Leaf Education Group' },
                    { src: '/placeholder.svg', alt: 'Oakridge International Schools' },
                    { src: '/placeholder.svg', alt: 'Covenant Academy Trust' },
                    { src: '/placeholder.svg', alt: 'Pacific Heights Preparatory' },
                    { src: '/placeholder.svg', alt: 'Seoul Foreign Schools Association' },
                    { src: '/placeholder.svg', alt: 'Nairobi International Academy' },
                    { src: '/placeholder.svg', alt: 'Moscow British International School' },
                    { src: '/placeholder.svg', alt: 'Westbridge Charter Schools' },
                ]}
            />

            {/* TODO: Integrate awards data from CMS and keep badges up to date */}
            <Awards
                eyebrow="Recognition"
                title="Industry Awards & Accolades"
                subtitle="EduSync has been recognized by leading education technology organizations for innovation, usability, and impact."
                awards={[
                    {
                        icon: Award,
                        title: 'Best School Management Platform',
                        organization: 'EdTech Breakthrough Awards',
                        year: '2025',
                        description: 'Recognized for delivering the most comprehensive and user-friendly school management solution in the K-12 sector.',
                    },
                    {
                        icon: GraduationCap,
                        title: 'Top Innovation in Education',
                        organization: 'Global EdTech Summit',
                        year: '2025',
                        description: 'Awarded for pioneering AI-powered attendance analytics and predictive student performance features.',
                    },
                    {
                        icon: Users,
                        title: 'Highest Customer Satisfaction',
                        organization: 'G2 Education Software',
                        year: '2024',
                        description: 'Rated #1 in customer satisfaction among 50+ school management platforms with a 98% approval rating.',
                    },
                    {
                        icon: Zap,
                        title: 'Fastest Growing EdTech Startup',
                        organization: 'TechCrunch Disrupt Asia',
                        year: '2024',
                        description: 'Recognized for achieving 300% year-over-year growth and expanding to 40+ countries in under 3 years.',
                    },
                ]}
            />

            {/* TODO: Connect submission form to API endpoint and send confirmation emails */}
            <Submit
                title="Share Your EduSync Story"
                description="We love hearing how EduSync is making a difference in your school. Submit your testimonial and inspire other educators to transform their administration."
                benefits={[
                    'Get featured on our website',
                    'Receive a free EduSync swag kit',
                    'Join our Educator Spotlight series',
                    'Early access to new features',
                ]}
                cta={{
                    text: 'Submit Your Testimonial',
                    href: ROUTES.marketing.contact,
                }}
            />

            {/* TODO: A/B test CTA copy and track conversion rates */}
            <CTA
                title="Ready to Join 2,500+ Schools?"
                description="Start your free 30-day trial today. No credit card required. See why schools rate us 4.9 out of 5 stars."
                primaryCta={{
                    text: 'Start Free Trial',
                    href: ROUTES.auth.signup,
                }}
                secondaryCta={{
                    text: 'Book a Live Demo',
                    href: ROUTES.marketing.demo,
                }}
            />
        </>
    );
}
