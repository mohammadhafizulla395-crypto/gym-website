export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  code: string;
  terms: string[];
  popular: boolean;
  badge: string;
  color: string;
}

export const offers: Offer[] = [
  {
    id: '1',
    title: '7-Day Free Trial',
    description: 'Experience IRONPEAK completely free for 7 days. Access all facilities, attend group classes, and meet our trainers. No commitment required.',
    discount: 'FREE',
    validUntil: '2026-12-31',
    code: 'FREE7',
    terms: ['Valid for new members only', 'One trial per person', 'Government ID required', 'Cannot be combined with other offers'],
    popular: true,
    badge: 'Most Popular',
    color: '#dc2626',
  },
  {
    id: '2',
    title: 'New Member Special',
    description: 'Join IRONPEAK today and get 20% off on your first 3 months. Start your fitness journey at the best price.',
    discount: '20% OFF',
    validUntil: '2026-11-30',
    code: 'NEW20',
    terms: ['Valid for new registrations only', 'Applicable on Pro and Elite plans', 'Advance payment required', 'Terms and conditions apply'],
    popular: false,
    badge: 'Limited Time',
    color: '#f97316',
  },
  {
    id: '3',
    title: 'Couples Fitness Offer',
    description: 'Train together, grow together! Get 25% off when you and your partner join together. Perfect for couples who want to get fit.',
    discount: '25% OFF',
    validUntil: '2026-12-31',
    code: 'COUPLE25',
    terms: ['Both members must join simultaneously', 'Valid on all plans', 'Minimum 3-month commitment', 'ID proof required for both'],
    popular: false,
    badge: 'Best Value',
    color: '#8b5cf6',
  },
  {
    id: '4',
    title: 'Personal Training Offer',
    description: 'Get 4 extra personal training sessions free when you enroll in the Personal Training plan. Double the attention, double the results.',
    discount: '4 FREE Sessions',
    validUntil: '2026-10-31',
    code: 'PT4FREE',
    terms: ['Valid on Personal Training plan only', 'Sessions must be used within 3 months', 'Subject to trainer availability', 'Non-transferable'],
    popular: false,
    badge: 'Premium',
    color: '#f59e0b',
  },
  {
    id: '5',
    title: 'Annual Membership',
    description: 'Lock in the best rate with our annual membership. Save over 30% compared to monthly payments and enjoy premium benefits all year.',
    discount: '30% OFF',
    validUntil: '2026-12-31',
    code: 'ANNUAL30',
    terms: ['Full year payment required', 'Non-refundable', 'Includes all Elite benefits', 'Freeze option available (up to 30 days)'],
    popular: false,
    badge: 'Best Savings',
    color: '#059669',
  },
];
