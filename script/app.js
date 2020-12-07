console.log($);

//character class

class Character{
    constructor(name, lifepoints, healing=[], attack=[]){
    this.name = name,
    this.lifepoints = lifepoints,
    this.healing = healing,
    this.attack = attack
    }
    increaseLife(){
        this.lifepoints += 100;
    }

    characterDeath(){
        if(this.lifepoints <= 0){
            prompt(`${this.name} has been defeated by ${Enemy.name}. You have failed Odin and Midgard will be destroyed by Ymir. Frigg, Odins wife has faith in you and is offering to bring you back to life but you must begin again. Replay?, "yes/no"`)
                if(prompt === yes){
                    alert("Press Play");
                }else{
                    alert("Game Over");
                }
        }
    }
}
const Embla = new Character ("Embla", "100", ["Prayer : 20"], ["Simple Curse: 20"]); ///can I list key value pairs within an array this way?//
const Ask = new Character ("Ask", "100", ["Leaves: 20"], ["Spear: 20"]);
console.log(Embla);
console.log(Ask);

//enemy class
class Enemy{
    constructor (name, kind, lifepoints, attack){
        this.name = name,
        this.kind = kind,
        this.lifepoints = lifepoints,
        this.attack= attack
    }
    enemyAttack(){
        if(this.lifepoints > 0){
            Character.lifepoints -= this.attack;
        }
    }
}
//Create Enemies
const troll = new Enemy("Bridge Troll", "troll", "75", "100"); 
const nokk = new Enemy("Nokk", "River Sprite", "150", "100"); 
const stallo = new Enemy("Stallo", "Evil Wizard", "300", "100");
const goblin = new Enemy("Tusser", "goblin", "175", "75"); 
const Ymir = new Enemy("Ymir", "giant", "100", "100");
const modgudr = new Enemy("Modgudr", "maer", "150", "100");
const Surtr = new Enemy("Surtr", "Fire Giant", "300", "150");



//introduction modal//  


$( () => {
/////////////////////////////////cache DOM nodes///////////////////////////////
//intro Modal//
const $modal = $("#intro-modal");//modal container
const $modalText = $("#intro-text");//modal text
const $openModal = $("#play-btn");//play button starts modal ***MAKE IT SO THEY CAN'T RECLICK THIS DURING GAME***
const $closeModal = $("#close");//close link to close modal
//character modal//
const $charModal = $("#character-modal");//character modal container
const $charText = $("#character-text");//character modal text box
const $openChar = $("#character-btn");//open character modal
const $closeChar = $("#close-char");//close link for character modal
//start Game//
const $Ask = $("#ask");
const $Embla = $("#embla");

///////////////////////////create Event Handlers/////////////////////////////
//intro modal//
const openIntro = (event) => {
    $modal.css("display", "flex");
}
const closeIntro = (event) =>{
    $modal.css("display", "none");
}
//character modal//
const chooseChar = (event) =>{
    $charModal.css("display", "flex");
    $modal.css("display", "none");
}
const closeChar = (event) => {
    $charModal.css("display", "none");
}

//Play Game//
const createAsk = (event) => {
    $charModal.css("display", "none");
    const $currentPlayer = $(`<div class="current__player"><h1>Ask~Viking</h1><img src="/Users/mainframe/code/README/Images/vikingcharacter.png" alt="Viking Character" width="250px" height="200px"></div>`);
    $("body").append($currentPlayer);
    const $Midgardbtn = $(`<button class="midgard__btn">Ask Odin for Help</button>`);
    $("body").append($Midgardbtn);
}
const createEmbla = (event) => {
    $charModal.css("display", "none");
    const $currentPlayer = $(`<div class="current__player"><h1>Embla~Seiðr</h1><img src="/Users/mainframe/code/README/Images/sorceress.png" alt="Norse Witch Character" width="150px" height="200px"></div>`);
    $("body").append($currentPlayer);
    const $Midgardbtn = $(`<button class="midgard__btn">Ask Odin for Help</button>`);
    $("body").append($Midgardbtn);
}
// const midgard = (event) => {
//     $charModal.css("display", "none");
//     prompt("Odin has given his word to help you defeat the giant Ymir for a price. Asgard and Vanaheim are ready to make peace and yet Odin still will not leave Asgard unprotected. He has asked you to venture to Vanaheim and return to him the peace offering. Do you accept the challenge?", "yes/no");
//     if(prompt === "yes"){
//         const currentPlayer = $(`<div>${this.name}`)

// }
// }
/////////////////////////create Event Listeners///////////////////////////////
//intro modal//
$openModal.on('click', openIntro);
$closeModal.on('click', closeIntro);
//character modal//
$openChar.on('click', chooseChar);
$closeChar.on('click', closeChar);
//start game//
$Ask.on('click', createAsk);
$Embla.on('click', createEmbla);


});


//9 Realms functions//
// const vanaheim = () => {
//     Character.lifepoints += 100;
//     console.log(Ask);
//     console.log(Embla);
// }