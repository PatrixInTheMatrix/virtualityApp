import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-shop05',
  templateUrl: './shop05.component.html',
  styleUrls: ['./shop05.component.scss']
})
export class Shop05Component implements OnInit {
  @Input() pageName = 'pageOne';
  isZoomedProduct = true;

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('Shop05Component');
  }

  switchView() : void {
    this.isZoomedProduct = !this.isZoomedProduct;
  }
}
