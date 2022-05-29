class Team {
    players: string[];
    name: string;
    constructor(name: string, players: string[]) {
        this.name = name;
        this.players = players;
    }
    generateLineup() {
        return this.players.join(", ")
    }
}
const astroplayers=["altuve","socratis"]
const astros = new Team("Astros", astroplayers);

console.log(astros.generateLineup());
console.log(astros.name)

const bluJaysplayers=["coco","somi"]
const bluJays = new Team("Blue Jays",bluJaysplayers);
console.log(bluJays.generateLineup());
console.log(bluJays.name)