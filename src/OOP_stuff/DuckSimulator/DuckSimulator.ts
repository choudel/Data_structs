interface FlyingBehaviour{
    fly():void;
}
interface QuackBehaviour{
    quack():void;
}
abstract class Duck{
    flyingBehaviour:FlyingBehaviour|undefined;
    quackBehaviour:QuackBehaviour|undefined;
    constructor(){
        this.flyingBehaviour=undefined;
        this.quackBehaviour=undefined;
    }
    performFly():void{
        this.flyingBehaviour?.fly();
    }
    performQuack():void{
        this.quackBehaviour?.quack();
    }
}
class FlyWithWings implements FlyingBehaviour{
    fly():void{
        console.log('I\'m flying')
    }
}
class FlyNoWay implements FlyingBehaviour{
    fly(): void {
        console.log('Can\'t Fly')
    }
}
class Quack implements QuackBehaviour{
    quack(): void {
        console.log('QuacKKK Quackkk')
    }
} 
class MuteQuack implements QuackBehaviour{
    quack(): void {
        console.log('()>>>SILENCE<<<()')
    }
}
class Squeak implements QuackBehaviour{
    quack(): void {
        console.log('Squeaaak')
    }
}
class MaillairdDuck extends Duck{
    constructor(){
        super();
        this.quackBehaviour=new Quack();
        this.flyingBehaviour=new FlyWithWings();
    }
    display():void{
        console.log('I\'maillard DUCK')
    }
}
class MiniDuckSimulator {
    maillard:MaillairdDuck= new MaillairdDuck();
    constructor(){
    this.maillard.display();
    this.maillard.performQuack();
    this.maillard.performFly();
    }
}

const instance = new MiniDuckSimulator()