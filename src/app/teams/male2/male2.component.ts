import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/model/team.model';
import { URLObject } from 'src/app/core/model/urlObject.model';
import { HandballServiceService } from 'src/app/core/service/handball-service/handball-service.service';

@Component({
  selector: 'app-male2',
  templateUrl: './male2.component.html',
  styleUrls: ['./male2.component.scss']
})
export class Male2Component implements OnInit {

  tableData: Array<Team>;
  urlObject: URLObject;

  constructor(private _service:HandballServiceService) { 
    this.init();
  }

  ngOnInit() {
    this.getMale2Table();
  }

  init(){
    this.urlObject = new URLObject();
    this.tableData = new Array<Team>();
    this.urlObject.url = "https://bhv-handball.liga.nu/cgi-bin/WebObjects/nuLigaHBDE.woa/wa/groupPage?championship=BHV+2018%2F19&group=227568";
  }

  getMale2Table(){
    this._service.getTableTeamStandings(this.urlObject).subscribe(
      (result) => {
        this.tableData = result;
        console.info(this.tableData);
      }
    );
  }

}
