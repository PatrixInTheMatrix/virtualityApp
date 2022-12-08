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

export interface WcmsPage {
  id: string;
  image1: Image1;
  image2: Image2;
}

export interface RootObjectPages {
  wcmsPages: WcmsPage[];
}
