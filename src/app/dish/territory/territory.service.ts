import { Injectable } from '@angular/core';
import { TerritoryDetail } from '../territory-detail';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TerritoryService {
  
  constructor(private http: Http) { }
  getTerritoryDetail(territoryId): any {
	return this.http.get('/dish/get-territory?territoryId='+territoryId);
	
  };
  
  getAllTerritotyDetails(): any{
  	return this.http.get('/dish/get-all-territories');
  };
  
  saveTerritoryDetail(territoryDetail): any {
	return this.http.post('/dish/add-territory',territoryDetail);
	
  };

}
