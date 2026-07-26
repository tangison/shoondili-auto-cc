export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    category: 'General',
    question: 'What does Shoondili Auto CC do?',
    answer: 'We source and sell vehicles in Namibia. This includes local inventory and Japanese import sourcing. We are based in Walvis Bay and work directly with customers to find the right vehicle.',
  },
  {
    category: 'General',
    question: 'Where is Shoondili Auto CC located?',
    answer: 'We are based in Walvis Bay, Namibia. We operate as a lean startup without a large showroom. We meet customers by arrangement and deliver vehicles directly.',
  },
  {
    category: 'General',
    question: 'How do I contact Shoondili?',
    answer: 'Call us on 081 248 6557 or email shoondiliconsultant7@gmail.com. You can also use the enquiry form on our website.',
  },
  {
    category: 'Import',
    question: 'How does importing a vehicle from Japan work?',
    answer: 'You tell us what vehicle you want. We search Japanese auctions and dealer networks. We present options with available details. You decide what to proceed with. We arrange shipping, handle port clearance, and support registration. The full 9-step process is outlined on our Imports page.',
  },
  {
    category: 'Import',
    question: 'How long does importing a vehicle take?',
    answer: 'From confirmation to delivery, the typical timeline is 6 to 10 weeks. Shipping from Japan to Walvis Bay takes 4 to 6 weeks. Port clearance and registration support add another 2 to 4 weeks. These are estimates and can vary.',
  },
  {
    category: 'Import',
    question: 'What does importing a vehicle cost?',
    answer: 'The total cost depends on the vehicle, shipping fees, Namibian customs duties, and registration costs. We provide a cost breakdown for every vehicle before you commit. Import duties in Namibia are set by government regulation and vary by vehicle type and age.',
  },
  {
    category: 'Import',
    question: 'Can I see the vehicle before it ships from Japan?',
    answer: 'We share auction sheet details, photos, and condition reports where available from the Japanese source. We do not inspect vehicles in Japan ourselves. You review the available information and decide whether to proceed.',
  },
  {
    category: 'Finance',
    question: 'Does Shoondili offer finance?',
    answer: 'Shoondili does not lend money or approve finance. We provide guidance on how vehicle finance works in Namibia and can assist with your application to a bank or finance house. Final approval is always the lender\'s decision.',
  },
  {
    category: 'Finance',
    question: 'What do I need to apply for vehicle finance?',
    answer: 'Typically you need: proof of income, bank statements for 3 to 6 months, a valid Namibian ID, proof of address, and the vehicle details. Your bank may have additional requirements. We can help you understand the process.',
  },
  {
    category: 'Finance',
    question: 'Can I get monthly payment estimates?',
    answer: 'We provide indicative monthly estimates on our inventory listings. These are calculations based on typical interest rates and terms in Namibia. They are not promises or offers. Your actual monthly payment depends on your approved finance terms.',
  },
  {
    category: 'Vehicles',
    question: 'Do you have a showroom I can visit?',
    answer: 'No. We operate as a lean startup without a showroom. Vehicles can be viewed by arrangement in Walvis Bay. Contact us to schedule a viewing.',
  },
  {
    category: 'Vehicles',
    question: 'What if a vehicle I want is marked Reserved?',
    answer: 'A Reserved vehicle has a customer who has committed to purchase. You can still enquire. If the reservation does not complete, the vehicle may become available again.',
  },
  {
    category: 'Vehicles',
    question: 'Do you guarantee vehicle condition?',
    answer: 'We share all available information about each vehicle\'s condition. For Japanese imports, we share auction sheets and photos where available. We do not independently verify condition beyond what the source provides. We recommend you inspect the vehicle before purchase.',
  },
  {
    category: 'Vehicles',
    question: 'Can I trade in my current vehicle?',
    answer: 'We can discuss trade-in options. Contact us with details about your current vehicle and the vehicle you want from our inventory or import list.',
  },
  {
    category: 'After Sale',
    question: 'What happens after I buy a vehicle?',
    answer: 'We support registration paperwork for imported vehicles. For local purchases, we handle the ownership transfer documentation. We remain available for questions after delivery.',
  },
  {
    category: 'After Sale',
    question: 'Do you offer warranties?',
    answer: 'We do not offer warranties. Vehicle purchases are sold as-is. We recommend you inspect the vehicle thoroughly before purchase and arrange your own warranty if desired.',
  },
];

export const faqCategories = ['General', 'Import', 'Finance', 'Vehicles', 'After Sale'];
