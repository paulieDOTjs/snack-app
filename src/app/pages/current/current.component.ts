import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit {
  public snacks = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getSnacks().subscribe((data: any[]) => {
      this.snacks = data.sort((a, b) => b.votes - a.votes);
      console.log(this.snacks);
    });
  }
}
