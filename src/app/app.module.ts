import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { ConnectionComponent } from './dish/connection/connection.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    

	RouterModule.forRoot([
	  {
		path: 'connection',
		component: ConnectionComponent
	  }
	])
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
