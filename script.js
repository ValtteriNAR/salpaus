console.log("Täällä ollaan!");
function laskutehtava(Arvo1, Arvo2) {
  return Arvo1 + Arvo2;
}
let ika = 20; // numerot kirjoitetaan ilman lainausmerkkkejä // integer (int)
console.log("Sinun ikäsi on: " + ika);
ika = ika + 1;
/*
Monen
rivin
kommentti
*/
let ikakirjaimina = "44"; //string (str)
ikakirjaimina = ikakirjaimina + 1;
console.log(ikakirjaimina);
let juuvaiei = true; //boolean
console.log(juuvaiei);
let nimi = "Valtteri Hermanni";
console.log("Kirjoita isolla: " + nimi.toUpperCase());
console.log("Splittausharjoitus: " + nimi.split(" ")[0]);
// While ja for loop:
for (let i = 0; i <= 10; i++) {
  console.log("loopin iteraatioluku on: " + i);
}
if (ika <= 18 || nimi == "Valtteri Hermanni") {
  console.log("Onnea, olet täysi-ikainen ja/tai olet Valtteri");
} else {
  console.error("Kasva vielä vähän...");
}
console.log(laskutehtava(967676768, 6386396739));
let pvm = "2021/10/18";
function pvmFin(vuosi, kk, pvm) {
  if (kk == 03 || kk == 04 || kk == 05) {
    return "kevät " + pvm + "." + kk + "." + vuosi;
  }
  else if (kk == 06 || kk == 07 || kk == 08) {
    return "kesä " + pvm + "." + kk + "." + vuosi;
  }
  else if (kk == 09 || kk == 10 || kk == 11) {
    return "syksy " + pvm + "." + kk + "." + vuosi;
  }
  else {
    return "talvi " + pvm + "." + kk + "." + vuosi;
  }
}






console.log((pvmFin(pvm.split("/")[0], pvm.split("/")[1], pvm.split("/")[2])));

document.querySelector('#lisaa').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#ilmoitus').innerHTML = document.querySelector('#Kentta').value;
  setTimeout(() => document.querySelector('#ilmoitus').innerHTML = '', 3000);
})

document.querySelector('#merkinta').addEventListener('click', e => {
  e.preventDefault();
  if (document.querySelector('#Valinta_A').checked) {
    document.querySelector('.boksit').children[0].innerHTML = '<li> <input type="checkbox" id="Valinta_A" checked>Tehtävä A on nyt tehty</li>';
  }
  else {
    document.querySelector('.boksit').children[0].innerHTML = '<li> <input type="checkbox" id="Valinta_A">Valinta: A</li>';
  }
  if (document.querySelector('#Valinta_B').checked) {
    document.querySelector('.boksit').children[1].innerHTML = '<li> <input type="checkbox" id="Valinta_B" checked>Tehtävä B on nyt tehty</li>';
  }
  else {
    document.querySelector('.boksit').children[1].innerHTML = '<li> <input type="checkbox" id="Valinta_B">Valinta: B</li>';
  }
})
