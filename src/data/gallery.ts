export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  { id: '1', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', title: 'Main Training Floor', category: 'Gym', description: 'Our spacious 5000 sq ft main training area' },
  { id: '2', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', title: 'Strength Zone', category: 'Equipment', description: 'Premium free weights and power racks' },
  { id: '3', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', title: 'Personal Training', category: 'Training', description: 'One-on-one training sessions' },
  { id: '4', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80', title: 'Yoga Studio', category: 'Classes', description: 'Dedicated space for yoga and meditation' },
  { id: '5', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', title: 'Cardio Section', category: 'Equipment', description: 'State-of-the-art cardio machines' },
  { id: '6', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80', title: 'Muscle Building Zone', category: 'Training', description: 'Hypertrophy-focused training area' },
  { id: '7', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80', title: 'HIIT Classes', category: 'Classes', description: 'High-energy group HIIT sessions' },
  { id: '8', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80', title: 'Our Trainers', category: 'Trainers', description: 'Meet our expert fitness team' },
  { id: '9', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80', title: 'Outdoor Training', category: 'Training', description: 'Functional outdoor boot camps' },
  { id: '10', image: 'https://images.unsplash.com/photo-1597347316205-36f6c451902a?w=800&q=80', title: 'Group Sessions', category: 'Classes', description: 'Motivating group workout sessions' },
  { id: '11', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80', title: 'Transformation Area', category: 'Transformation', description: 'Where transformations happen' },
  { id: '12', image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80', title: 'Women Training', category: 'Classes', description: 'Women-only training sessions' },
  { id: '13', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80', title: 'Trainer Profile', category: 'Trainers', description: 'Expert guidance for your goals' },
  { id: '14', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', title: 'Member Success', category: 'Transformation', description: 'Real results from real members' },
  { id: '15', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', title: 'Male Training', category: 'Trainers', description: 'Strength training sessions' },
  { id: '16', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', title: 'Fitness Journey', category: 'Transformation', description: 'Every journey starts with a step' },
];

export const galleryCategories = ['All', 'Gym', 'Training', 'Equipment', 'Classes', 'Trainers', 'Transformation'];
