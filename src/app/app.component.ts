import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Users List';
  allusers: any;
  selectedarr: [];
  msg: string;

  constructor(private _http: HttpClient) { }
  ngOnInit() {
    this.userList();
  }
  userList() {
    this.allusers = this._http.get('http://localhost:4200/assets/data/user.json')
      .subscribe(data => this.allusers = data);
  }

  changeVehical(value: any | string, index: any) {
    this.selectedarr = this.allusers[index].vehicles[value];
    this.msg = `${this.allusers[index].name} selected ${value} as vehicle`;
  }
}
