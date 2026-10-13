import hero from "@/assets/hero.jpg";
import trailer from "@/assets/trailer.jpg";
import tosa from "@/assets/tosa.jpg";
import banho from "@/assets/banho.jpg";
import type { Photo } from "@/components/site/Gallery";

// Imagens ilustrativas provisórias — substituir por fotos reais fornecidas pela empresa.
export const IMG = { hero, trailer, tosa, banho };

export const PHOTOS: Photo[] = [
  { src: trailer, alt: "Interior do Pet Trailer (imagem ilustrativa)", caption: "Pet Trailer · ilustrativa", w: 1408, h: 1008 },
  { src: banho, alt: "Pet durante o banho (imagem ilustrativa)", caption: "Banho · ilustrativa", w: 1008, h: 1200 },
  { src: tosa, alt: "Pet sendo escovado (imagem ilustrativa)", caption: "Tosa · ilustrativa", w: 1008, h: 1200 },
  { src: hero, alt: "Pet após o banho (imagem ilustrativa)", caption: "Pós-banho · ilustrativa", w: 1600, h: 1104 },
  { src: banho, alt: "Banho com espuma (imagem ilustrativa)", caption: "Higiene · ilustrativa", w: 1008, h: 1200 },
];
