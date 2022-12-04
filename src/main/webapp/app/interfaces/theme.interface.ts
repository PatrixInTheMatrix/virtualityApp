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

export interface WcmsTheme {
  id: string;
  theme: Theme;
  title: Title;
}

export interface RootObjectThemes {
  wcmsThemes: WcmsTheme[];
}
