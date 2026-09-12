export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential Tips for Your First Gym Visit',
    slug: 'first-gym-visit-tips',
    excerpt: 'Starting your fitness journey can be intimidating. Here are 10 practical tips to make your first gym visit comfortable and effective.',
    content: 'Walking into a gym for the first time can feel overwhelming. Between the clanging weights, the unfamiliar equipment, and the seasoned gym-goers, it is natural to feel out of place. But fear not — every fitness enthusiast started exactly where you are now.\n\n1. Start with a tour\nMost gyms offer a free orientation. Take it! Understanding the layout will boost your confidence.\n\n2. Wear comfortable clothing\nYou do not need expensive gym wear, but breathable, comfortable clothes will make your experience much better.\n\n3. Bring a water bottle\nStaying hydrated is crucial during any workout. Keep water handy throughout your session.\n\n4. Start with basic exercises\nDo not try to lift heavy on day one. Focus on learning proper form with basic movements.',
    author: 'Rajesh Kumar',
    date: '2026-09-01',
    readTime: '5 min read',
    category: 'Fitness Tips',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    tags: ['beginner', 'tips', 'fitness'],
  },
  {
    id: '2',
    title: 'The Complete Guide to Pre and Post Workout Nutrition',
    slug: 'pre-post-workout-nutrition',
    excerpt: 'What you eat before and after your workout can make or break your results. Learn the science behind optimal workout nutrition.',
    content: 'Nutrition plays a crucial role in determining how effective your workouts will be. The right food at the right time can significantly enhance your performance and recovery.\n\nPre-Workout Nutrition:\n- Eat 2-3 hours before exercise\n- Include complex carbs and moderate protein\n- Avoid heavy fats that slow digestion\n- Examples: Oatmeal with banana, rice with chicken\n\nPost-Workout Nutrition:\n- Eat within 30-60 minutes after exercise\n- Focus on protein for muscle repair\n- Include fast-digesting carbs for recovery\n- Examples: Protein shake with fruit, eggs with toast',
    author: 'Priya Sharma',
    date: '2026-08-25',
    readTime: '7 min read',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    tags: ['nutrition', 'diet', 'recovery'],
  },
  {
    id: '3',
    title: 'Why Strength Training is Essential for Everyone',
    slug: 'strength-training-essential',
    excerpt: 'Strength training is not just for bodybuilders. Discover why everyone should include resistance training in their fitness routine.',
    content: 'There is a common misconception that strength training is only for those looking to build large muscles. In reality, resistance training offers benefits that extend far beyond aesthetics.\n\nKey Benefits:\n- Increased bone density\n- Improved metabolic rate\n- Better joint health\n- Enhanced mental health\n- Improved functional fitness\n\nWhether you are 20 or 60, strength training can significantly improve your quality of life.',
    author: 'Arjun Reddy',
    date: '2026-08-18',
    readTime: '6 min read',
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    tags: ['strength', 'health', 'training'],
  },
  {
    id: '4',
    title: 'How to Stay Motivated on Your Fitness Journey',
    slug: 'stay-motivated-fitness',
    excerpt: 'Motivation comes and goes. Learn practical strategies to stay consistent with your fitness goals even when motivation fades.',
    content: 'We have all been there — the initial excitement of joining a gym fades, and suddenly, finding excuses becomes easier than finding motivation. Here is how to stay on track.\n\n1. Set specific, measurable goals\n2. Track your progress regularly\n3. Find a workout buddy\n4. Celebrate small wins\n5. Mix up your routine\n6. Remember your "why"',
    author: 'Meena Patel',
    date: '2026-08-10',
    readTime: '4 min read',
    category: 'Mindset',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    tags: ['motivation', 'mindset', 'consistency'],
  },
  {
    id: '5',
    title: 'Understanding Body Composition: Beyond the Scale',
    slug: 'body-composition-guide',
    excerpt: 'The number on the scale does not tell the whole story. Learn why body composition matters more than weight alone.',
    content: 'Many people obsess over the number on the scale, but weight alone is a poor indicator of fitness. Body composition — the ratio of fat to muscle in your body — tells a much more accurate story.\n\nWhy Body Composition Matters:\n- Muscle is denser than fat\n- Two people at same weight can look completely different\n- Health markers improve with better composition\n- Progress should be measured by multiple metrics',
    author: 'Priya Sharma',
    date: '2026-08-03',
    readTime: '5 min read',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    tags: ['health', 'body-composition', 'fitness'],
  },
  {
    id: '6',
    title: 'The Benefits of Group Fitness Classes',
    slug: 'group-fitness-benefits',
    excerpt: 'Working out in a group setting offers unique benefits that solo training cannot match. Discover the power of community fitness.',
    content: 'Group fitness classes have exploded in popularity, and for good reason. The energy of a group, the guidance of an instructor, and the accountability of regular class times create a powerful fitness experience.\n\nBenefits of Group Fitness:\n- Motivation from others\n- Professional instruction\n- Structured workouts\n- Social connections\n- Fun and varied routines',
    author: 'Ananya Rao',
    date: '2026-07-28',
    readTime: '4 min read',
    category: 'Group Fitness',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80',
    tags: ['group-fitness', 'community', 'classes'],
  },
];
