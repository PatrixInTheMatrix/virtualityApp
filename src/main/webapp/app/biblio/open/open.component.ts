import { Component, Input, OnInit } from '@angular/core';
import { WcmsService } from '../../services/wcms.service';

@Component({
  selector: 'jhi-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss'],
})
export class OpenComponent implements OnInit {
  @Input() pageName = 'pageOne';

  isOpen = false;
  isOpenAgain = false;
  isTodayButAlreadyPassed = false;

  currentDate = new Date();
  minDate = new Date();
  maxDate = new Date();
  // To reset with original color
  wcmsColor = this.wcmsService.wcmsSelectedTheme.font.color;

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.matchOpeningTime();
    }, 10);
  }

  getDayOfTheWeek(day: number): string {
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return week[day];
  }

  matchOpeningTime(): void {
    this.isOpen = false;
    this.isOpenAgain = false;
    this.isTodayButAlreadyPassed = false;

    const today = this.getDayOfTheWeek(this.currentDate.getDay());
    const openItems = document.getElementsByClassName('open') as HTMLCollection;

    /*
    const openTextItems = document.getElementsByClassName('openText') as HTMLCollection;
    for(let j=0; j < openTextItems.length; j++){
      openTextItems[j].setAttribute('style', 'visibility:hidden')
    }
    */
    for (let i = 0; i < openItems.length; i++) {
      const attrDays = openItems[i].getAttribute('days');
      const attrMinH = openItems[i].getAttribute('minH');
      const attrMaxH = openItems[i].getAttribute('maxH');
      const attrMinM = openItems[i].getAttribute('minM');
      const attrMaxM = openItems[i].getAttribute('maxM');

      if (attrMinH !== null && attrMinM !== null) {
        this.minDate.setHours(parseInt(attrMinH, 10), parseInt(attrMinM, 10), 0);
      }

      if (attrMaxH !== null && attrMaxM !== null) {
        this.maxDate.setHours(parseInt(attrMaxH, 10), parseInt(attrMaxM, 10), 0);
      }

      if (-1 < attrDays!.indexOf(today)) {
        if (this.minDate.getTime() <= this.currentDate.getTime() && this.maxDate.getTime() >= this.currentDate.getTime()) {
          // OPEN
          this.isOpen = true;
          openItems[i].setAttribute('style', 'font-style: italic; font-weight: 900;');
        } else {
          if (this.maxDate.getTime() >= this.currentDate.getTime()) {
            // WILL BE OPEN AGAIN
            if (!this.isOpen && this.isTodayButAlreadyPassed) {
              this.isOpenAgain = true;
              openItems[i].setAttribute('style', 'font-style: italic; font-weight: 900;');
            }
          } else {
            // TODAY BUT ALREADY PASSED
            this.isTodayButAlreadyPassed = true;
            openItems[i].setAttribute('style', 'color:' + this.wcmsColor);
          }
        }
      } else {
        openItems[i].setAttribute('style', 'color:' + this.wcmsColor);
      }
    }
  }
}
