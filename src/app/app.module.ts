import { ContactService } from "./contact.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { TeamInfoComponent } from "./team-info/team-info.component";
import { ProductsComponent } from "./products/products.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [
		AppComponent,
		CarouselComponent,
		NavComponent,
		AboutComponent,
		TeamInfoComponent,
		ProductsComponent,
		FooterComponent,
		ContactUsComponent,
	],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
	providers: [ContactService],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
