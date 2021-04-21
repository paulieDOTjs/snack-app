import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getVotes(): string[] {
    return JSON.parse(localStorage.getItem('votes')) as string[];
  }

  setVotes(votes: string[]) {
    localStorage.setItem('votes', JSON.stringify(votes));
  }
}
