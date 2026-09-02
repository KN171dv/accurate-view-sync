export type Testimonial = {
  name: string;
  car?: string;
  source: "Google" | "Instagram";
  quote: string;
};

/**
 * Depoimentos REAIS apenas. Nada é inventado aqui.
 * Ao receber avaliações do Google/Instagram, adicione objetos assim:
 *
 * { name: "Nome do cliente", car: "Porsche 911", source: "Google",
 *   quote: "Texto exato da avaliação." },
 */
export const TESTIMONIALS: Testimonial[] = [];
