import { Section } from "@/components/molecules/section";
import { AccordionList } from "../../../components/molecules/accordion";

export default function AccordionListPage() {
    return (
        <Section title=''>
            <AccordionList items={[
                { title: 'How long does it take to set up EduManager?', content: 'Most schools are up and running within 1-2 weeks. Our onboarding team handles data migration, configuration, and staff training to ensure a smooth launch.' },
                { title: 'Can I migrate data from my current system?', content: 'Yes! We support data imports from all major school management systems including PowerSchool, Infinite Campus, and spreadsheets. Our team handles the entire migration process.' },
                { title: 'Is EduPortal FERPA compliant?', content: 'Absolutely. EduPortal is fully FERPA compliant with end-to-end encryption, SOC2 certification, and regular third-party security audits to protect student data.' },
                { title: 'Do you offer a free trial?', content: 'Yes, we offer a 30-day free trial with full access to all features. No credit card required. Our team will help you get set up and explore the platform.' },
                { title: 'What kind of support do you provide?', content: 'We provide 24/7 support via email, live chat, and phone. Professional and Enterprise plans include a dedicated customer success manager.' },
            ]}

            />
        </Section>
    )
}