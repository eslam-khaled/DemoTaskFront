import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './category.component';
import { PlayersListComponent } from './Components/product-list/product-list.component';
import { CreateTeamComponent } from './Components/create-category/create-category.component';
import { UpdateTeamComponent } from './Components/update-category/update-category.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamsRoutingModule } from './category-routing.module';
import { DataService } from './Services/DataService';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ConfrimDeleteComponent } from './Components/confrim-delete/confrim-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamDetailsComponent } from './Components/category-details/category-details.component';

@NgModule({
  declarations: [
    ConfrimDeleteComponent,
    TeamsComponent,
    PlayersListComponent,
    CreateTeamComponent,
    UpdateTeamComponent,
    NavBarComponent,
    TeamDetailsComponent
  ],
  entryComponents:[ConfrimDeleteComponent],
  providers: [DataService],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TeamsRoutingModule,
    BsDatepickerModule.forRoot(),

  ],
  exports: [ConfrimDeleteComponent]
})
export class TeamsModule { }
