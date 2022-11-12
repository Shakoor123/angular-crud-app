import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cards: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:5000/api/phone').subscribe({
      next: (data) => {
        console.log(data);
        this.cards = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
  onDelete(phoneId: string) {
    this.http
      .delete<any>(`http://localhost:5000/api/phone/${phoneId}`)
      .subscribe({
        next: (data) => {
          console.log(data);
          if (data.deletedCount == 1) {
            window.location.reload();
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
