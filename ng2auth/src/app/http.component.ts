import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import {Http, Response} from '@angular/http';

@Component({
  selector: 'http-component',
  templateUrl : 'http.component.html'
})

export class HTTPComponent {
  data: Object;
  loading: boolean;


  constructor(private httpService: HttpService,public http: Http) {}
  items: any[] = [];
  asyncString = this.httpService.getData();
  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email: email})
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }
  onGetData() {
    this.httpService.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }
  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}
