/**
 * Dados centrais da marca. Altere APENAS aqui — todos os componentes reutilizam.
 */
export const BRAND = {
  name: "Kleber's Garage",
  slogan: "The Art of Preservation",
  yearsInMarket: 20,
  whatsappNumber: "5519938333301", // E.164, sem espaços/traços
  instagramUrl: "https://www.instagram.com/klebersgarage/",
  instagramHandle: "@klebersgarage",
  address: "Av. Armelinda Padula Pietrobon, 206 - Paulínia, SP",
  // Preencher quando confirmado:
  openingHours: "[preencher]",
} as const;

export function whatsappLink(
  message = "Olá! Vim pelo site da Kleber's Garage e gostaria de agendar uma avaliação.",
) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Antes e Depois", href: "#antes-depois" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contato", href: "#contato" },
] as const;
