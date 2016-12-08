import { Component } from '@angular/core';

@Component({
  selector: 'submit-property',
  templateUrl : './submit-property.component.html'
})

export class SubmitPropertyComponent {
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost:10050/upload'
  };

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public melktype:Array<string> = ['خانه','آپارتمان' ,'زمین'];

  public cities:Array<string> = ['تهران', 'رشت', 'کرج', 'مشهد',
    'اصفهان', 'تبریز', 'شیراز', 'اهواز', 'قم',
    'کرمانشاه', 'ارومیه', 'زاهدان', 'کرمان', 'همدان', 'اراک',
    'یزد', 'اردبیل', 'بندرعباس', 'قزوین', 'زنجان', 'گرگان',
    'ساری', 'دزفول', 'آبادان', 'بوشهر', 'بوشهر', 'بروجرد', 'خرم‌آباد',
    'سنندج', 'اسلام‌شهر', 'کاشان', 'نجف‌آباد', 'ایلام', 'کیش', 'بیرجند',
    'سمنان', 'شهرکرد', 'بندر ماهشهر', 'یاسوج', 'بجنورد', 'بهبهان', 'سبزوار',
    ' مسجد سلیمان', 'نیشابور', 'شوشتر', 'قشم', 'بانه', 'آمل',
    'بابل', 'قائم‌شهر', 'ساوه', 'زابل'];
  
  public karbary:Array<string> = ['تجاری', 'مسکونی'];

  public sanadtype:Array<string> = ['شهری', 'روستایی'];

  
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}
