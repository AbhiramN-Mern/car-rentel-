class Vehicle{
    constructor(public brand:string,public model:string){}
    getinfo(){
        `return ${this.brand} -${this.model}`
    }
}
class Car extends Vehicle{
    constructor(brand:string,model:string,public seats:number){
        super(brand,model)
    }
    getinfo(): string {
        return `car: ${this.brand} ${this.model} ${this.seats} seats,`
    }
}
class Bike extends Vehicle{
    constructor(brand:string,model:string,public cc:number){
        super(brand,model,)
    }
    getinfo(): string {
        return `bike ${this.brand} ${this.model} ${this.cc}cc`
    }
}
class person{
    constructor(public name:string){}
}
class Custamer extends person{
    constructor(name:string,public custumerID:number){
        super(name)
    }
}
class rendelserviese{
    rendedvehicle(custamer:Custamer,vehicle:Vehicle):void{
        console.log(`${custamer.name} rented ${vehicle.getinfo()}`)
    }
}
 const r1=new rendelserviese()
 const custamer=new Custamer('abhiram',19)
 const car=new Car('toyotta','innova',7)
 const bike=new Bike('yamaha','r15',150)
 r1.rendedvehicle(custamer,car)
 r1.rendedvehicle(custamer,bike)
