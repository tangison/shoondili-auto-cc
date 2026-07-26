'use client';

import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { SITE_NAME, SITE_URL, PHONE, EMAIL } from '@/lib/constants';

export default function PrivacyPage() {
  return (
    <div>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Privacy policy
            </h1>
            <p className="text-sm font-mono mb-8" style={{ color: '#9B9B96' }}>
              Last updated: January 2025
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  1. Information we collect
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  When you submit an enquiry form on our website, we collect your name, email address, phone number (if provided), and message content. If the enquiry relates to a specific vehicle, we also record which vehicle you enquired about.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  2. How we use your information
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  We use your enquiry information to respond to your enquiry about a vehicle, import process, or finance guidance. We do not use your information for marketing, advertising, or any purpose beyond responding to your enquiry.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  3. Information sharing
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  We do not sell, share, or distribute your personal information to third parties. Your enquiry data is stored locally and used only by {SITE_NAME} to respond to your enquiry.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  4. Data storage
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Enquiry data is stored in our local database. We do not use third-party cloud services for data storage. Your data remains on our systems.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  5. Website analytics
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  We do not currently use third-party analytics services. If we add analytics in the future, we will update this policy.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  6. Cookies
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Our website does not use tracking cookies. We may use essential cookies for website functionality, such as remembering form state.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  7. Your rights
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  You can request to view, correct, or delete your enquiry data at any time by contacting us at {EMAIL} or {PHONE}.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  8. Contact
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  For any privacy-related questions, contact {SITE_NAME} at {EMAIL} or {PHONE}.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
