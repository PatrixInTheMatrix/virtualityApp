  export interface Nl {
    src: string;
    alt: string;
  }

  export interface De {
    src: string;
    alt: string;
  }

  export interface En {
    src: string;
    alt: string;
  }

  export interface Fr {
    src: string;
    alt: string;
  }

  export interface Language {
    nl: Nl;
    de: De;
    en: En;
    fr: Fr;
  }

  export interface SocialMedia {
    src: string;
    alt: string;
    url: string;
  }

  export interface WcmsGlobal {
    language: Language;
    socialMedia: SocialMedia[];
  }

  export interface RootObjectGlobal {
    wcmsGlobal: WcmsGlobal;
  }
