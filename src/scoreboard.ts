class Team {
    name:string;
    constructor(name:string){
        this.name=name;
    }
    generateLineup() {
        return "lineup will go here";
    }
}

const astros = new Team("Astros");

//console.log(astros.generateLineup());
console.log(astros.name)

const bluJays = new Team("Blue Jays");
//console.log(bluJays.generateLineup());
console.log(bluJays.name)