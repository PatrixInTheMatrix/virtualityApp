export interface Font {
  family: string;
  size: string;
  stretch: string;
  style: string;
  variant: string;
  weight: string;
  lineHeight: string;
  letterSpacing: string;
  color: string;
}

export interface Background {
  background: string;
  color: string;
  image: string;
  imagePosition: string;
  ImageSize: string;
}

export interface Theme {
  font: Font;
  background: Background;
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

export interface FlipCard {
  width: string;
  border: string;
  borderRadius: string;
  filter: string;
  padding: string;
  opacity: string;
  background: string;
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
  border: string;
  borderRadius: string;
  navIconInactiveOpacity: number;
  background: string;
  pageOne: PageOne;
  pageTwo: PageTwo;
  pageThree: PageThree;
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

export interface Description {
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

export interface Banner {
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

export interface Header {
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

export interface WcmsTheme {
  id: string;
  theme: Theme;
  business: Business;
  logo: Logo;
  flipCard: FlipCard;
  navigation: Navigation;
  title: Title;
  description: Description;
  banner: Banner;
  header: Header;
  gMap: GMap;
  communication: Communication;
  open: Open;
}

export interface RootObjectThemes {
  wcmsThemes: WcmsTheme[];
}
