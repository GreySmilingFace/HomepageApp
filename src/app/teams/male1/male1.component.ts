import { Component, OnInit } from '@angular/core';
import { HandballServiceService } from 'src/app/core/service/handball-service/handball-service.service';
import { Team } from 'src/app/core/model/team.model';
import { URLObject } from 'src/app/core/model/urlObject.model';
import { Game } from 'src/app/core/model/game.model';

@Component({
  selector: 'app-male1',
  templateUrl: './male1.component.html',
  styleUrls: ['./male1.component.scss']
})
export class Male1Component implements OnInit {

  tableData: Array<Team>;
  gamesData: Array<Game>;
  urlObjectForTableData: URLObject;
  nextGame: Game;
  urlObjectForNextGame: URLObject;

  constructor(private _service:HandballServiceService) { 
    this.init();
  }

  ngOnInit() {
    this.getMale1Table();
    this.getNextGame();
    this.getAllGames();
  }

  init(){
    this.urlObjectForTableData = new URLObject();
    this.urlObjectForNextGame = new URLObject();
    this.tableData = new Array<Team>();
    this.gamesData = new Array<Game>();
    this.nextGame = new Game();
    this.urlObjectForTableData.url = "https://bhv-handball.liga.nu/cgi-bin/WebObjects/nuLigaHBDE.woa/wa/groupPage?championship=MF+2018%2F19&group=227844";
    this.urlObjectForNextGame.url = "https://bhv-handball.liga.nu/cgi-bin/WebObjects/nuLigaHBDE.woa/wa/teamPortrait?teamtable=1572055&pageState=vorrunde&championship=MF+2018%2F19&group=227844";
  }

  getMale1Table(){
    this._service.getTableTeamStandings(this.urlObjectForTableData).subscribe(
      (result) => {
        this.tableData = result;
      }
    );
  }

  getAllGames(){
    this._service.getTableAllGames(this.urlObjectForNextGame).subscribe(
      (result) => {
        this.gamesData = result;
      }
    );
  }

  getNextGame(){
    this._service.getNextGame(this.urlObjectForNextGame).subscribe(
      (result) => {
        this.nextGame = result;
      }
    );
  }

}
