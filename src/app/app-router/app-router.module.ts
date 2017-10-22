import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectionComponent } from '../dish/connection/connection.component';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { TerritoryComponent } from '../dish/territory/territory.component';
import { GetAllConnectionsComponent } from '../dish/get-all-connections/get-all-connections.component';

export const AppRouteModule: Routes = [
	  {
		path: '',
		component: DashBoardComponent	  
	  },
	  {
		path: 'connection',
		component: ConnectionComponent
	  },
	  {
	  	path: 'addterritorydetail',
	  	component: TerritoryComponent
	  },
	  {
	  	path: 'connection/get-all-connections',
	  	component: GetAllConnectionsComponent
	  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(AppRouteModule);