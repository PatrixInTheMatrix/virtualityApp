export interface Image {
  url: string;
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
}

export interface Quote {
  show: boolean;
}

export interface WcmsPage {
  id: string;
  variant: number;
  image: Image;
  quote: Quote;
}

export interface RootObjectPages {
  wcmsPages: WcmsPage[];
}
