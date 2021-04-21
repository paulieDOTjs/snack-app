import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { snack } from 'src/app/models/snack';

@Component({
  selector: 'app-snack-row',
  templateUrl: './snack-row.component.html',
  styleUrls: ['./snack-row.component.scss'],
})
export class SnackRowComponent implements OnInit {
  @Input() snack: snack;
  @Input() votesCast: string[];
  @Input() remaining: number;

  @Output() voteEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  castVote() {
    this.voteEvent.emit(this.snack.id);
  }
}
