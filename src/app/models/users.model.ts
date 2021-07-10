import { UserAddress } from "./useraddress.model";

export class User{
  userId:number;
  userName:string;
  password:string;
  firstName:string;
  lastName:string;
  mobileno:string;
  email:string;
  dateOfBirth:Date;
  subscriptionStartDate:Date;
  subscriptionExpireDate:Date;
  subscriptionStatus:string;
  address:UserAddress;
  roles:string[];
  token:string;

  constructor( userId:number,username:string,password:string,firstname:string,lastname:string,
    mobileno:string,email:string,dateOfBirth:Date, roles:string[]){
    this.userName = username;
    this.password = password;
    this.userId = userId;
    this.firstName = firstname
    this. lastName= lastname
    this.mobileno = mobileno
    this. email = email
    this.dateOfBirth = dateOfBirth
    this.roles = roles
  }

}
