import { Injectable } from '@angular/core';
import { Connection } from '../connection';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class ConnectionService {

  constructor(private http: Http) { }
  getConnection(connectionId): any {
	
	//{name: connection.name,mobile:connection.mobile,email:connection.email}
	return this.http.get('/dish/get-connection?connectionId='+connectionId);
	
  };
  
  saveConnection(dishConnection): any {
	//{name: connection.name,mobile:connection.mobile,email:connection.email}
	return this.http.post('/dish/add-connection',dishConnection);
	
  };
  

}
