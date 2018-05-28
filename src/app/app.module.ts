import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { DataTablesModule } from 'angular-datatables';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule } from '@angular/cdk/table';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatSortModule, MatPaginatorModule} from '@angular/material';

import { AppComponent } from './app.component';

// Services
import {ServerCallerService} from '../services/server-caller.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule
  ],
  providers: [ServerCallerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
