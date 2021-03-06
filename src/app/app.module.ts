import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { TeamInfoComponent } from './team-info/team-info.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [AppComponent, CarouselComponent, NavComponent, AboutComponent, TeamInfoComponent, ProductsComponent, FooterComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
