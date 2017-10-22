import { Component, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { Connection } from '../connection';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-get-all-connections',
  templateUrl: './get-all-connections.component.html',
  styleUrls: ['./get-all-connections.component.css']
})
export class GetAllConnectionsComponent implements OnInit {

  constructor(private connService:ConnectionService,private router: Router) { }
  
  private connections:Connection[];

  ngOnInit() {
  	this.getAllConnections();
  }
  
  getAllConnections():void{
  	this.connService.getAllConnections().toPromise().then(connections => this.connections=connections.json());
  }
  
  editConnection(conn):void{
  	this.connService.connection = conn;
  	console.log(conn);
  	this.router.navigate(['./connection']);
  }

}
