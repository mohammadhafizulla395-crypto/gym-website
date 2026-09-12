import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
}

export function WhatsAppButton({ message = 'Hello! I am interested in joining IRONPEAK Fitness Studio. Please share more details.' }: WhatsAppButtonProps) {
  return (
    <button
      onClick={() => openWhatsApp(message)}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110 animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
}
