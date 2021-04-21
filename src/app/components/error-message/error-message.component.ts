import { Component, Input, OnInit } from '@angular/core';
import { ERROR_MESSAGES } from 'src/app/config/errors';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() error: ERROR_MESSAGES;

  constructor() {}

  ngOnInit(): void {}
}
