import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NametransformPipe } from './nametransform.pipe';



@NgModule({
  declarations: [NametransformPipe],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
