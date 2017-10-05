import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here -->
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app-router/app-router.module';


import { ConnectionComponent } from './dish/connection/connection.component';
import { ConnectionService } from './dish/connection/connection.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { Connection } from './dish/connection';
import { TerritoryComponent } from './dish/territory/territory.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    DashBoardComponent,
    TerritoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	routes
  ],
  providers: [ConnectionService,Connection],
  bootstrap: [AppComponent]
})
export class AppModule { }
