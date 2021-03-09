export class product {
	public name: string;
	public desc: string;
	public variants: string[] = [];
	public imgUrl: string;

	constructor(name: string, desc: string, variants: string[], imgUrl: string) {
		this.name = name;
		this.desc = desc;
		this.variants = variants;
		this.imgUrl = imgUrl;
	}
}
