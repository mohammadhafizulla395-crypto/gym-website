export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  program: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Ravi Teja',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    review: 'IRONPEAK completely changed my life. I lost 18kg in 4 months with their fat loss program. The trainers are incredibly supportive and the equipment is top-notch. Best gym in Guntur!',
    program: 'Fat Loss',
    date: '2026-08-15',
    verified: true,
  },
  {
    id: '2',
    name: 'Sneha Reddy',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    review: 'As a beginner, I was intimidated by gyms. But the welcoming atmosphere at IRONPEAK and the patient trainers made me feel at home. I have gained confidence and strength I never thought possible.',
    program: 'Beginner Fitness',
    date: '2026-07-22',
    verified: true,
  },
  {
    id: '3',
    name: 'Karthik Naidu',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 5,
    review: 'The personal training sessions are worth every penny. My trainer Rajesh customized everything to my goals. I have gained 6kg of muscle in 3 months. The nutrition guidance was a game changer.',
    program: 'Personal Training',
    date: '2026-09-01',
    verified: true,
  },
  {
    id: '4',
    name: 'Divya Sharma',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    review: 'I joined IRONPEAK for my wedding preparation and the results were amazing. The bridal fitness program was perfectly designed. I looked and felt my best on my special day!',
    program: 'Fat Loss',
    date: '2026-06-10',
    verified: true,
  },
  {
    id: '5',
    name: 'Venkat Rao',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
    review: 'The functional training program fixed my back pain that I had for years. The trainers really know their stuff. I can now play cricket without any discomfort. Highly recommended!',
    program: 'Functional Training',
    date: '2026-08-28',
    verified: true,
  },
  {
    id: '6',
    name: 'Lakshmi Devi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    rating: 5,
    review: 'At 42, I thought it was too late to get fit. The trainers at IRONPEAK proved me wrong. I lost 15kg and feel 10 years younger. The women-only sessions made me comfortable.',
    program: 'Weight Loss',
    date: '2026-07-05',
    verified: true,
  },
  {
    id: '7',
    name: 'Suresh Babu',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
    rating: 4,
    review: 'Great gym with excellent equipment. The group classes are fun and motivating. The only reason for 4 stars is the parking could be better. Otherwise, perfect fitness destination.',
    program: 'Group Classes',
    date: '2026-09-05',
    verified: true,
  },
  {
    id: '8',
    name: 'Priyanka Nair',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    rating: 5,
    review: 'The HIIT classes are incredible! Vikram pushes you to your limits but in a safe way. I have never been this fit in my life. The community here is amazing and keeps you motivated.',
    program: 'HIIT',
    date: '2026-08-20',
    verified: true,
  },
];
