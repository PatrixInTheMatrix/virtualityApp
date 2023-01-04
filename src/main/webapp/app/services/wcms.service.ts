import { Injectable } from '@angular/core';
import _JsonWcmsGlobal from '../../content/json/dwd-global.json';
import _JsonWcmsThemes from '../../content/json/dwd-themes.json';
import _JsonWcmsPages from '../../content/json/dwd-pages.json';
import { RootObjectThemes } from '../interfaces/theme.interface';
import { RootObjectPages } from '../interfaces/page.interface';
import { RootObjectGlobal } from '../interfaces/global.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WcmsService {
  // BUBBLE-ANGEBOT
  pubBubble = false;
  // BLINK-HAND
  pubHand = false;
  // HOMEPAGE-AUSWAHL
  pubSelect = true;

  // INITIAL CLIENT
  wcmsClient = 'flower';
  // flag for activePage
  navigationActivePage = 'pageOne';
  // PATH
  wcmsClientRoot = 'virtuality.' + this.wcmsClient.toLowerCase() + '.';
  // GLOBAL
  rootWcmsGlobal = _JsonWcmsGlobal as RootObjectGlobal;
  JsonWcmsGlobal = this.rootWcmsGlobal.wcmsGlobal;
  // THEMES
  userInfo: any;
  urlTheme = 'https://virtuality.diwidi.net/api/dwd-themes.json';
  rootWcmsThemes = _JsonWcmsThemes as RootObjectThemes;
  JsonWcmsThemes = this.rootWcmsThemes.wcmsThemes;
  wcmsSelectedClient = this.JsonWcmsThemes[0];
  wcmsSelectedTheme = this.JsonWcmsThemes[0].theme;
  wcmsSelectedLogo = this.JsonWcmsThemes[0].logo;
  wcmsSelectedBusiness = this.JsonWcmsThemes[0].business;
  wcmsSelectedFlipCard = this.JsonWcmsThemes[0].flipCard;
  wcmsSelectedButtonSymbol = this.JsonWcmsThemes[0].buttonSymbol;
  wcmsSelectedNavigation = this.JsonWcmsThemes[0].navigation;
  wcmsSelectedQuote = this.JsonWcmsThemes[0].quote;
  wcmsSelectedTitle = this.JsonWcmsThemes[0].title;
  wcmsSelectedService = this.JsonWcmsThemes[0].service;
  wcmsSelectedDescription = this.JsonWcmsThemes[0].description;
  wcmsSelectedBanner = this.JsonWcmsThemes[0].banner;
  wcmsSelectedImpress = this.JsonWcmsThemes[0].impress;
  wcmsSelectedSocialMedia = this.JsonWcmsThemes[0].socialMedia;
  wcmsSelectedHeader = this.JsonWcmsThemes[0].header;
  wcmsSelectedGMap = this.JsonWcmsThemes[0].gMap;
  wcmsSelectedCommunication = this.JsonWcmsThemes[0].communication;
  wcmsSelectedOpen = this.JsonWcmsThemes[0].open;
  // PAGES
  rootWcmsPages = _JsonWcmsPages as RootObjectPages;
  JsonWcmsPages = this.rootWcmsPages.wcmsThemeForPages;
  wcmsSelectedPages = this.JsonWcmsPages[0].wcmsPages;

  constructor(private httpClient: HttpClient) {}

  getTheme(): void {
    console.warn('getTheme');
    // READ
    this.httpClient.get(this.urlTheme).subscribe(response => {
      this.userInfo = response;
      this.rootWcmsThemes = <RootObjectThemes>this.userInfo;
      this.JsonWcmsThemes = this.rootWcmsThemes.wcmsThemes;
    });
  }

  saveTheme(): void {
    // WRITE
    const theJSON = JSON.stringify(this.wcmsSelectedClient);
    const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(theJSON);
    window.open(uri);
    /*
    const a = document.createElement('a');
    a.href = uri;
    a.innerHTML = "Recht-click und auswählen 'Ziel speichern unter...'";
    document.body.appendChild(a);
     */
  }

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

    this.wcmsSelectedClient = this.JsonWcmsThemes[themeNr];
    this.wcmsSelectedTheme = this.JsonWcmsThemes[themeNr].theme;
    this.wcmsSelectedLogo = this.JsonWcmsThemes[themeNr].logo;
    this.wcmsSelectedBusiness = this.JsonWcmsThemes[themeNr].business;
    this.wcmsSelectedFlipCard = this.JsonWcmsThemes[themeNr].flipCard;
    this.wcmsSelectedButtonSymbol = this.JsonWcmsThemes[themeNr].buttonSymbol;
    this.wcmsSelectedNavigation = this.JsonWcmsThemes[themeNr].navigation;
    this.wcmsSelectedQuote = this.JsonWcmsThemes[themeNr].quote;
    this.wcmsSelectedTitle = this.JsonWcmsThemes[themeNr].title;
    this.wcmsSelectedService = this.JsonWcmsThemes[themeNr].service;
    this.wcmsSelectedDescription = this.JsonWcmsThemes[themeNr].description;
    this.wcmsSelectedBanner = this.JsonWcmsThemes[themeNr].banner;
    this.wcmsSelectedHeader = this.JsonWcmsThemes[themeNr].header;
    this.wcmsSelectedImpress = this.JsonWcmsThemes[themeNr].impress;
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
    document.documentElement.style.setProperty(
      '--nav-icon-inactive-opacity',
      this.wcmsSelectedNavigation.navIconInactiveOpacity.toString()
    );

    // IMPRESS
    document.documentElement.style.setProperty('--bs-impress-font-family', this.wcmsSelectedImpress.font.family);
    document.documentElement.style.setProperty('--bs-impress-font-size', this.wcmsSelectedImpress.font.size);
    document.documentElement.style.setProperty('--bs-impress-font-weight', this.wcmsSelectedImpress.font.weight);
    document.documentElement.style.setProperty('--bs-impress-font-stretch', this.wcmsSelectedImpress.font.stretch);
    document.documentElement.style.setProperty('--bs-impress-font-style', this.wcmsSelectedImpress.font.style);
    document.documentElement.style.setProperty('--bs-impress-font-variant', this.wcmsSelectedImpress.font.variant);
    document.documentElement.style.setProperty('--bs-impress-color', this.wcmsSelectedImpress.font.color);
    document.documentElement.style.setProperty('--bs-impress-line-height', this.wcmsSelectedImpress.font.lineHeight);
    document.documentElement.style.setProperty('--bs-impress-letter-spacing', this.wcmsSelectedImpress.font.letterSpacing);

    // ButtonSymbol
    document.documentElement.style.setProperty('--bs-btn-symbol-font-family', this.wcmsSelectedButtonSymbol.font.family);
    document.documentElement.style.setProperty('--bs-btn-symbol-font-size', this.wcmsSelectedButtonSymbol.font.size);
    document.documentElement.style.setProperty('--bs-btn-symbol-font-weight', this.wcmsSelectedButtonSymbol.font.weight);
    document.documentElement.style.setProperty('--bs-btn-symbol-font-stretch', this.wcmsSelectedButtonSymbol.font.stretch);
    document.documentElement.style.setProperty('--bs-btn-symbol-font-style', this.wcmsSelectedButtonSymbol.font.style);
    document.documentElement.style.setProperty('--bs-btn-symbol-font-variant', this.wcmsSelectedButtonSymbol.font.variant);
    document.documentElement.style.setProperty('--bs-btn-symbol-color', this.wcmsSelectedButtonSymbol.font.color);
    document.documentElement.style.setProperty('--bs-btn-symbol-line-height', this.wcmsSelectedButtonSymbol.font.lineHeight);
    document.documentElement.style.setProperty('--bs-btn-symbol-letter-spacing', this.wcmsSelectedButtonSymbol.font.letterSpacing);
    document.documentElement.style.setProperty('--bs-btn-symbol-background', this.wcmsSelectedButtonSymbol.background);
    document.documentElement.style.setProperty('--bs-btn-symbol-border', this.wcmsSelectedButtonSymbol.border);
    document.documentElement.style.setProperty('--bs-btn-symbol-borderRadius', this.wcmsSelectedButtonSymbol.borderRadius);
    document.documentElement.style.setProperty('--bs-btn-symbol-boxShadow', this.wcmsSelectedButtonSymbol.boxShadow);
    document.documentElement.style.setProperty('--bs-btn-symbol-filter', this.wcmsSelectedButtonSymbol.filter);
    document.documentElement.style.setProperty('--bs-btn-symbol-padding', this.wcmsSelectedButtonSymbol.padding);
    document.documentElement.style.setProperty('--bs-btn-symbol-margin', this.wcmsSelectedButtonSymbol.margin);

    // QUOTE
    document.documentElement.style.setProperty('--bs-quote-symbol-color', this.wcmsSelectedQuote.mat.color);
    document.documentElement.style.setProperty('--bs-quote-symbol-size', this.wcmsSelectedQuote.mat.size);

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

  makeMeActive(activePageName: string): void {
    this.navigationActivePage = 'activePageName';
  }
}
