export class Contact {
    id:number;
    firstName: string;
    lastName:string;
    phoneNo:number;

    constructor(no,ffn,lln,pp){
        this.id=no;
        this.firstName=ffn;
        this.lastName=lln;
        this.phoneNo=pp;
    }
}