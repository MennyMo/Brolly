export class Kojo {
   
    // constructor to call new
    constructor(
        // public makes these acessible from outside
        // adding this accessor stores the incoming values in these ppties
        public id: string,
        public title : string,
        public description : string,
        public age : number,) {}
}