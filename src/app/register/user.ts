export class User {

    constructor(
      public id: number,
      public name: string,
      public phone:string,
      public accomdationFlag:string,
      public localTravelNeedsFlag:string,
      public wiilYouVolunteerTospeakFlag:string,
      public isVegetarianFlag:string,
      public power: string,

      public alterEgo?: string,
      

    
    ) {  }
  
  }