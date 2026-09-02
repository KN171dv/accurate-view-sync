import serviceDetail from "@/assets/service-detail.jpg";
import servicePpf from "@/assets/service-ppf.jpg";
import serviceCustom from "@/assets/service-custom.jpg";

export type Service = {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string;
  bullets: string[];
};

/**
 * SERVIÇOS REAIS DA MARCA.
 * Para adicionar um serviço: copie um objeto abaixo, troque `id`, `name`,
 * `short`, `description`, `bullets` e importe uma nova imagem no topo do arquivo.
 * Para remover: apague o objeto correspondente. Nada mais precisa ser alterado.
 */
export const SERVICES: Service[] = [
  {
    id: "car-detail",
    name: "Car Detail",
    short: "Detalhamento automotivo completo",
    description:
      "Correção de pintura, descontaminação e acabamento minucioso em cada painel, frisos e interior. O carro volta ao ponto em que cada reflexo está no lugar certo.",
    image: serviceDetail,
    bullets: ["Correção de pintura", "Descontaminação", "Interior premium"],
  },
  {
    id: "ppf",
    name: "PPF",
    short: "Paint Protection Film",
    description:
      "Película de proteção de pintura aplicada com precisão milimétrica. Blindagem invisível contra riscos, pedras e intempéries — preservando o valor do veículo.",
    image: servicePpf,
    bullets: ["Aplicação sob medida", "Proteção invisível", "Preserva o original"],
  },
  {
    id: "customizacao",
    name: "Customização",
    short: "Personalização sob medida",
    description:
      "Projetos exclusivos de personalização, do detalhe discreto à transformação completa, sempre respeitando a linha e a identidade do veículo.",
    image: serviceCustom,
    bullets: ["Projeto exclusivo", "Execução artesanal", "Acabamento de fábrica"],
  },
];
