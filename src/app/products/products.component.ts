import { product } from "./products.model";
import { Component, OnInit } from "@angular/core";
@Component({
	selector: "app-products",
	templateUrl: "./products.component.html",
	styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
	products = [
		new product(
			"UPVC Windows",
			"Our high-performance house windows add an architectural dimension to your home. uPVC windows in India keep out street noise, dust and pollution, rain and gale force winds. At the same time, they are energy efficient, low maintenance, and long-lasting.",
			[
				"Sliding Window",
				"Casement Window",
				"Tilt Turn Window",
				"Combination Window",
				"Villa Window",
				"Bay Window",
				"Fixed Window",
				"Glass To Glass Window",
			],
			"../../assets/upvc-window.jpg"
		),
		new product(
			"Aluminium Windows",
			"Our range of aluminium window frames and designs not only add an architectural edge to your space but also offer great performance and functionality. The windows are designed with premium quality material, which keeps out dust, pollution, noise, gale-force winds, and many such external factors from the interiors of your home or office spaces.",
			["Sliding Window", "Casement Window", "Tilt Turn Window"],
			"../../assets/aluminium-window.jpg"
		),
		new product(
			"UPVC Doors",
			"Our high-performance house windows add an architectural dimension to your home. uPVC windows in India keep out street noise, dust and pollution, rain and gale force winds. At the same time, they are energy efficient, low maintenance, and long-lasting.",
			["Sliding Door", "Casement Door", "Slide & Fold Door", "Lift & Slide Door", "Designer Door", "Corner Slider Doors"],
			"../../assets/upvc-door.jpg"
		),
		new product(
			"Aluminium Doors",
			"Our supreme-quality aluminium doors not only add an architectural edge to your office or home but also offer functionality and superior performance. These doors contribute to thermal and sound insulation of the space as well. Moreover, these doors are durable in nature, do not rust, and have low maintenance requirements.",
			[
				"Sliding Door",
				"Casement Door",
				"Slimline Sliders Door",
				"Thermal Break Lift Slide Door",
				"Thermal Break Slide & Fold Door",
				"Corner Slider Doors",
			],
			"../../assets/aluminium-door.jpg"
		),
	];
	constructor() {}

	ngOnInit(): void {
		console.log(this.products);
	}
}
