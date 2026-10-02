// Número de WhatsApp da Nexarius — substituir pelo número real quando disponível.
const WHATSAPP_NUMBER = "5511999999999";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Nexarius e quero saber mais sobre gestão de tráfego pago.";
