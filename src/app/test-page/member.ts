export class Member {

    constructor(
      public id: number,
      public firstname: string,
      public lastname: string,
      public email: string,
      
      public phone:string,
      public city:string,
      public state:string,
   

      public street1: string,
      public street2: string,
      public zip:string,
      public comments?:string
      

    
    ) {  }
  
  }