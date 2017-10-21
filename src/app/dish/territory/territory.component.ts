import { Component, OnInit,  Input } from '@angular/core';
import { TerritoryDetail } from '../territory-detail';
import { TerritoryService } from './territory.service';

@Component({
  selector: 'add-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit {

  constructor(private territoryService: TerritoryService,private territoryDetail: TerritoryDetail) { }

  ngOnInit() {  }
  
  getTerritoryDetail(): void{
	this.territoryService.getTerritoryDetail(this.territoryDetail.territoryId).toPromise().then(data=>this.territoryDetail=data.json());
  };
  
  saveTerritoryDetail(): void{
	  this.territoryService.saveTerritoryDetail(this.territoryDetail).toPromise().then(data=>console.log(data._body)).catch(err=>alert(err));
  }
}
