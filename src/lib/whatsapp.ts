// Número de WhatsApp da Nexarius.
const WHATSAPP_NUMBER = "5547991043088";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Nexarius e quero saber mais sobre gestão de tráfego pago.";
