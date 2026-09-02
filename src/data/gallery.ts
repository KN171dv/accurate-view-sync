import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import hero from "@/assets/hero-car.jpg";

export type GalleryItem = {
  src: string;
  title: string;
  service: string;
  orientation: "portrait" | "landscape";
};

/**
 * Imagens placeholder até o envio do portfólio real da Kleber's Garage.
 * Para trocar: substitua o import no topo e ajuste `title` / `service`.
 */
export const GALLERY: GalleryItem[] = [
  { src: g1, title: "Roda forjada", service: "Car Detail", orientation: "portrait" },
  { src: g2, title: "Farol full LED", service: "Car Detail", orientation: "landscape" },
  { src: g3, title: "Interior em couro", service: "Car Detail", orientation: "portrait" },
  { src: g4, title: "Proteção hidrofóbica", service: "PPF", orientation: "landscape" },
  { src: g5, title: "911 GT3", service: "Customização", orientation: "portrait" },
  { src: g6, title: "Aerofólio em carbono", service: "Customização", orientation: "landscape" },
];

/** Grid do Instagram (placeholder até integração/upload real). */
export const INSTAGRAM_POSTS: string[] = [g5, g2, g1, g6, hero, g3];
