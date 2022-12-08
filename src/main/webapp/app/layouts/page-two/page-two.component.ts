import { Component, OnInit } from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
})
export class PageTwoComponent implements OnInit {
  pageName = 'pageTwo';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('PageTwoComponent');
  }
}
