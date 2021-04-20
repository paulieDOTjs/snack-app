import { Component, Input, OnInit } from '@angular/core';
import { snack } from '../../models/snack';

@Component({
  selector: 'app-snack-card',
  templateUrl: './snack-card.component.html',
  styleUrls: ['./snack-card.component.scss'],
})
export class SnackCardComponent implements OnInit {
  @Input() snack: snack;

  constructor() {}

  ngOnInit(): void {}
}
