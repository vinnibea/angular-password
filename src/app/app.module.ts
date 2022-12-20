import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { FieldsComponent } from './components/fields/fields.component';

@NgModule({
  declarations: [AppComponent, InputComponent, FieldsComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
