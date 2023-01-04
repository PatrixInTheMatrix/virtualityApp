import { Component, Input, OnInit } from '@angular/core';
import { WcmsService } from '../../services/wcms.service';

@Component({
  selector: 'jhi-page-quote01',
  templateUrl: './page-quote01.component.html',
  styleUrls: ['./page-quote01.component.scss'],
})
export class PageQuote01Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('PageQuote01Component');
  }
}
