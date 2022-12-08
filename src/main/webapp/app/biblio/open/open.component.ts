import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {

  currentDate = new Date();
  minDate = new Date();
  maxDate = new Date();
  // constructor() { }

  ngOnInit(): void {
    this.matchOpeningTime();
  }

  getDayOfTheWeek(day: number): string{
    const week = ['','Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    return week[day];
  }

  matchOpeningTime(): void{
    const today = this.getDayOfTheWeek(this.currentDate.getDay());

    const openItems = document.getElementsByClassName('open') as HTMLCollection;

    const openTextItems = document.getElementsByClassName('openText') as HTMLCollection;
    for(let j=0; j < openTextItems.length; j++){
      openTextItems[j].setAttribute('style', 'visibility:hidden')
    }

    for(let i=0; i < openItems.length; i++){
      const attrDays = openItems[i].getAttribute('days');
      const attrMinH = openItems[i].getAttribute('minH');
      const attrMaxH = openItems[i].getAttribute('maxH');
      const attrMinM = openItems[i].getAttribute('minM');
      const attrMaxM = openItems[i].getAttribute('maxM');

      if(attrMinH !== null && attrMinM !== null){
        this.minDate.setHours(parseInt(attrMinH, 10),parseInt(attrMinM, 10),0);
      }

      if(attrMaxH !== null && attrMaxM !== null){
        this.maxDate.setHours(parseInt(attrMaxH, 10),parseInt(attrMaxM, 10),0);
      }

      console.warn(this.currentDate);
      console.warn(this.minDate);
      console.warn(this.maxDate);

      if( -1 < attrDays!.indexOf(today)) {
        if (this.minDate.getTime() <= this.currentDate.getTime() && this.maxDate.getTime() >= this.currentDate.getTime()) {
          // OPEN
          openItems[i].setAttribute("style", "color:blue");
        } else {
          // WILL BE OPEN AGAIN
          if(this.maxDate.getTime() >= this.currentDate.getTime()){
            openTextItems[i].setAttribute('style', 'visibility:visible')
            openItems[i].setAttribute("style", "color:grey");
          }
        }
      }else{
        openItems[i].setAttribute("style", "color:grey");
      }

    }
  }

}
