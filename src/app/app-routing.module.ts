import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoboxComponent } from './components/infobox/infobox.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatExamplesComponent } from './mat-examples/mat-examples.component';
import { MatExamples2Component } from './mat-examples2/mat-examples2.component';

const routes: Routes = [{ path: '', component: InfoboxComponent },
{ path: 'mat-examples', component: MatExamplesComponent },
{ path: 'mat-examples2', component: MatExamples2Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
