let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


const randomPronombres = Math.round(Math.random()* pronoun.length);
const randomAdj = Math.round(Math.random()* adj.length);
const randomNoun = Math.round(Math.random()* noun.length) ;

let dominio = pronoun[randomPronombres] + adj[randomAdj] + noum[randomNoun] + ".com";

console.log(dominio);



document.getElementById("dominio").textContent = dominio;