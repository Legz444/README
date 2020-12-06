console.log($);

//character class

class Character{
    constructor(name, lifepoints, healing, attack){
    this.name = name,
    this.lifepoints = lifepoints,
    this.healing = healing,
    this.attack = attack
    }

    // characterDeath(){
    //     if(this.lifepoints <= 0){
    //         prompt(`${this.name} has been defeated by ${Enemy.name}. You have failed Odin and Midgard will be destroyed by Ymir. Frigg, Odins wife has faith in you and is offering to bring you back to life but you must begin again. Replay?, "yes/no"`)
    //             if(prompt === yes){
    //                     //restart character modal//
    //             }else{
    //                 alert("Game Over");
    //             }
    //     }
    // }
}
const Embla = new Character ("Embla", "100", ["Prayer : 20"], ["Simple Curse: 20"]); ///can I list key value pairs within an array this way?//
const Ask = new Character ("Ask", "100", ["Leaves: 20"], ["Arrows: 20"]);


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
    //cache DOM nodes//
const $modal = $("#intro-modal")//modal container
const $modalText = $("#intro-text")//modal text
const $openModal = $("#play-btn")//play button starts modal
const $closeModal = $("#close")//close link to close modal

    //create Event Handlers//
const openIntro = (event) => {
    $modal.css("display", "flex");
}
const closeIntro = (event) =>{
    $modal.css("display", "none");
}
//create Event Listeners//
$openModal.on('click', openIntro);
$closeModal.on('click', closeIntro);

});
//create Event Handlers//


//choose character modal//



//main page Midgard//


//9 Realms functions//
