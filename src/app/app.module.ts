import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Modules
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
