/**
 * WhatsApp number in international format: country code + number,
 * digits only (no plus sign, spaces, or dashes).
 *
 * TODO: replace 91XXXXXXXXXX with the real Actionpackd WhatsApp number.
 */
export const WHATSAPP_NUMBER = "91XXXXXXXXXX";

/** Every WhatsApp link on the site. Pass text to prefill the message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();

export function agentEnquiryUrl(agentName: string): string {
  return whatsappUrl(`Hi Actionpackd, I'd like to talk about the ${agentName}.`);
}

export function industryEnquiryUrl(industryName: string, whoFor: string): string {
  return whatsappUrl(`Hi Actionpackd, I'd like to talk about agents for ${industryName} (${whoFor}).`);
}
