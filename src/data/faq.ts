export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What are the gym timings?',
    answer: 'IRONPEAK Fitness Studio is open Monday to Saturday from 5:00 AM to 10:00 PM, and Sundays from 6:00 AM to 8:00 PM. We also offer early morning and late evening sessions for personal training clients.',
    category: 'General',
  },
  {
    id: '2',
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a completely free 7-day trial for new members. You get full access to the gym floor, group classes, and can even consult with a trainer. No payment information is required.',
    category: 'Membership',
  },
  {
    id: '3',
    question: 'Is there a joining fee?',
    answer: 'We periodically waive our joining fee as part of promotional offers. Currently, new members can join without any joining fee. Contact us for the latest offer details.',
    category: 'Membership',
  },
  {
    id: '4',
    question: 'Do you provide personal training?',
    answer: 'Absolutely! We have 6 certified personal trainers specializing in different areas including strength training, weight loss, functional training, and yoga. Personal training sessions can be booked individually or as part of our Personal Training membership plan.',
    category: 'Training',
  },
  {
    id: '5',
    question: 'What equipment do you have?',
    answer: 'IRONPEAK is equipped with state-of-the-art equipment including cardio machines (treadmills, ellipticals, bikes), free weights (dumbbells up to 50kg, barbells, kettlebells), cable machines, functional training rigs, and dedicated areas for yoga and group classes.',
    category: 'Facilities',
  },
  {
    id: '6',
    question: 'Do you offer nutrition guidance?',
    answer: 'Yes, our Pro membership and above include nutrition consultations. Our certified nutritionist will create a personalized meal plan based on your goals, dietary preferences, and lifestyle.',
    category: 'Training',
  },
  {
    id: '7',
    question: 'Can I freeze my membership?',
    answer: 'Yes, you can freeze your membership for up to 30 days per year for medical or travel reasons. Simply inform us at least 3 days in advance. The freeze period will be added to your membership end date.',
    category: 'Membership',
  },
  {
    id: '8',
    question: 'Is parking available?',
    answer: 'Yes, we have dedicated parking space for members with capacity for 50+ two-wheelers and 20+ cars. The parking area is well-lit and monitored with CCTV.',
    category: 'Facilities',
  },
  {
    id: '9',
    question: 'Do you have separate timings for women?',
    answer: 'We have dedicated women-only training hours from 7:00 AM to 10:00 AM on weekdays, with a female trainer available during these hours. However, our gym is a safe and welcoming space for women at all times.',
    category: 'Facilities',
  },
  {
    id: '10',
    question: 'What is the cancellation policy?',
    answer: 'You can cancel your membership with 15 days written notice. Monthly memberships are non-refundable for the current month. Quarterly and annual plans may be eligible for prorated refunds. Please refer to our refund policy for complete details.',
    category: 'Membership',
  },
  {
    id: '11',
    question: 'Do you offer group classes?',
    answer: 'Yes! We offer over 20 group classes per week including HIIT, Zumba, yoga, spinning, boot camp, and strength classes. Pro members and above get unlimited access to all group classes.',
    category: 'Training',
  },
  {
    id: '12',
    question: 'Can I bring a friend to try the gym?',
    answer: 'Absolutely! You can bring a friend for a free trial anytime during staffed hours. They will get a full tour and can try equipment and classes. Ask at the front desk to arrange a visit.',
    category: 'General',
  },
];
