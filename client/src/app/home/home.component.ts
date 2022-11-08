import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  selectForm() {
    if (this.form) {
      this.form = false;
    } else {
      this.form = true;
    }
  }
}
