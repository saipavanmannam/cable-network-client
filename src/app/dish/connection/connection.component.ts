import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';
import { Connection } from '../connection';
@Component({
  selector: 'dish-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private connService: ConnectionService) { }

  ngOnInit() {  }
  
  connection: Connection = {name:'',mobile:'',email:''};
  saveConnection(): void{
	//alert("Hello I am clicked");
	this.connService.addConnection(this.connection);
	//this.connService.addConnection(); 
  };

}
