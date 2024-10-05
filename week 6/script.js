"use-strict"
let output = document.getElementById("output");



let sonic = {
    title: "Sonic The Hedgehog 1",
    releases: {
        released: 1991,
        rereleased: [1993, 1994, 1995, 1996, 1997, 2000, 2001, 2002, 2006, 2008, 2009, 2010, 2011, 2013, 2018, 2019, 2022]
    },
    
    ageOfGame: function(){
        let Today = new Date();
        let yyyy = Today.getFullYear();
        let age = yyyy - this.releases.released;
        return age+" years old";

    }

};
const genesis = "Sega Genesis/Megadrive"
const segaCD = "Sega CD, a Sega Genesis add-on"
const thirtytwox = "Sega 32X, a Sega Genesis add-on"
const saturn = "The Sega Saturn"
const dreamcast = "the Sega Dreamcast"



let sonic1 = new sonicGames("Sonic The Hedgehog",1991,genesis)
let sonic2 = new sonicGames("Sonic The Hedgehog 2",1992,genesis)
let sonicCD = new sonicGames("Sonic CD",1993,segaCD)
let sonic3 = new sonicGames("Sonic The Hedgehog 3",1994,genesis)
let sonicAndKnuckles = new sonicGames("Sonic & Knuckles",1994,genesis)
let sonic3D = new sonicGames("Sonic 3D Blast",1996,genesis)
let sonicAdventure = new sonicGames("Sonic Adventure",1998,dreamcast)
let sonicAdventure2 = new sonicGames ("Sonic Adventure 2", 2001, dreamcast)


function sonicGames(title,year,platform) {
    this.title=title;
    this.year=year;
    this.platform=platform;

}


sonicGames.prototype.sonicPrototype = function () {

    let Today = new Date();
    let yyyy = Today.getFullYear();
    let age = yyyy - this.year;
    return this.title + " is " + age +" years old and was released on the " + this.platform;

}




output.innerHTML += "<p>"+sonic.title + " was released  in " +sonic.releases.released.toString();
output.innerHTML += "<p>"+sonic.title + "has been rereleased in " +sonic.releases.rereleased.toString();

output.innerHTML += "<p>"+sonic.title + " is " +sonic.ageOfGame();

output.innerHTML += "<p>"+sonic1.sonicPrototype();

output.innerHTML += "<p>"+sonic2.sonicPrototype();
output.innerHTML += "<p>"+sonicCD.sonicPrototype();

output.innerHTML += "<p>"+sonic3.sonicPrototype();

output.innerHTML += "<p>"+sonicAndKnuckles.sonicPrototype();

output.innerHTML += "<p>"+sonicAdventure.sonicPrototype();

output.innerHTML += "<p>"+sonicAdventure2.sonicPrototype();




//prototypes/json/stringify
output.innerHTML += "<br> <p>Prototypes json and stringify section!"

function characterX() {
    this.character = null;
    this.getPerson = function() {
        return this.character;
    }
}

function gamesX() {
    this.game = null;
    this.getGame = function() {
        return this.game;
    }
}

function genreX(name){
    this.genre=name;
    this.getGenre = function() {
        return this.genre+" "+this.getGame()+"<p>"
    }
}

genreX.prototype = new gamesX();
gamesX.prototype = new characterX();

let gameCharacter = new genreX("Platformer")

gameCharacter.game= "Sonic 1";
gameCharacter.character="Sonic";
// output.innerHTML += gameCharacter.getGenre();

let json = JSON.stringify(gameCharacter)
output.innerHTML += "<p>"+json

let newObject = JSON.parse(json)
output.innerHTML += "<p>"+newObject.game
