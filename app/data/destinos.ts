export type Destino = {
  slug: string;
  titulo: string;
  descricao: string;
  destaques?: string[];
  imagem?: string;
};

export const DESTINOS: Destino[] = [
  {
    slug: "paris",
    titulo: "Paris",
    descricao: "Capital da França, conhecida pela Torre Eiffel, Louvre e charme europeu.",
    destaques: ["Torre Eiffel","Museu do Louvre","Rio Sena"],
    imagem: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop"
  },
  {
    slug: "tokyo",
    titulo: "Tóquio",
    descricao: "Metrópole vibrante que combina tradição e tecnologia de ponta.",
    destaques: ["Shibuya Crossing","Templo Senso-ji","Akihabara"],
    imagem: "https://images.unsplash.com/photo-1526481280698-8fcc13fdc8f4?q=80&w=1600&auto=format&fit=crop"
  }
];