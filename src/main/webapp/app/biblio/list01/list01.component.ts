import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'jhi-list01',
  templateUrl: './list01.component.html',
  styleUrls: ['./list01.component.scss']
})
export class List01Component implements OnInit {
  @Input() pageName = 'pageOne';
  selectedProduct = 0;

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    console.warn('List01Component');
    this.zoomProduct(this.selectedProduct)
  }

  getTrustResourceUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  isPair(num: number) : boolean{
    return ( num & 1 ) ? false : true;
  }

  zoomProduct(index: number) : void {

    this.selectedProduct = index;
    const zoomProduct = document.getElementById('zoomProduct') as HTMLElement;
    // zoomProduct.setAttribute('src', src);
    zoomProduct.setAttribute('src', this.wcmsService.JsonWcmsPages[this.wcmsService.getIndex(this.pageName)].list.products[this.selectedProduct].scr);

  }
}
