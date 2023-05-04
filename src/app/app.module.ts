import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule ,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
 bootstrap:[AppComponent],
 schemas: [CUSTOM_ELEMENTS_SCHEMA],  

 //entryComponents: [AppComponent] //comentar qnd estiver desenvolvendo para ser possivel rodar o ng s
})
export class AppModule {

  constructor(private injector: Injector){ }

    ngDoBootstrap() {
      const elem = createCustomElement(AppComponent, { injector: this.injector })
      customElements.define('micro-app-singers-search', elem);
    }
  
 
 }
