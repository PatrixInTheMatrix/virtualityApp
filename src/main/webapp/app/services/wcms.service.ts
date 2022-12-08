import { Injectable } from '@angular/core';
import _JsonWcmsThemes from '../../content/json/dwd-themes.json';
import _JsonWcmsPages from '../../content/json/dwd-pages.json';
import { RootObjectThemes } from '../interfaces/theme.interface';
import {RootObjectPages} from "../interfaces/page.interface";

@Injectable({
  providedIn: 'root',
})
export class WcmsService {
  // THEMES
  rootWcmsThemes = _JsonWcmsThemes as RootObjectThemes;
  JsonWcmsThemes = this.rootWcmsThemes.wcmsThemes;
  wcmsSelectedTheme = this.JsonWcmsThemes[0].theme;
  wcmsSelectedTitle = this.JsonWcmsThemes[0].title;
  wcmsSelectedGMap = this.JsonWcmsThemes[0].gMap;
  wcmsSelectedSocialMedia = this.JsonWcmsThemes[0].socialMedia;
  wcmsSelectedCommunication = this.JsonWcmsThemes[0].communication;
  // PAGES
  rootWcmsPages = _JsonWcmsPages as RootObjectPages;
  JsonWcmsPages = this.rootWcmsPages.wcmsPages;

  // constructor() {}

  setSelectedTheme(themeNr: number): void {
    this.wcmsSelectedTheme = this.JsonWcmsThemes[themeNr].theme;
    this.wcmsSelectedTitle = this.JsonWcmsThemes[themeNr].title;
    this.wcmsSelectedGMap = this.JsonWcmsThemes[themeNr].gMap;
    this.wcmsSelectedSocialMedia = this.JsonWcmsThemes[themeNr].socialMedia;
    this.wcmsSelectedCommunication = this.JsonWcmsThemes[themeNr].communication;

    document.documentElement.style.setProperty('--bs-body-font-family', this.wcmsSelectedTheme.fontFamily);
    document.documentElement.style.setProperty('--bs-body-font-size', this.wcmsSelectedTheme.fontSize);
    document.documentElement.style.setProperty('--bs-body-font-weight', this.wcmsSelectedTheme.fontWeight);

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
