import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
// app.module.ts

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { OrderLineListComponent } from './order-line-list/order-line-list.component';
import { OrderLineService } from './order-line.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: 'order-lines', component: OrderLineListComponent }, // Define your routes
  { path: '', redirectTo: '/order-lines', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, OrderLineListComponent],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FlexLayoutModule,
  ], // Add RouterModule.forRoot(routes)
  providers: [OrderLineService],
  bootstrap: [AppComponent],
})
export class AppModule {}
