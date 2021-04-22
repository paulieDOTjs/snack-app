import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';
import { ERROR_MESSAGES } from 'src/app/config/errors';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() error: ERROR_MESSAGES;

  @Output() errorEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    timer(4000).subscribe(() => this.clearError());
  }

  clearError() {
    this.errorEvent.emit(ERROR_MESSAGES.CLEAR);
  }
}
