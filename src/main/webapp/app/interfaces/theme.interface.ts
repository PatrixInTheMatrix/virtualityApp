export interface Theme {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  backgroundColor: string;
  backgroundImage: string;
  lineHeight: string;
  letterSpacing: string;
  filter: string;
}

export interface Tel {
  number: string;
  description: string;
}

export interface Email {
  address: string;
}

export interface Business {
  tel: Tel;
  email: Email;
}

export interface Logo {
  src: string;
  alt: string;
}

export interface LogoStyle {
  width: string;
  border: string;
  borderRadius: string;
  filter: string;
  padding: string;
  opacity: string;
}

export interface FlipCard {
  logoStyle: LogoStyle;
}

export interface PageOne {
  src: string;
  alt: string;
}

export interface PageTwo {
  src: string;
  alt: string;
}

export interface PageThree {
  src: string;
  alt: string;
}

export interface Navigation {
  pageOne: PageOne;
  pageTwo: PageTwo;
  pageThree: PageThree;
}

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
  filter: string;
}

export interface Tel2 {
  number: string;
  description: string;
  src: string;
}

export interface Email2 {
  address: string;
  description: string;
  src: string;
}

export interface Communication {
  tel: Tel2;
  email: Email2;
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

export interface SocialMedia {
  src: string;
  alt: string;
  url: string;
}

export interface WcmsTheme {
  id: string;
  theme: Theme;
  business: Business;
  logo: Logo;
  flipCard: FlipCard;
  navigation: Navigation;
  language: Language;
  title: Title;
  gMap: GMap;
  communication: Communication;
  open: Open;
  socialMedia: SocialMedia[];
}

export interface RootObjectThemes {
  wcmsThemes: WcmsTheme[];
}
