import { Component, OnInit } from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-page-impress',
  templateUrl: './page-impress.component.html',
  styleUrls: ['./page-impress.component.scss'],
})
export class PageImpressComponent implements OnInit {
  pageName = 'pageOne';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('PageImpressComponent');
  }
}
