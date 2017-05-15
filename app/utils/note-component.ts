export class note{
private title:string;
private descrition:string;
constructor(){
    this.title="";
    this.descrition="";
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