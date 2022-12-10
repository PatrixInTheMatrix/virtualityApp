
export interface Image1 {
  show: boolean;
  url: string;
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
}

export interface Image2 {
  show: boolean;
  url: string;
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
}

export interface Image {
  scr: string;
  alt: string;
}

export interface Gallery {
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  images: Image[];
}

export interface WcmsPage {
  id: string;
  image1: Image1;
  image2: Image2;
  gallery: Gallery;
}

export interface RootObjectPages {
  wcmsPages: WcmsPage[];
}
