import { ContactService } from "./../contact.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
	selector: "app-contact-us",
	templateUrl: "./contact-us.component.html",
	styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
	FormData: FormGroup;

	constructor(private builder: FormBuilder, private contact: ContactService) {}

	ngOnInit(): void {
		this.FormData = this.builder.group({
			Fullname: new FormControl("", [Validators.required]),
			Email: new FormControl("", [Validators.compose([Validators.required, Validators.email])]),
			MobileNumber: new FormControl("", [Validators.required]),
			Comment: new FormControl("", [Validators.required]),
		});
	}
	onSubmit(FormData) {
		this.contact.PostMessage(FormData).subscribe(
			(response) => {
				location.href = "https://mailthis.to/confirm";
				console.log(response);
			},
			(error) => {
				console.warn(error.responseText);
				console.log({ error });
			}
		);
	}
}
