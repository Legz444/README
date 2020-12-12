console.log($);

//character class
// const fight = () => { document.getElementById("fight-modal")}

class Character{
    constructor(name, lifepoints, healing=[], attack=[]){
    this.name = name
    this.lifepoints = lifepoints
    this.healing = healing
    this.attack = attack

    // this.attack = [
    //     {
    //         weapon: "",
    //         hitpoints: null,
    //     }]

    this.midgard = this.midgard.bind(this)
    this.vanaheim = this.vanaheim.bind(this)
    this.niflheim = this.niflheim.bind(this)
    this.hel = this.hel.bind(this)
    this.attackChoice = this.attackChoice.bind(this)
    this.attackbtn = this.attackbtn.bind(this)
    }
    displayStats(){
        document.getElementById("display-points").innerHTML = `${this.lifepoints}`;
        document.getElementById("display-healing").innerHTML = `${this.healing}`;
        document.getElementById("display-attack").innerHTML = `${this.attack}`;
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
                if(this.name === "Ask"){
                    this.attack.push("Sword: 50");
                }else if (this.name === "Embla"){
                    this.attack.push("Magick Staff: 50");
                }
                console.log(this);
                document.getElementById("midgard__btn").style.display = "none";
                document.getElementById("vanaheim__btn").style.display = "flex";
                document.getElementById("vanaheim__btn").addEventListener("click", this.vanaheim); 
                this.displayStats(); 
            }else if(answer === "no"){
                alert("GAME OVER");
            }
        
    }
    vanaheim(){ 
        let level2 = prompt("Odin transported you to Vanaheim and gave you some lifepoints and a new weapon for your journey. You are met by Frejya and Freyr the gods of fertility. It's hard to leave such a perfect and pleasurable place. Maybe you should just surrender to their desire to have to stay and forget about Odin and Midgard...", "yes/no");
        if(level2 === "yes"){
            alert("GAME OVER");
        }else{
            this.healing.push("Antifreeze Potion");
            document.getElementById("vanaheim__btn").style.display = "none";
            document.getElementById("niflheim__btn").style.display = "flex";
            document.getElementById("niflheim__btn").addEventListener("click", this.niflheim);
            console.log(this);
            this.displayStats();
        }   
    }
//level3
    niflheim(){
        let level3 = prompt(`Niflheim is the world of icy desolation. Nothing can exist here. Frejya sent you with the offering but clearly she was dissapointed by you leaving. She did give you a gift for your health...Since you are freezing to death do you: A)Use up the ${this.healing[1]} right away? B)Use your ${this.healing[0]} which is reusuable but may cost you your life? C)Treck it and hope for the best?`, " A/B/C");
        if(level3 === "A"){
            this.healing.pop([1]);
            document.getElementById("niflheim__btn").style.display = "none";
            document.getElementById("hel__btn").style.display = "flex";
            document.getElementById("hel__btn").addEventListener("click", this.hel);
            this.displayStats();
        }else if(level3 === "B"){
            this.lifepoints -= 100;
            if(this.lifepoints >= 1){
            document.getElementById("niflheim__btn").style.display = "none";
            document.getElementById("hel__btn").style.display = "flex";
            document.getElementById("hel__btn").addEventListener("click", this.hel);
            this.displayStats();
            }else{
                alert(`You have frozen to death and your ${this.healing[0]} was not enough to keep you alive. Game over.`);
                this.displayStats();
            }
        }else if(level3 === "C"){
            this.lifepoints -= this.lifepoints;
            alert("You have frozen to death. Game Over");
            this.displayStats();
            }
        }
//level4
    hel(){
        document.getElementById("hel-modal").style.display = "flex";
        document.getElementById("close-hel").addEventListener("click", this.attack);    
    }
    attack(){
        const attackbtn = document.createElement("BUTTON");
            attackbtn.innerHTML = "ATTACK";
            attackbtn.id = "attack-btn"
            document.body.appendChild(attackbtn);
            document.getElementById("attack-btn").addEventListener("click", this.attackChoice);
            document.getElementById("hel-modal").style.display = "none"; 
    }
    // attackbtn(){
    //     const attackbtn = document.createElement("BUTTON");
    //     attackbtn.innerHTML = "ATTACK";
    //     attackbtn.id = "attack-btn"
    //     document.body.appendChild(attackbtn);
    //     document.getElementById("attack-btn").addEventListener("click", this.attackChoice);
    //     document.getElementById("hel-modal").style.display = "none";
    //     this.displayStats();
    //     modgudr.displayStats();
    // }
    // attackChoice(){
    //     this.displayStats();
    //     modgudr.displayStats();
    //     let choice = prompt(`A) Attack using ${this.attack[0]} B)Attack using ${this.attack[1]}.`, "A/B");
        
    //     // this.displayStats;
    //     // modgudr.displayStats;
    //     if(choice === "A"){
    //         modgudr.lifepoints -= 20;
    //         if(modgudr.lifepoints > 0 && this.name === "Ask"){
    //             // modgudr.displayStats();
    //             // this.displayStats();
    //             modgudr.attackAsk();
    //             return this;
    //         }else if(modgudr.lifepoints <= 0 && this.name === "Ask"){
    //             alert("You have defeated Móðguðr!");
    //             modgudr.displayStats();
    //             this.displayStats();
    //             document.getElementById("hel__btn").style.display = "none";
    //             document.getElementById("nidavellir__btn").style.display = "flex";
    //             document.getElementById("nidavellir__btn").addEventListener("click", this.nidavellir);
    //         }
    //         if(modgudr.lifepoints > 0 && this.name === "Embla"){
    //             modgudr.displayStats();
    //             this.displayStats();
    //             modgudr.attackEmbla();
    //         }else if(modgudr.lifepoints <= 0 && this.name === "Embla"){
    //             alert("You have defeated Móðguðr!");
    //             modgudr.displayStats();
    //             this.displayStats();
    //             document.getElementById("hel__btn").style.display = "none";
    //             document.getElementById("nidavellir__btn").style.display = "flex";
    //             document.getElementById("nidavellir__btn").addEventListener("click", this.nidavellir);
    //         }
    //     }else if(choice === "B"){
    //         modgudr.lifepoints -= 50;
    //         if(modgudr.lifepoints > 0 && this.name === "Ask"){
    //             document.getElementById("hel-modal").style.display = "none";
    //             modgudr.displayStats();
    //             this.displayStats();
    //             modgudr.attackAsk();
    //         }else if(modgudr.lifepoints <= 0 && this.name === "Ask"){
    //             alert("You have defeated Móðguðr!");
    //             modgudr.displayStats();
    //             this.displayStats();
    //             document.getElementById("hel__btn").style.display = "none";
    //             document.getElementById("nidavellir__btn").style.display = "flex";
    //             document.getElementById("nidavellir__btn").addEventListener("click", this.nidavellir);
    //         }
    //         if(modgudr.lifepoints > 0 && this.name === "Embla"){
    //             modgudr.displayStats();
    //             this.displayStats();
    //             modgudr.attackEmbla();
    //         }else if(modgudr.lifepoints <= 0 && this.name === "Embla"){
    //             alert("You have defeated Móðguðr!");
    //             modgudr.displayStats();
    //             this.displayStats();
    //             document.getElementById("hel__btn").style.display = "none";
    //             document.getElementById("nidavellir__btn").style.display = "flex";
    //             document.getElementById("nidavellir__btn").addEventListener("click", this.nidavellir);
    //         }
    //     modgudr.displayStats();
    //     this.displayStats();
    //     }
    // }

//level 5//
    nidavellir(){
    let level5 = prompt("You open your eyes to Dwarfs circling you. They are circling you and whispering. Finally one approaches and offers you their Mead of Poetry, a magickal liquid that makes the drinker express their truth compulsively. Do you drink?", "yes/no");
    if(level5 === "yes"){
        document.getElementById("nidavellir__btn").style.display = "none";
        document.getElementById("muspellheim__btn").style.display = "flex";
        document.getElementById("muspellheim__btn").addEventListener("click", this.muspellheim); 
    }else if(level5 === "no"){
        alert("The dwarfs couldn't trust you and they have left you to die with your wounds from Modgudr, Game Over");
    }
    }
//level 6//
    muspelheim(){
        document.getElementById("muspelheim-modal").style.display = "flex";
        document.getElementById("close-muspelheim").addEventListener("click", this.attackbtn);  

    }
//     // jotunhein(decision){}
//     // alfheim(decision){}
//     // asgard(decision){}
//     // ymir(grand fight){}
}



class Enemy{
    constructor (name, kind, lifepoints, attack){
        this.name = name,
        this.kind = kind,
        this.lifepoints = lifepoints,
        this.attack= attack
    }

    attackAsk(){
        this.displayStats();
        Ask.displayStats();
        Ask.lifepoints -= this.attack;
        alert(`${this.name} attacked you and you have lost ${this.attack} life points.`);
        if(Ask.lifepoints > 0){
            Ask.attackChoice();
        }else if (Ask.lifepoints <= 0){
            alert(`${this.name} has defeated you. Game Over`);
        }
        if(Ask.lifepoints === this.lifepoints){
            let deal= prompt(`${this.enemy} can see you are skilled and has no interest in dying today. She has offered to transport you to Nidavellir. Do you deny her offer and stay and fight?`, "yes/no");
            if(deal==="yes"){
                Ask.attackChoice();
            }else if(deal === "no"){
                document.getElementById("hel__btn").style.display = "none";
                document.getElementById("nidavellir__btn").style.display = "flex";
                document.getElementById("nidavellir__btn").addEventListener("click", Ask.nidavellir()); 
            }
        }
    }
    attackEmbla(){
        Embla.lifepoints -= this.attack;
        alert(`${this.name} attacked you and you have lost ${this.attack} life points.`);
        this.displayStats();
        Embla.displayStats();
        if(Embla.lifepoints > 0){
            Embla.attackChoice();
            this.displayStats();
            Embla.displayStats();
        }else if(Embla.lifepoints <= 0){
            alert(`${this.name} has defeated you. Game Over`);
            this.displayStats();
            Embla.displayStats();
        }
    }
    displayStats(){
        document.getElementById("enemy-display-points").innerHTML = `${this.lifepoints}`;
        document.getElementById("enemy-display-kind").innerHTML = `${this.kind}`;
        document.getElementById("enemy-display-attack").innerHTML = `${this.attack}`;
    }

}
//Create Enemies
const modgudr = new Enemy("Modgudr", "maer", "200", "50");
const Surtr = new Enemy("Surtr", "Fire Giant", "300", "150");
const stallo = new Enemy("Stallo", "Evil Wizard", "300", "100");
const nokk = new Enemy("Nokk", "River Sprite", "150", "100"); 
const Ymir = new Enemy("Ymir", "giant", "400", "400");
const troll = new Enemy("Bridge Troll", "troll", "75", "100"); 
const goblin = new Enemy("Tusser", "goblin", "175", "75"); 





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
const $lifepoints = $("#display-points");
const $healing = $("#display-healing");
const $attack = $("display-attack");
//play Game//
const $Level1btn = $("#midgard__btn");
//fight modal//


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
    Ask = new Character ("Ask", 100, ["Comfrey Leaves"], ["Spear: 20"]);
    $lifepoints.html(`${Ask.lifepoints}`);
    $healing.html(`${Ask.healing}`);
    $attack.html(`${Ask.attack}`);
    $Level1btn.on('click', Ask.midgard);


}
const createEmbla = (event) => {
    $charModal.css("display", "none");
    const $currentPlayer = $(`<div class="current__player"><h1>Embla~Seiðr</h1><img src="/Users/mainframe/code/README/Images/sorceress.png" alt="Norse Witch Character" width="150px" height="200px"></div>`);
    $("body").append($currentPlayer);
    $Level1btn.css("display", "flex");
    Embla = new Character ("Embla", 100, ["Prayer"], ["Simple Curse: 20"]);
    $lifepoints.html(`${Embla.lifepoints}`);
    $healing.html(`${Embla.healing}`);
    $attack.html(`${Embla.attack}`);
    $Level1btn.on('click', Embla.midgard);
}
//fight modal//


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
//fightmodal//



});




