
let attack;
let defense;
let cislo;
attack = Number(attack);
defense = Number(defense);
cislo = Number(cislo);

document.getElementById("submit").onclick = function(){
    attack = document.getElementById("cislo1").value;
    console.log(attack);
    defense = document.getElementById("cislo2").value;
    console.log(defense);
    cislo = 12 - attack / defense;
    console.log(cislo);
    document.getElementById("anwser").textContent = `Pro proražení musíte hodit ${cislo} a více.`;
}

let number;