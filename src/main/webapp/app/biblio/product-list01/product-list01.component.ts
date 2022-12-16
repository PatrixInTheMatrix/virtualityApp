import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-product-list01',
  templateUrl: './product-list01.component.html',
  styleUrls: ['./product-list01.component.scss']
})
export class ProductList01Component implements OnInit {
  @Input() pageName = 'pageOne';
  @Input() isGastro = false;

  isZoomedProduct = true;

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('ProductList01Component');
  }

  switchView() : void {
    this.isZoomedProduct = !this.isZoomedProduct;
  }
}
