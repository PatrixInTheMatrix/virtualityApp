export interface Image1 {
  alt: string;
  url: string;
  width: string;
  height: string;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface Image2 {
  alt: string;
  url: string;
  width: string;
  height: string;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Gallery {
  width: string;
  height: string;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
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
  additive?: string;
}

export interface List {
  width: string;
  height: string;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
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

