console.log($);

//character class

class Character{
    constructor(name, lifepoints, healing=[], attack=[]){
    this.name = name
    this.lifepoints = lifepoints
    this.healing = healing
    this.attack = attack
    this.midgard = this.midgard.bind(this)
    }

    death(){
        if(this.lifepoints <= 0){
            prompt(`${this.name} has been defeated by ${Enemy.name}. You have failed Odin and Midgard will be destroyed by Ymir. Frigg, Odins wife has faith in you and is offering to bring you back to life but you must begin again. Replay?, "yes/no"`)
                if(prompt === yes){
                    alert("Press Play");
                }else{
                    alert("Game Over");
                }
        }
    }
    midgard(){
        let answer = prompt("Odin has answered your prayers! But it comes at a price. He has promised to help you save Midgard if you can retrieve the peace offering from Vanaheim and return back through the 9 realms to deliver it to Asgard. Do you accept the challenge?", "yes/no");
            if(answer === "yes"){
                this.lifepoints += 100;
                console.log(this.lifepoints);
                document.getElementById("midgard__btn").style.display = "none";
                document.getElementById("vanaheim__btn").style.display = "flex";
                document.getElementById("vanaheim__btn").addEventListener("click", this.vanaheim); 
            }else if(answer === "no"){
                alert("GAME OVER");
            }
    }
    vanaheim(){
        const level2btn = document.addEventListener("click", this.vanaheim);
        let level2 = prompt("Odin transported you to Vanaheim and gave you some lifepoints for your journey. You are met by Frejya and Freyr the gods of fertility. It's hard to leave such a perfect and pleasurable place. Can you resist their desire to have to stay and forget about Odin and Midgard?", "yes/no");
        if(level2 === "yes"){
            alert("GAME OVER");
        }else if(level2 === "no"){
            //push a gift to healing array
            //hide vanaheim button
            //show Niflheim button or Hel depending on coding time.
            //call next level
        }   
    }
    // niflheim(){
    //     let level3 = prompt("Niflheim is the world of icy desolation. Nothing can exist here. Frejya sent you with the offering but clearly she was dissapointed by you leaving. She did give you a gift for your health...Do you use her gift?", " yes/no");
    //     if(level3 === "yes"){
    //         //remove index 1 from healing array//
    //         //hide niflheim button
    //         //run next level
    //     }else if(level3 === "no"){
    //         let gift = prompt(`Would you like to use ${this.healing[0]}?`, "yes/no");
    //         if(gift === "yes"){
    //             //remove index 0 from array//
    //             this.lifepoints -= 100;
    //             if(this.lifepoints >= 1){
    //                 //run next level
    //             }else{
    //                 this.death;
    //             }
    //         }else if(gift === "no"){
    //             this.
    //         }
    //     }
    //     }


}
// const Embla = new Character ("Embla", "100", ["Prayer : 20"], ["Simple Curse: 20"]); ///can I list key value pairs within an array this way?//
// const Ask = new Character ("Ask", "100", ["Leaves: 20"], ["Spear: 20"]);

// console.log(Embla);
// console.log(Ask);

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
const $buttons = $(".game");
//start Game//
const $Ask = $("#ask");
const $Embla = $("#embla");
//play Game//
const $Level1btn = $("#midgard__btn");

///////////////////////////create Event Handlers/////////////////////////////
//intro modal//
const openIntro = (event) => {
    $modal.css("display", "flex");
    $buttons.css("display", "none");

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
    $Level1btn.css("display", "flex");
    Ask = new Character ("Ask", 100, ["Leaves: 20"], ["Spear: 20"]);
    $Level1btn.on('click', Ask.midgard);


}
const createEmbla = (event) => {
    $charModal.css("display", "none");
    const $currentPlayer = $(`<div class="current__player"><h1>Embla~Seiðr</h1><img src="/Users/mainframe/code/README/Images/sorceress.png" alt="Norse Witch Character" width="150px" height="200px"></div>`);
    $("body").append($currentPlayer);
    $Level1btn.css("display", "flex");
    Embla = new Character ("Embla", 100, ["Prayer : 20"], ["Simple Curse: 20"]);
    $Level1btn.on('click', Embla.midgard);
}
//play game//


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
//playGame//


});

//9 Realms functions//
//variables//
// const Level1btn = document.getElementsByClassName(".midgard__btn");

// //event listeners//
// Level1btn.addEventListener("click", midgard)

// //functions//
// const midgard = () => {
//         prompt("Odin has answered your prayers! But it comes at a price. He has promised to help you save Midgard if you can retrieve the peace offering from Vanaheim and return back through the 9 realms to deliver it to Asgard. Do you accept the challenge?", "yes/no");
//         if(prompt === "yes"){
//             Character.lifepoints += 100;
//         }else if(prompt === "no"){
//             alert("GAME OVER");
//         }
// }

