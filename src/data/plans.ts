export interface DurationOption {
  months: number;
  label: string;
  price: number;
  savings?: string;
}

export interface Plan {
  id: string;
  name: string;
  durations: DurationOption[];
  features: string[];
  popular: boolean;
  description: string;
  color: string;
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    durations: [
      { months: 1, label: '1 Month', price: 1499 },
      { months: 3, label: '3 Months', price: 3999, savings: 'Save ₹498' },
      { months: 6, label: '6 Months', price: 7499, savings: 'Save ₹1,495' },
    ],
    features: [
      'Access to gym floor',
      'Basic equipment usage',
      'Locker room access',
      'Wi-Fi included',
      'Free fitness assessment',
      '2 group classes per week',
    ],
    popular: false,
    description: 'Perfect for beginners starting their fitness journey.',
    color: '#6b7280',
  },
  {
    id: 'pro',
    name: 'Pro',
    durations: [
      { months: 3, label: '3 Months', price: 2999 },
      { months: 6, label: '6 Months', price: 5499, savings: 'Save ₹499' },
      { months: 12, label: '12 Months', price: 9999, savings: 'Save ₹1,997' },
    ],
    features: [
      'Full gym access',
      'All equipment & machines',
      'Unlimited group classes',
      'Steam room access',
      'Monthly body composition',
      'Nutrition consultation',
      'Personal locker',
      'Priority support',
    ],
    popular: true,
    description: 'Most popular choice for serious fitness enthusiasts.',
    color: '#dc2626',
  },
  {
    id: 'elite',
    name: 'Elite',
    durations: [
      { months: 3, label: '3 Months', price: 4999 },
      { months: 6, label: '6 Months', price: 8999, savings: 'Save ₹999' },
      { months: 12, label: '12 Months', price: 16999, savings: 'Save ₹2,997' },
    ],
    features: [
      'Everything in Pro',
      '4 personal training sessions',
      'Advanced body analysis',
      'Custom meal plan',
      'Recovery zone access',
      'Guest passes (2/month)',
      'Premium locker',
      'VIP event access',
      'Supplement discounts',
    ],
    popular: false,
    description: 'Premium experience for dedicated members.',
    color: '#f59e0b',
  },
  {
    id: 'personal',
    name: 'Personal Training',
    durations: [
      { months: 3, label: '3 Months', price: 8999 },
      { months: 6, label: '6 Months', price: 16999, savings: 'Save ₹999' },
      { months: 12, label: '12 Months', price: 31999, savings: 'Save ₹5,989' },
    ],
    features: [
      'Everything in Elite',
      '12 personal training sessions',
      'Dedicated trainer assignment',
      'Custom workout programming',
      'Weekly progress reviews',
      'Priority scheduling',
      'Video form analysis',
      'WhatsApp support',
      'Guaranteed results program',
    ],
    popular: false,
    description: 'Maximum results with dedicated personal attention.',
    color: '#8b5cf6',
  },
];
