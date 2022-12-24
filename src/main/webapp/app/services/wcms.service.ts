import { Injectable } from '@angular/core';
import _JsonWcmsGlobal from '../../content/json/dwd-global.json';
import _JsonWcmsThemes from '../../content/json/dwd-themes.json';
import _JsonWcmsPages from '../../content/json/dwd-pages.json';
import { RootObjectThemes } from '../interfaces/theme.interface';
import { RootObjectPages } from '../interfaces/page.interface';
import { RootObjectGlobal } from "../interfaces/global.interface";

@Injectable({
  providedIn: 'root',
})
export class WcmsService {
  // PUBLICITÉ - WERBUNG
  pub = false;
  // INITIAL CLIENT
  wcmsClient = 'animal';
  // PATH
  wcmsClientRoot = 'virtuality.' + this.wcmsClient.toLowerCase() + '.';
  // GLOBAL
  rootWcmsGlobal = _JsonWcmsGlobal as RootObjectGlobal
  JsonWcmsGlobal = this.rootWcmsGlobal.wcmsGlobal;

  // THEMES
  rootWcmsThemes = _JsonWcmsThemes as RootObjectThemes;
  JsonWcmsThemes = this.rootWcmsThemes.wcmsThemes;
  wcmsSelectedTheme = this.JsonWcmsThemes[0].theme;
  wcmsSelectedLogo = this.JsonWcmsThemes[0].logo;
  wcmsSelectedBusiness = this.JsonWcmsThemes[0].business;
  wcmsSelectedFlipCard = this.JsonWcmsThemes[0].flipCard;
  wcmsSelectedNavigation = this.JsonWcmsThemes[0].navigation;
  wcmsSelectedTitle = this.JsonWcmsThemes[0].title;
  wcmsSelectedService = this.JsonWcmsThemes[0].service;
  wcmsSelectedDescription = this.JsonWcmsThemes[0].description;
  wcmsSelectedBanner = this.JsonWcmsThemes[0].banner;
  wcmsSelectedHeader = this.JsonWcmsThemes[0].header;
  wcmsSelectedSocialMedia = this.JsonWcmsThemes[0].socialMedia;
  wcmsSelectedGMap = this.JsonWcmsThemes[0].gMap;
  wcmsSelectedCommunication = this.JsonWcmsThemes[0].communication;
  wcmsSelectedOpen = this.JsonWcmsThemes[0].open;
  // PAGES
  rootWcmsPages = _JsonWcmsPages as RootObjectPages;
  JsonWcmsPages = this.rootWcmsPages.wcmsThemeForPages;
  wcmsSelectedPages = this.JsonWcmsPages[0].wcmsPages;

  // constructor() {}

  setSelectedTheme(client: string): void {
    let themeNr = 0;
    let pageNr = 0;

    for (let i = 0; i < this.JsonWcmsThemes.length; i++) {
      if (this.JsonWcmsThemes[i].id.toLowerCase() === client.toLowerCase()) {
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
    this.wcmsSelectedTitle = this.JsonWcmsThemes[themeNr].title;
    this.wcmsSelectedService = this.JsonWcmsThemes[themeNr].service;
    this.wcmsSelectedDescription = this.JsonWcmsThemes[themeNr].description;
    this.wcmsSelectedBanner = this.JsonWcmsThemes[themeNr].banner;
    this.wcmsSelectedHeader = this.JsonWcmsThemes[themeNr].header;
    this.wcmsSelectedSocialMedia = this.JsonWcmsThemes[themeNr].socialMedia;
    this.wcmsSelectedGMap = this.JsonWcmsThemes[themeNr].gMap;
    this.wcmsSelectedCommunication = this.JsonWcmsThemes[themeNr].communication;
    this.wcmsSelectedOpen = this.JsonWcmsThemes[themeNr].open;

    for (let i = 0; i < this.JsonWcmsPages.length; i++) {
      if (this.JsonWcmsPages[i].id.toLowerCase() === client.toLowerCase()) {
        pageNr = i;
      }
    }
    this.wcmsSelectedPages = this.JsonWcmsPages[pageNr].wcmsPages;

    // GENERAL
    document.documentElement.style.setProperty('--bs-body-filter', this.wcmsSelectedTheme.filter);

    // FONT
    document.documentElement.style.setProperty('--bs-body-font-family', this.wcmsSelectedTheme.font.family);
    document.documentElement.style.setProperty('--bs-body-font-size', this.wcmsSelectedTheme.font.size);
    document.documentElement.style.setProperty('--bs-body-font-weight', this.wcmsSelectedTheme.font.weight);
    document.documentElement.style.setProperty('--bs-body-font-stretch', this.wcmsSelectedTheme.font.stretch);
    document.documentElement.style.setProperty('--bs-body-font-style', this.wcmsSelectedTheme.font.style);
    document.documentElement.style.setProperty('--bs-body-font-variant', this.wcmsSelectedTheme.font.variant);
    document.documentElement.style.setProperty('--bs-body-color', this.wcmsSelectedTheme.font.color);
    document.documentElement.style.setProperty('--bs-body-line-height', this.wcmsSelectedTheme.font.lineHeight);
    document.documentElement.style.setProperty('--bs-body-letter-spacing', this.wcmsSelectedTheme.font.letterSpacing);

    // BACKGROUND
    document.documentElement.style.setProperty('--bs-body-bgColor', this.wcmsSelectedTheme.background.color);
    document.documentElement.style.setProperty('--bs-body-image', "url('" + this.wcmsSelectedTheme.background.image + "')");
    document.documentElement.style.setProperty('--bs-body-image-position', this.wcmsSelectedTheme.background.imagePosition);
    document.documentElement.style.setProperty('--bs-body-image-size', this.wcmsSelectedTheme.background.ImageSize);
    if (this.wcmsSelectedTheme.background.background) {
      document.documentElement.setAttribute('style', 'background:' + this.wcmsSelectedTheme.background.background);
    }

    // NAVIGATION
    if (typeof this.wcmsSelectedNavigation.navIconInactiveOpacity === 'undefined') {
      this.wcmsSelectedNavigation.navIconInactiveOpacity = 0.3;
    }
    document.documentElement.style.setProperty('--nav-icon-inactive-opacity', this.wcmsSelectedNavigation.navIconInactiveOpacity.toString());

    // INPUT
    // document.documentElement.style.setProperty('--dwd-placeholder-color', 'silver');
  }

  getIndex(pageName: string): number {
    let index = 0;
    switch (pageName) {
      case 'pageOne':
        index = 0;
        break;
      case 'pageTwo':
        index = 1;
        break;
      case 'pageThree':
        index = 2;
        break;
    }
    return index;
  }
}
