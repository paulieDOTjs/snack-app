import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getMonth(): string {
    return JSON.parse(localStorage.getItem('date')) as string;
  }

  setDate() {
    localStorage.setItem(
      'date',
      JSON.stringify(new Date().getMonth().toString())
    );
  }

  getVotes(): string[] {
    return JSON.parse(localStorage.getItem('votes')) as string[];
  }

  setVotes(votes: string[]) {
    localStorage.setItem('votes', JSON.stringify(votes));
  }
}
