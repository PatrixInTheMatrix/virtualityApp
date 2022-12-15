import { Injectable } from '@angular/core';
import _JsonWcmsThemes from '../../content/json/dwd-themes.json';
import _JsonWcmsPages from '../../content/json/dwd-pages.json';
import { RootObjectThemes } from '../interfaces/theme.interface';
import { RootObjectPages } from '../interfaces/page.interface';

@Injectable({
  providedIn: 'root',
})
export class WcmsService {
  wcmsClient = 'demo';
  wcmsClientRoot = 'virtuality.demo.';
  // THEMES
  rootWcmsThemes = _JsonWcmsThemes as RootObjectThemes;
  JsonWcmsThemes = this.rootWcmsThemes.wcmsThemes;
  wcmsSelectedTheme = this.JsonWcmsThemes[0].theme;
  wcmsSelectedLogo = this.JsonWcmsThemes[0].logo;
  wcmsSelectedBusiness = this.JsonWcmsThemes[0].business
  wcmsSelectedFlipCard = this.JsonWcmsThemes[0].flipCard;
  wcmsSelectedNavigation = this.JsonWcmsThemes[0].navigation;
  wcmsSelectedLanguage = this.JsonWcmsThemes[0].language;
  wcmsSelectedTitle = this.JsonWcmsThemes[0].title;
  wcmsSelectedGMap = this.JsonWcmsThemes[0].gMap;
  wcmsSelectedSocialMedia = this.JsonWcmsThemes[0].socialMedia;
  wcmsSelectedCommunication = this.JsonWcmsThemes[0].communication;
  wcmsSelectedOpen = this.JsonWcmsThemes[0].open;
  // PAGES
  rootWcmsPages = _JsonWcmsPages as RootObjectPages;
  JsonWcmsPages = this.rootWcmsPages.wcmsThemeForPages;
  wcmsSelectedPages = this.JsonWcmsPages[0].wcmsPages;

  // constructor() {}

  setSelectedTheme(client: string): void {
    let themeNr = 0;
    for(let i = 0; i < this.JsonWcmsThemes.length; i++){
      if(this.JsonWcmsThemes[i].id.toLowerCase() === client.toLowerCase()){
        themeNr = i;
        this.wcmsClient = client;
        this.wcmsClientRoot = 'virtuality.' + this.JsonWcmsThemes[i].id.toLowerCase() + '.';
      }
    }

    this.wcmsSelectedTheme = this.JsonWcmsThemes[themeNr].theme;
    this.wcmsSelectedLogo = this.JsonWcmsThemes[themeNr].logo;
    this.wcmsSelectedBusiness = this.JsonWcmsThemes[themeNr].business;
    this.wcmsSelectedFlipCard = this.JsonWcmsThemes[themeNr].flipCard;
    this.wcmsSelectedNavigation = this.JsonWcmsThemes[themeNr].navigation;
    this.wcmsSelectedLanguage = this.JsonWcmsThemes[themeNr].language;
    this.wcmsSelectedTitle = this.JsonWcmsThemes[themeNr].title;
    this.wcmsSelectedGMap = this.JsonWcmsThemes[themeNr].gMap;
    this.wcmsSelectedSocialMedia = this.JsonWcmsThemes[themeNr].socialMedia;
    this.wcmsSelectedCommunication = this.JsonWcmsThemes[themeNr].communication;
    this.wcmsSelectedOpen = this.JsonWcmsThemes[themeNr].open;

    this.wcmsSelectedPages = this.JsonWcmsPages[themeNr].wcmsPages;

    document.documentElement.style.setProperty('--bs-body-font-family', this.wcmsSelectedTheme.fontFamily);
    document.documentElement.style.setProperty('--bs-body-font-size', this.wcmsSelectedTheme.fontSize);
    document.documentElement.style.setProperty('--bs-body-font-weight', this.wcmsSelectedTheme.fontWeight);

    document.documentElement.style.setProperty('--bs-body-image', "url('" + this.wcmsSelectedTheme.backgroundImage + "')");
    document.documentElement.style.setProperty('--bs-body-color', this.wcmsSelectedTheme.color);
    document.documentElement.style.setProperty('--bs-body-bgColor', this.wcmsSelectedTheme.backgroundColor);

    document.documentElement.style.setProperty('--bs-body-line-height', this.wcmsSelectedTheme.lineHeight);
    document.documentElement.style.setProperty('--bs-body-letter-spacing', this.wcmsSelectedTheme.letterSpacing);

    document.documentElement.style.setProperty('--dwd-placeholder-color', 'silver');
  }

  getIndex(pageName: string) : number {
    let index = 0;
    switch(pageName){
      case 'pageOne': index = 0;
        break;
      case 'pageTwo': index = 1;
        break;
      case 'pageThree': index = 2;
        break;
    }
    return index;
  }
}
