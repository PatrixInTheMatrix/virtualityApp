import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'jhi-gallery01',
  templateUrl: './gallery01.component.html',
  styleUrls: ['./gallery01.component.scss']
})
export class Gallery01Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService,
              public utilsService:UtilsService) {}

  ngOnInit(): void {
    console.warn('Gallery01Component');
  }

  makeMeHover(index: number) : void{
    const galleryItem = document.getElementById('galleryItem'.concat(index.toString()));
    const galleryLi = document.getElementById('galleryLi'.concat(index.toString()));
    const active = "z-index: 1; --_i: 1; transition: transform .2s, clip-path .3s .2s, z-index 0s;";
    const inactive = "z-index: 0; --_i: 0; transition: transform .2s, clip-path .3s .2s, z-index 0s;";

    this.resetHover();

    if(galleryItem!.getAttribute('active') === 'false') {
      galleryLi!.setAttribute('style', 'border-left: solid ; border-right: solid white; margin-left: -1em;');
      galleryItem!.setAttribute('active', 'true');
      galleryItem!.setAttribute('style', active);
    }else{
      galleryLi!.setAttribute('style', 'border:none; margin-left: 0;');
      galleryItem!.setAttribute('active', 'false');
      galleryItem!.setAttribute('style', inactive);
    }

  }

  resetHover() : void{
    const inactive = "z-index: 0; --_i: 0; transition: transform .2s, clip-path .3s .2s, z-index 0s;";

    for(let i=0; i < this.wcmsService.wcmsSelectedPages[this.wcmsService.getIndex(this.pageName)].gallery.images.length; i++){
      document.getElementById('galleryLi'.concat(i.toString()))!.setAttribute('style', 'border:none');
      // document.getElementById('galleryItem'.concat(i.toString()))!.setAttribute('active', 'false');
      document.getElementById('galleryItem'.concat(i.toString()))!.setAttribute('style', inactive);
    }
  }

}
