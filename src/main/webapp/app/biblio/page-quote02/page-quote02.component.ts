import { Component, Input, OnInit } from '@angular/core';
import { WcmsService } from '../../services/wcms.service';

@Component({
  selector: 'jhi-page-quote02',
  templateUrl: './page-quote02.component.html',
  styleUrls: ['./page-quote02.component.scss'],
})
export class PageQuote02Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('PageQuote02Component');
  }
}
