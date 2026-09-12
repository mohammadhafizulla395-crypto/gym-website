const WHATSAPP_NUMBER = '919100527275';

export function generateWhatsAppMessage(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
      return `${label}: ${value}`;
    })
    .join('\n');
}

export function openWhatsApp(message: string): void {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

export function sendToWhatsApp(
  section: string,
  data: Record<string, string>
): void {
  const header = `*${section}*\n`;
  const body = generateWhatsAppMessage(data);
  const fullMessage = `${header}\n${body}`;
  openWhatsApp(fullMessage);
}

export const WHATSAPP_NUMBER_RAW = WHATSAPP_NUMBER;
