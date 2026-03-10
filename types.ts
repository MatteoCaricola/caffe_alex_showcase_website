
export interface CoffeeProduct {
  id: number;
  name: string;
  origin: string;
  roast: 'Light' | 'Medium' | 'Dark';
  image: string;
  tags: string[];
  description: string;
}

export enum Section {
  HOME = 'home',
  SERVIZI = 'servizi',
  PRODOTTI = 'prodotti',
  SOMMELIER = 'sommelier',
  CONTATTI = 'contatti',
}
