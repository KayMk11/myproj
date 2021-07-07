export class Users{
  uid:number;
  userName:string;
  password:string;
  firstName:string;
  lastName:string;
  mobileno:string;
  email:string;
  dob:Date;
  roles:string[];
  token:string;

  constructor( uid:number,username:string,password:string,firstname:string,lastname:string,
    mobileno:string,email:string,dob:Date, roles:string[]){
    this.userName = username;
    this.password = password;
    this.uid=uid;
    this.firstName = firstname
    this. lastName= lastname
    this.mobileno = mobileno
    this. email = email
    this.dob = dob
    this.roles = roles
  }

}
