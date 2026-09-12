export interface Trainer {
  id: string;
  name: string;
  slug: string;
  specialty: string;
  experience: string;
  bio: string;
  shortBio: string;
  trainingStyle: string;
  certifications: string[];
  image: string;
  availability: string;
}

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    slug: 'rajesh-kumar',
    specialty: 'Strength & Conditioning',
    experience: '8 years',
    bio: 'Rajesh is a certified strength and conditioning specialist with over 8 years of experience in transforming lives through fitness. His approach combines traditional strength training with modern sports science to deliver exceptional results. He has trained over 500 clients ranging from beginners to competitive athletes.',
    shortBio: 'Certified strength specialist with 8 years of experience transforming lives.',
    trainingStyle: 'Progressive overload with focus on compound movements and periodization.',
    certifications: ['NSCA-CSCS', 'ACE Certified', 'Precision Nutrition Level 1'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
    availability: 'Mon-Sat: 6AM-12PM, 4PM-8PM',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    slug: 'priya-sharma',
    specialty: 'Weight Loss & Nutrition',
    experience: '6 years',
    bio: 'Priya specializes in sustainable weight loss and nutrition coaching. With her background in sports nutrition and behavioral psychology, she creates holistic programs that address both physical and mental aspects of fitness transformation. Her clients have collectively lost over 2000kg.',
    shortBio: 'Nutrition expert specializing in sustainable weight loss transformations.',
    trainingStyle: 'Combination of metabolic conditioning and nutritional guidance.',
    certifications: ['ACE Certified', 'ISSA Nutritionist', 'Yoga Alliance RYT-200'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
    availability: 'Mon-Fri: 7AM-2PM',
  },
  {
    id: '3',
    name: 'Arjun Reddy',
    slug: 'arjun-reddy',
    specialty: 'Functional Training',
    experience: '7 years',
    bio: 'Arjun is a functional movement specialist who believes in training the body as a complete unit. His programs focus on improving mobility, stability, and movement patterns that enhance everyday life and athletic performance. He has worked with professional cricket players and marathon runners.',
    shortBio: 'Functional movement specialist working with athletes and everyday warriors.',
    trainingStyle: 'Movement-based training with emphasis on mobility and core stability.',
    certifications: ['FMS Certified', 'TRX Certified', 'Kettlebell Athletics'],
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    availability: 'Mon-Sat: 5AM-11AM, 5PM-9PM',
  },
  {
    id: '4',
    name: 'Meena Patel',
    slug: 'meena-patel',
    specialty: 'Yoga & Flexibility',
    experience: '10 years',
    bio: 'Meena brings a decade of yoga and flexibility training experience to IRONPEAK. She integrates traditional yoga practices with modern fitness principles to create programs that improve flexibility, reduce stress, and enhance overall well-being. Her gentle yet effective approach has helped hundreds of clients.',
    shortBio: 'Yoga expert blending traditional practices with modern fitness.',
    trainingStyle: 'Mind-body connection through yoga, breathwork, and flexibility training.',
    certifications: ['RYT-500', 'Yoga Therapy Certified', 'Pilates Certified'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
    availability: 'Mon-Sun: 6AM-12PM',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    slug: 'vikram-singh',
    specialty: 'HIIT & Cardio',
    experience: '5 years',
    bio: 'Vikram is a high-energy HIIT and cardio specialist who brings intensity and enthusiasm to every session. His background in military fitness training and competitive athletics makes him the perfect trainer for those looking to push their limits and achieve peak cardiovascular fitness.',
    shortBio: 'High-energy HIIT specialist with military fitness background.',
    trainingStyle: 'High-intensity intervals with active recovery and heart rate zone training.',
    certifications: ['ACE Certified', 'CrossFit Level 2', 'TRX Certified'],
    image: 'https://images.unsplash.com/photo-1597347316205-36f6c451902a?w=400&q=80',
    availability: 'Mon-Fri: 5AM-10AM, 4PM-9PM',
  },
  {
    id: '6',
    name: 'Ananya Rao',
    slug: 'ananya-rao',
    specialty: 'Group Fitness',
    experience: '4 years',
    bio: 'Ananya is a dynamic group fitness instructor who creates engaging and effective workout sessions. Her classes are known for their perfect blend of challenge and fun, keeping members motivated and coming back for more. She specializes in group strength, cardio, and hybrid classes.',
    shortBio: 'Dynamic group fitness instructor creating engaging workout experiences.',
    trainingStyle: 'Energetic group sessions combining strength, cardio, and fun.',
    certifications: ['AFAA Certified', 'Spinning Certified', 'Barre Certified'],
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80',
    availability: 'Mon-Sat: 6AM-2PM, 5PM-8PM',
  },
];
