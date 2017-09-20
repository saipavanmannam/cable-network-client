import { Injectable } from '@angular/core';
import { Connection } from '../connection';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class ConnectionService {

  constructor(private http: Http) { }
  connection: Connection=new Connection();
  addConnection(connection): any {
	
	//{name: connection.name,mobile:connection.mobile,email:connection.email}
	return this.http.get('/dish/get-connection?connectionId=1').subscribe(data => data.json());
	
  };
  
  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }

}
