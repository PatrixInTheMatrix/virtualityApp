import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-page-quote',
  templateUrl: './page-quote.component.html',
  styleUrls: ['./page-quote.component.scss']
})
export class PageQuoteComponent implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('PageQuoteComponent');
  }
}
