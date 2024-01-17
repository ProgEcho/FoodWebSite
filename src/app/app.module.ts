import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {RatingModule} from "ng-starrating";
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { PizzaTagsComponent } from './pizza-tags/pizza-tags.component';
import { PizzaPageableComponent } from './pizza-pageable/pizza-pageable.component';
import { CartPageableComponent } from './cart-pageable/cart-pageable.component';
import { NoFoundComponent } from './no-found/no-found.component';
registerLocaleData(localeDe)
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FooterComponent,
    PizzaTagsComponent,
    PizzaPageableComponent,
    CartPageableComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
