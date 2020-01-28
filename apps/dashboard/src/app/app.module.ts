import { CoreDataModule } from '@mdv-eight/core-data';
import { MaterialModule } from '@mdv-eight/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { LoginComponent } from './login/login.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectItemComponent } from './project/project-item/project-item.component';

@NgModule({
  declarations: [AppComponent, ProjectComponent, ProjectListComponent, ProjectDetailsComponent, LoginComponent, WildcardComponent, ProjectItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
