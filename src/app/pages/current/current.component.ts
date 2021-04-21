import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit {
  snacks = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getSnacks().subscribe((data: any[]) => {
      this.snacks = data.sort((a, b) => b.votes - a.votes);
    });
  }
}
