import { Injectable } from '@angular/core';

@Injectable()
export class HandballServiceService {

  constructor() { }

  serviceUrl: String = "http://localhost:8080/bhv-service/api/v1/tables";

  getTableTeamStandings(){

  }

}
