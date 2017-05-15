export class note{
private title:string;
private descrition:string;
constructor(title:string,description:string){
    this.title=title;
    this.descrition=description;
}
	public getTitle(): string {
		return this.title;
	}

	public setTitle(value: string) {
		this.title = value;
	}

	public setDescrition(value: string) {
		this.descrition = value;
	}

	public getDescrition(): string {
		return this.descrition;
	}



}