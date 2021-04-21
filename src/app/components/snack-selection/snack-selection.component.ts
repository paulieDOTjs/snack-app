import { Component, Input, OnInit } from '@angular/core';
import find from 'lodash.find';
import { snack } from 'src/app/models/snack';

@Component({
  selector: 'app-snack-selection',
  templateUrl: './snack-selection.component.html',
  styleUrls: ['./snack-selection.component.scss'],
})
export class SnackSelectionComponent implements OnInit {
  @Input() snacks: snack[];
  @Input() snackVote: string[];
  snack: snack;

  constructor() {}

  ngOnInit(): void {
    this.snack = find(this.snacks, { id: this.snackVote });
  }
}
