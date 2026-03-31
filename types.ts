
export interface CoffeeProduct {
  id: number;
  name: string;
  origin: string;
  roast: 'Leggera' | 'Media' | 'Robusta' | 'Cremoso';
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
