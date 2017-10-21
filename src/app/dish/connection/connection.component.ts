import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';
import { Connection } from '../connection';
import { TerritoryDetail } from '../territory-detail';
import { TerritoryService } from '../territory/territory.service';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'dish-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private connService: ConnectionService,
  			  private connection: Connection,
  			  private terrService: TerritoryService) { }
  				
  private territoryDetails: TerritoryDetail[];

  ngOnInit() {
		this.getTerritories();  
    }
  getTerritories(): void{
   		this.terrService.getAllTerritotyDetails().toPromise().then(data => this.territoryDetails  =  data.json());
  };
  
  getConnection(): void{
	this.connService.getConnection(this.connection.connectionId).toPromise().then(data=>this.connection=data.json());
  };
  
  saveConnection(): void{
	  this.connService.saveConnection(this.connection).toPromise().then(data=>console.log(data._body)).catch(err=>alert(err));
  }

}
