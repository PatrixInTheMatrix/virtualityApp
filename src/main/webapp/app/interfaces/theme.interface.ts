  export interface Theme {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    color: string;
    backgroundColor: string;
    lineHeight: string;
    letterSpacing: string;
  }

  export interface Title {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    color: string;
    backgroundColor: string;
    border: string;
    borderRadius: string;
    boxShadow: string;
    padding: string;
    marginBottom: string;
  }

  export interface GMap {
    url: string;
    width: string;
    height: string;
    border: string;
    borderRadius: string;
    boxShadow: string;
  }

  export interface Tel {
    number: string;
    description: string;
    src: string;
  }

  export interface Email {
    address: string;
    description: string;
    src: string;
  }

  export interface Communication {
    tel: Tel;
    email: Email;
  }

  export interface Open2 {
    src: string;
  }

  export interface Close {
    src: string;
  }

  export interface OpenAgain {
    src: string;
  }

  export interface Open {
    open: Open2;
    close: Close;
    openAgain: OpenAgain;
  }

  export interface Url {
    facebook: string;
    instagram: string;
    twitter: string;
    tikTok: string;
    snapchat: string;
    linkedIn: string;
    pinterest: string;
    youtube: string;
    vimeo: string;
    reddit: string;
    xing: string;
  }

  export interface Src {
    facebook: string;
    instagram: string;
    twitter: string;
    tikTok: string;
    snapchat: string;
    linkedIn: string;
    pinterest: string;
    youtube: string;
    vimeo: string;
    reddit: string;
    xing: string;
  }

  export interface SocialMedia {
    url: Url;
    src: Src;
  }

  export interface WcmsTheme {
    id: string;
    theme: Theme;
    title: Title;
    gMap: GMap;
    communication: Communication;
    open: Open;
    socialMedia: SocialMedia;
  }


  export interface RootObjectThemes {
  wcmsThemes: WcmsTheme[];
}
