'use client';

import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { SITE_NAME, SITE_URL, PHONE, EMAIL } from '@/lib/constants';

export default function TermsPage() {
  return (
    <div>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Terms of service
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
                  1. General
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  {SITE_NAME} is a vehicle sourcing and sales company based in Walvis Bay, Namibia. These terms govern your use of our website and services.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  2. Vehicle information
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Vehicle listings on our website show the information we have at the time of listing. Specifications, prices, and availability may change. Monthly payment estimates are indicative calculations and are not promises or offers. Your actual monthly payment depends on approved finance terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  3. Import process
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Timelines and costs for vehicle imports are estimates. Actual shipping time, port clearance duration, and registration timelines can vary. Import duties are set by Namibian government regulation and are subject to change. We provide cost breakdowns before you commit, but final costs may differ from estimates.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  4. Finance guidance
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  {SITE_NAME} does not lend money, approve finance, or guarantee interest rates or monthly payments. We provide guidance on how vehicle finance works in Namibia and assist with applications to banks and finance houses. Final approval is always the lender's decision. We are not responsible for finance decisions made by any lender.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  5. Vehicle condition
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Vehicles are sold as-is. We share all available information from the source (auction sheets, photos, condition reports where available) but do not independently verify condition beyond what the source provides. We recommend you inspect any vehicle before purchase.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  6. No warranties
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  {SITE_NAME} does not offer warranties on vehicles sold through our service. Vehicle purchases are final. We recommend arranging your own warranty if desired.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  7. Enquiries
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Submitting an enquiry form does not constitute a binding agreement. It is a request for information or discussion. No commitment is made until both parties agree to terms in writing.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  8. Website content
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  All content on this website is provided for informational purposes. We make no guarantees about the accuracy, completeness, or timeliness of information on this site. Prices and specifications are subject to change without notice.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  9. Limitation of liability
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  {SITE_NAME} is not liable for any losses arising from the use of information on this website, including but not limited to decisions made based on estimated monthly payments, timeline estimates, or vehicle condition descriptions.
                </p>
              </div>

              <div>
                <h2 className="font-serif-editorial tracking-editorial text-lg mb-4" style={{ color: '#F7F7F4' }}>
                  10. Contact
                </h2>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  For questions about these terms, contact {SITE_NAME} at {EMAIL} or {PHONE}.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
