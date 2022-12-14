import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  create = true;
  edit = false;
  name = '';
  ram = 0;
  memmory = 0;
  price = 0;
  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http
      .post<any>('http://localhost:5000/api/phone', {
        name: this.name,
        ram: this.ram,
        memmory: this.memmory,
        price: this.price,
      })
      .subscribe({
        next: (data) => {
          window.location.reload();
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  ngOnInit(): void {}
}
