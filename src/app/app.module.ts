import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InfoboxComponent } from './components/infobox/infobox.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatExamplesComponent } from './mat-examples/mat-examples.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material';
import { MatExamples2Component } from './mat-examples2/mat-examples2.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SidebarComponent,
    InfoboxComponent,
    MatExamplesComponent,
    MatExamples2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatPaginatorModule,MatRippleModule,MatSliderModule,MatToolbarModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
