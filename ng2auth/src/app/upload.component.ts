import { Component } from '@angular/core';

@Component({
  selector: 'upload-component',
  templateUrl : './uploadcomponent.html'
})

export class UploadComponent {
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
}
