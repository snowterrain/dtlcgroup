export class User {

    constructor(
      public id: number,
      public firstname: string,
      public lastname: string,
      public email: string,
      
      public phone:string,
      public city:string,
      public state:string,
   


      public accomdationFlag:string,
      public wiilYouVolunteerTospeakFlag:string,
      public localTravelNeedsFlag:string,
    
      public isVegetarianFlag:string,
      public power: string,

      public alterEgo?: string,
      public street1?: string,
      public street2?: string,
      public zip?:number,
      public comments?:string
      

    
    ) {  }
  
  }