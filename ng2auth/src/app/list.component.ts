import { Component } from '@angular/core';

class ContactInfo {
  constructor(public description: string) {}
}



@Component({
  selector: 'list-component',
  templateUrl : 'list.component.html' ,
  styles: [
    '.box {width:300px; height:200px; border: 1px solid LightGray; padding: 10px;}',
    '.type {font-size: 30px;}'
  ]
})
export class ListComponent {

  private event: MouseEvent;
  private clientX = 0;
  private clientY = 0;

  private onEvent(event: MouseEvent): void {
    this.event = event;
  }

  private coordinates(event: MouseEvent):void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
  }

  information = [
    new ContactInfo('HTML5 = Regards DOM'),
    new ContactInfo('CSS3 = Regards DOM styling')
  ];

  myInfo = this.information[0];

  addInfo(newInfo: string) {
    if (newInfo) {
      this.information.push(new ContactInfo(newInfo));
    }
  }

}
