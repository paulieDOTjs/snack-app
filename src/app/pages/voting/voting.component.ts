import { Component, OnInit } from '@angular/core';
import { businessLogic } from 'src/app/config/businessLogic';
import { ERROR_MESSAGES } from 'src/app/config/errors';
import { snack } from 'src/app/models/snack';
import { HttpService } from 'src/app/services/http.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
})
export class VotingComponent implements OnInit {
  loading: boolean = true;
  errors: string[] = [];

  snacks: snack[] = [];
  votesCast: string[] = [];
  remaining: number;

  constructor(
    private http: HttpService,
    private localStore: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.loadSnacks();
    this.loadVotes();
  }

  loadVotes() {
    this.votesCast = this.localStore.getVotes() ?? [];
    this.remaining = businessLogic.votesPerMonth - this.votesCast.length;
  }

  loadSnacks() {
    this.http.getSnacks().subscribe(
      (data) => {
        this.snacks = data.sort((a, b) =>
          a.brand.toLowerCase().localeCompare(b.brand.toLowerCase())
        );
        this.loading = false;
      },
      () => {
        this.errors.push(ERROR_MESSAGES.ERROR_GETTING_SNACKS);
        this.loading = false;
      }
    );
  }

  castVote(id: string) {
    if (this.remaining === 0) {
      this.errors.push(ERROR_MESSAGES.OUT_OF_VOTES);
    }
    if (this.votesCast.includes(id)) {
      this.errors.push(ERROR_MESSAGES.DUPLICATE_VOTE);
    } else if (this.remaining > 0) {
      this.http.updateSnack(id).subscribe(
        (data) => {
          this.votesCast.push(data.id);
          this.localStore.setVotes(this.votesCast);
          this.loadSnacks();
          this.loadVotes();
        },
        () => {
          this.errors.push(ERROR_MESSAGES.ERROR_CASTING_VOTE);
        }
      );
    }
  }
}
