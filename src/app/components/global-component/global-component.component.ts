import { Component, OnInit } from '@angular/core';
import { ERROR_MESSAGES } from 'src/app/config/errors';

@Component({
  selector: 'app-global-component',
  templateUrl: './global-component.component.html',
  styleUrls: ['./global-component.component.scss'],
})
export class GlobalComponentComponent implements OnInit {
  error: ERROR_MESSAGES = ERROR_MESSAGES.CLEAR;
  errorTimer: boolean;

  constructor() {}

  ngOnInit(): void {}

  receiveError(errorEvent: ERROR_MESSAGES) {
    this.error = errorEvent;
  }
}
