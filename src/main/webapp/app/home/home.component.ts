import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { VERSION } from 'app/app.constants';
import { LANGUAGES } from 'app/config/language.constants';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { TranslateService } from '@ngx-translate/core';
import { SessionStorageService } from 'ngx-webstorage';
import {WcmsService} from "../services/wcms.service";

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // INITIAL CLIENT
  client = "foot";
  // FOCUS TO CHOICE THE CLIENT
  blinkOnFocus= true;

  languages = LANGUAGES;
  version = '';

  account: Account | null = null;
  showImpressum = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private router: Router,
    public translateService: TranslateService,
    private sessionStorageService: SessionStorageService,
    public wcmsService: WcmsService
  ) {
    if (VERSION) {
      this.version = VERSION.toLowerCase().startsWith('v') ? VERSION : `v${VERSION}`;
    }
  }

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));

    this.wcmsService.setSelectedTheme(this.client);
  }

  login(): void {
    this.router.navigate(['/login']).then();
  }

  changeLanguage(languageKey: string): void {
    this.sessionStorageService.store('locale', languageKey);
    this.translateService.use(languageKey);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  makeMeHover(minute: number): void {
    minute = minute * 60 * 1000;
    document.getElementById('flipMe')!.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      // <<<---using ()=> syntax
      document.getElementById('flipMe')!.style.transform = 'rotateY(0)';
    }, minute);
  }

  impressMe(): void {
    this.showImpressum = !this.showImpressum;
    if (this.showImpressum){
      setTimeout(() => {
        this.showImpressum = false;
      }, 20000);
    }
  }

  hideTheFocus(): void {
    this.blinkOnFocus = false;
  }
}
