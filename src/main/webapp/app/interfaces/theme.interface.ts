
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

export interface Font2 {
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

export interface Title {
  on: boolean;
  font: Font2;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface Font3 {
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

export interface Service {
  on: boolean;
  font: Font3;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface Back {
  title: Title;
  service: Service;
}

export interface FlipCard {
  width: string;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
  opacity: string;
  back: Back;
}

export interface Font4 {
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

export interface ButtonSymbol {
  font: Font4;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
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

export interface Font5 {
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

export interface Title2 {
  on: boolean;
  font: Font5;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface Font6 {
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

export interface Service2 {
  on: boolean;
  font: Font6;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface Font7 {
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

export interface Description {
  on: boolean;
  font: Font7;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface Font8 {
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

export interface Banner {
  on: boolean;
  font: Font8;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface Font9 {
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

export interface Impress {
  font: Font9;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface SocialMedia {
  on: boolean;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
}

export interface Font10 {
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

export interface Header {
  on: boolean;
  font: Font10;
  background: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  filter: string;
  padding: string;
  margin: string;
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

export interface Font11 {
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

export interface Open2 {
  src: string;
}

export interface Close {
  src: string;
}

export interface OpenAgain {
  src: string;
}

export interface Time {
  minH: number;
  minM: number;
  maxH: number;
  maxM: number;
}

export interface Block {
  textOnly: boolean;
  text: string;
  days: string;
  time: Time[];
}

export interface Open {
  font: Font11;
  open: Open2;
  close: Close;
  openAgain: OpenAgain;
  block: Block[];
}

export interface WcmsTheme {
  id: string;
  theme: Theme;
  business: Business;
  logo: Logo;
  flipCard: FlipCard;
  buttonSymbol: ButtonSymbol;
  navigation: Navigation;
  title: Title2;
  service: Service2;
  description: Description;
  banner: Banner;
  impress: Impress;
  socialMedia: SocialMedia;
  header: Header;
  gMap: GMap;
  communication: Communication;
  open: Open;
}

export interface RootObjectThemes {
  wcmsThemes: WcmsTheme[];
}
