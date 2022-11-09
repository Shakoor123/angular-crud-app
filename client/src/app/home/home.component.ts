import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form: boolean = true;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  selectForm() {
    if (this.form) {
      this.form = false;
    } else {
      this.form = true;
    }
  }
}
