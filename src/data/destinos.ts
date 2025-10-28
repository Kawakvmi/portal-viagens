export type Destino = {
  slug: string;
  name: string;
  image: string;
  descricao: string;
  destaques: string[];
};

export const DESTINOS: Destino[] = [
  {
    slug: "paris",
    name: "Paris, França",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop",
    descricao: "Paris é sinônimo de arte, história e gastronomia.",
    destaques: ["Museu do Louvre", "Torre Eiffel", "Notre-Dame", "Montmartre"]
  },
  {
    slug: "tokyo",
    name: "Tóquio, Japão",
    image: "https://images.unsplash.com/photo-1518544801976-3e188ea8b6d6?q=80&w=1600&auto=format&fit=crop",
    descricao: "Tradição e futurismo lado a lado.",
    destaques: ["Shibuya Crossing", "Senso-ji", "Akihabara", "Toyosu Market"]
  },
  {
    slug: "rio-de-janeiro",
    name: "Rio de Janeiro, Brasil",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop",
    descricao: "Belezas naturais e clima vibrante.",
    destaques: ["Cristo Redentor", "Pão de Açúcar", "Ipanema", "Lapa"]
  },
  {
    slug: "cairo",
    name: "Cairo, Egito",
    image: "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop",
    descricao: "História milenar às margens do Nilo.",
    destaques: ["Pirâmides de Gizé", "Esfinge", "Museu Egípcio", "Khan el-Khalili"]
  }
];
