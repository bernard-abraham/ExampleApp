import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoboxComponent } from './components/infobox/infobox.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [{ path: '', component: InfoboxComponent },
{ path: 'second-component', component: SearchBarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
