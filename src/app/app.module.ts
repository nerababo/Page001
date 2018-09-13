import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {listaPrva} from './lista.component'
@NgModule({
  declarations: [
    AppComponent,listaPrva,
    
    
  ],
  imports: [
    BrowserModule,
    UiModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
