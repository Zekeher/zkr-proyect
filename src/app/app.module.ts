import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import Component */
import { AppComponent } from './app.component';
import { MainTableComponent } from './content/views/template/main-table/main-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
