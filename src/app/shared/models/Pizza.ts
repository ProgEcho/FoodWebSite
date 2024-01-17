export class Pizza{
  id !: number;
  name!:string;
  price!:number;
  ingredient!:string[];
  favorite:boolean = false;
  pizzaTags?:string[];
  stars:number = 0;
  imageUrl!:string;
}
