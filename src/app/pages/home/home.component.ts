import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.sayHello().subscribe(
      (hello: any) => {
        console.log('Server is up and running');
      },
      (err) => {
        console.error(err.message);
      }
    );
  }
}
