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
import { TerritoryDetail } from './dish/territory-detail';
import { TerritoryComponent } from './dish/territory/territory.component';
import { TerritoryService } from './dish/territory/territory.service';
import { GetAllConnectionsComponent } from './dish/get-all-connections/get-all-connections.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    DashBoardComponent,
    TerritoryComponent,
    GetAllConnectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	routes
  ],
  providers: [ConnectionService,Connection,TerritoryService,TerritoryDetail],
  bootstrap: [AppComponent]
})
export class AppModule { }
