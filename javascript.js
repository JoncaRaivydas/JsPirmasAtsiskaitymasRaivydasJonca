"use strict"
//1uzd.
const svorisKilogramais=85;
const svorisGramais=svorisKilogramais*1000;
console.log(`Jusu svoris kilogramais yra ${svorisKilogramais}kg, o gramais gaunasi ${svorisGramais}g.`);

//2uzd.
const dalinamasisSkaicius=30;
function skaiciausDalyba(x){
    if(x%3==0 && x%5==0){
        console.log("FizzBuzz");
    }
    else if (x%5==0){
        console.log("Buzz");
    }
    else if(x%3==0){
        console.log("Fizz");
    }
    else {
        console.log(`${x} nesidalina nei is 3, nei is 5`);
    }
}
skaiciausDalyba(dalinamasisSkaicius);

//3uzd.
let pirmasSkaicius=prompt("Iveskite pirma skaiciu");
let aritmetinisSimbolis=prompt("Iveskite aritmetini simboli (+,-,*,/");
let antrasSkaicius=prompt("Iveskite antra skaitmeni");
function skaiciuotuvas(x,y,z){
    let ats=0;
    if(y=="+"){
        ats=parseInt(x)+parseInt(z);
        alert(`${x}${y}${z}=${ats}`);
    }
    else if(y=="-"){
        ats=parseInt(x)-parseInt(z);
        alert(`${x}${y}${z}=${ats}`);
    }
    else if(y=="*"){
        ats=parseInt(x)*parseInt(z);
        alert(`${x}${y}${z}=${ats}`);
    }
    else if(y=="/"){
        ats=parseInt(x)/parseInt(z);
        alert(`${x}${y}${z}=${ats}`);
    }
    else{
        alert("Suvedete netinkamus duomenis");
    }
}
skaiciuotuvas(pirmasSkaicius,aritmetinisSimbolis,antrasSkaicius);