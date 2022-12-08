import { Component, OnInit } from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss'],
})
export class PageThreeComponent implements OnInit {
  pageName = 'pageThree';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('PageThreeComponent');
  }
}
