export interface Image1 {
  show: boolean;
  alt: string;
  url: string;
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
}

export interface Image2 {
  show: boolean;
  alt: string;
  url: string;
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Gallery {
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  images: Image[];
}

export interface Product {
  src: string;
  alt: string;
  title: string;
  description: string;
  special: string;
  price: number;
  reducedPrice: number;
  additive: string;
}

export interface List {
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  products: Product[];
}

export interface WcmsPage {
  id: string;
  image1: Image1;
  image2: Image2;
  gallery: Gallery;
  list: List;
}

export interface WcmsThemeForPage {
  id: string;
  wcmsPages: WcmsPage[];
}

export interface RootObjectPages {
    wcmsThemeForPages: WcmsThemeForPage[];
  }

