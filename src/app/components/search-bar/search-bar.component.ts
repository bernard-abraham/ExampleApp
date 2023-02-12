import { Component, Inject, Injectable, OnInit, Optional } from '@angular/core';
import { HttpService } from 'src/app/service/service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Joke, APIResponse } from 'src/app/models';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
private routeSub: Subscription;
private gameSub: Subscription;
public jokes: Array<Joke>;
public setup: string;
public punchline: string;
public gameList: Array<Joke>;

constructor(    
  private httpService: HttpService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('');
      }
    });
  }

  searchGames(sort: string, search?: string): void {
    this.gameSub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Joke>) => {
        // this.jokes = gameList.results;
        this.setup = gameList.setup;
        this.punchline = gameList.punchline;
        // console.log(gameList.punchline);
      });
  }

}
