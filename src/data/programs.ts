export interface Program {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  image: string;
  icon: string;
  features: string[];
}

export const programs: Program[] = [
  {
    id: '1',
    title: 'Strength Training',
    slug: 'strength-training',
    description: 'Build raw strength and muscle mass with our comprehensive strength training program. Using progressive overload techniques and periodization, our expert trainers will guide you through compound movements, isolation exercises, and advanced lifting techniques.',
    shortDescription: 'Build raw strength with progressive overload techniques and expert guidance.',
    benefits: ['Increased muscle mass', 'Improved bone density', 'Enhanced metabolism', 'Better posture', 'Increased confidence'],
    duration: '60-75 min',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    icon: 'Dumbbell',
    features: ['Personalized programming', 'Form correction', 'Progress tracking', 'Nutrition guidance'],
  },
  {
    id: '2',
    title: 'Fat Loss',
    slug: 'fat-loss',
    description: 'Our fat loss program combines strategic cardio, strength training, and nutritional guidance to help you shed unwanted body fat while maintaining lean muscle. Experience metabolic conditioning that keeps burning calories long after your workout.',
    shortDescription: 'Strategic fat burning through combined cardio and strength training.',
    benefits: ['Sustainable fat loss', 'Increased energy', 'Improved cardiovascular health', 'Better body composition', 'Enhanced mood'],
    duration: '45-60 min',
    difficulty: 'All Levels',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    icon: 'Flame',
    features: ['Body composition analysis', 'Metabolic conditioning', 'Diet planning', 'Weekly check-ins'],
  },
  {
    id: '3',
    title: 'Muscle Building',
    slug: 'muscle-building',
    description: ' sculpt your ideal physique with our muscle building program. We use hypertrophy-focused training with scientifically-backed volume and intensity techniques to maximize muscle growth and development.',
    shortDescription: 'Hypertrophy-focused training for maximum muscle growth.',
    benefits: ['Increased muscle size', 'Improved strength', 'Better symmetry', 'Enhanced athletic performance', 'Boosted metabolism'],
    duration: '60-90 min',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    icon: 'TrendingUp',
    features: ['Volume programming', 'Mind-muscle connection', 'Supplement guidance', 'Meal planning'],
  },
  {
    id: '4',
    title: 'Functional Training',
    slug: 'functional-training',
    description: 'Improve your daily movement patterns and athletic performance with functional training. This program focuses on movements that translate directly to real-life activities, sports performance, and injury prevention.',
    shortDescription: 'Real-world movement patterns for better daily performance.',
    benefits: ['Improved mobility', 'Injury prevention', 'Better balance', 'Enhanced coordination', 'Core strength'],
    duration: '45-60 min',
    difficulty: 'All Levels',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    icon: 'Target',
    features: ['Movement screening', 'Mobility work', 'Core training', 'Balance exercises'],
  },
  {
    id: '5',
    title: 'HIIT',
    slug: 'hiit',
    description: 'High-Intensity Interval Training that maximizes calorie burn in minimum time. Our HIIT sessions combine explosive movements with active recovery periods for optimal cardiovascular fitness and fat burning.',
    shortDescription: 'Maximum results in minimum time with explosive intervals.',
    benefits: ['Time-efficient workouts', 'Maximum calorie burn', 'Improved endurance', 'EPOC effect', 'Mental toughness'],
    duration: '30-45 min',
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80',
    icon: 'Zap',
    features: ['Heart rate monitoring', 'Scalable intensity', 'Group energy', 'Recovery protocols'],
  },
  {
    id: '6',
    title: 'Beginner Fitness',
    slug: 'beginner-fitness',
    description: 'Start your fitness journey with confidence. Our beginner program is designed to build foundational strength, teach proper form, and develop healthy habits in a supportive and encouraging environment.',
    shortDescription: 'The perfect starting point for your fitness journey.',
    benefits: ['Learn proper form', 'Build confidence', 'Establish habits', 'Meet like-minded people', 'Foundation for growth'],
    duration: '45-60 min',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    icon: 'Heart',
    features: ['Step-by-step guidance', 'No experience needed', 'Supportive community', 'Flexible scheduling'],
  },
  {
    id: '7',
    title: 'Athletic Conditioning',
    slug: 'athletic-conditioning',
    description: 'Train like an athlete with our sports conditioning program. Designed to improve speed, agility, power, and endurance for competitive athletes and fitness enthusiasts alike.',
    shortDescription: 'Elite athletic performance training for all levels.',
    benefits: ['Increased speed', 'Better agility', 'Enhanced power', 'Sports-specific fitness', 'Competitive edge'],
    duration: '60-75 min',
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
    icon: 'Trophy',
    features: ['Speed training', 'Agility drills', 'Plyometrics', 'Sport-specific programs'],
  },
  {
    id: '8',
    title: 'Personal Training',
    slug: 'personal-training',
    description: 'Get one-on-one attention from our certified personal trainers. Every session is customized to your goals, fitness level, and preferences for maximum results and accountability.',
    shortDescription: 'One-on-one expert guidance tailored to your goals.',
    benefits: ['Personalized attention', 'Faster results', 'Accountability', 'Flexible scheduling', 'Expert guidance'],
    duration: '60 min',
    difficulty: 'All Levels',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    icon: 'User',
    features: ['Custom programming', 'Flexible timing', 'Progress tracking', 'Nutrition advice'],
  },
];
