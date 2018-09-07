export class Course 
{
     title : string 
     duration : number
     online : boolean 

     constructor(title : string, duration : number = 40,
         online : boolean = true)
     {
         this.title = title
         this.duration  = duration
         this.online =online 
     }
}