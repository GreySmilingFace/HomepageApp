import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../model/team.model';
import { environment } from 'src/environments/environment';
import { URLObject } from '../../model/urlObject.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../../model/game.model';

@Injectable()
export class HandballServiceService {

  headers = new HttpHeaders();

  constructor(private http:HttpClient) { 
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getTableTeamStandings(urlObject: URLObject):Observable<Array<Team>>{
    return this.http.post<Array<Team>>(environment.url + 'tables',urlObject,{headers:this.headers});
  }

  getTableAllGames(urlObject: URLObject):Observable<Array<Game>>{
    return this.http.post<Array<Game>>(environment.url + 'tables/allGames',urlObject,{headers:this.headers});
  }

  getNextGame(urlObject: URLObject):Observable<Game>{
    return this.http.post<Game>(environment.url + 'tables/nextGame',urlObject,{headers:this.headers});
  }  

}
