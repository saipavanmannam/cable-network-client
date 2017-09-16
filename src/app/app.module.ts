import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here -->
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';


import { ConnectionComponent } from './dish/connection/connection.component';
import { ConnectionService } from './dish/connection/connection.service';
import { DashBoardComponent } from './dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

	RouterModule.forRoot([
	  {
		path: 'connection',
		component: ConnectionComponent
	  },
	  {
		path: '',
		component: DashBoardComponent	  
	  }
	])
	
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
