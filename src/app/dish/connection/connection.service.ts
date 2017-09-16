import { Injectable } from '@angular/core';
import { Connection } from '../connection';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class ConnectionService {

  constructor(private http: Http) { }
  addConnection(connection): any{
	alert("In service Called");
	//{name: connection.name,mobile:connection.mobile,email:connection.email}
	return this.http.post('http://localhost:8080/dish/add-connection',JSON.stringify(connection)).map(res => res.json().data);
  };
  
  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }

}
