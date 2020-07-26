import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MheshComponent } from './mhesh/mhesh.component';
import { AbcComponent } from './abc/abc.component';

//services
import { EmployeeService } from './employee.service';
import { Employee2Module } from './employee2.module';
import { MydirectiveDirective } from './mydirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    MheshComponent,
    AbcComponent,
    MydirectiveDirective
  ],
  imports: [
    BrowserModule,
    Employee2Module
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
