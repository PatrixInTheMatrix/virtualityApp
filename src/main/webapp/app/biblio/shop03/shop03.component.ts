import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-shop03',
  templateUrl: './shop03.component.html',
  styleUrls: ['./shop03.component.scss']
})
export class Shop03Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('Shop03Component');
  }
}
