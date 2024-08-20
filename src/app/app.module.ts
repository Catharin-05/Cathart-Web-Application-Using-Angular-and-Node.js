import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Adjust path if needed
import { provideHttpClient,withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent // Add other components here
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent] // Bootstrap the root component
})
export class AppModule { }
