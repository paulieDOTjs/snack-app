import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getSnacks().subscribe((snacks) => {
      console.log(snacks);
    });
  }
}
