import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppNavComponent } from './nav/app-nav.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    declarations: [
        AppNavComponent
    ],
    providers: [],
    bootstrap: [AppNavComponent]
})

export class AppModule { }