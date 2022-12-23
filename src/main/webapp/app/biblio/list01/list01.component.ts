import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'jhi-list01',
  templateUrl: './list01.component.html',
  styleUrls: ['./list01.component.scss']
})
export class List01Component implements OnInit, AfterViewInit {
  @Input() pageName = 'pageOne';

  selectedProduct = 0;

  constructor(public wcmsService: WcmsService,
              public utilsService:UtilsService) {}

  ngOnInit(): void {
    console.warn('List01Component');
  }

  ngAfterViewInit(): void {
    this.zoomProduct(this.selectedProduct);
  }

  zoomProduct(index: number) : void {
    this.selectedProduct = index;
    // SOURCE
    const productPrice = document.getElementById('productPrice'.concat(index.toString())) as HTMLElement;
    const productDescription = document.getElementById('productDescription'.concat(index.toString())) as HTMLElement;
    const productAdditive = document.getElementById('productAdditive'.concat(index.toString())) as HTMLElement;
    // DESTINATION
    const zoomProduct = document.getElementById('zoomProduct') as HTMLElement;
    const zoomProductDescription = document.getElementById('zoomProductDescription') as HTMLElement;
    const zoomProductPrice = document.getElementById('zoomProductPrice') as HTMLElement;

    // IMAGE
    zoomProduct.setAttribute('style', 'background-image:' + this.utilsService.getBgUrl(this.wcmsService.wcmsSelectedPages[this.wcmsService.getIndex(this.pageName)].list.products[this.selectedProduct].src));
    // DESCRIPTION
    zoomProductDescription.innerText = productAdditive.innerText;
    // PRICE
    zoomProductPrice.innerText = productPrice.innerText;
    if(this.wcmsService.wcmsSelectedPages[this.wcmsService.getIndex(this.pageName)].list.products[this.selectedProduct].reducedPrice > 0){
      zoomProductPrice.setAttribute('style', 'text-decoration:line-through');
    }else
    {
      zoomProductPrice.setAttribute('style', 'text-decoration:none');
    }
  }
}
