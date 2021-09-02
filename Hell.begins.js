console.log("Terve!");

document.querySelector('#Vahvista').addEventListener('click', e => {
  e.preventDefault();
  if (document.querySelector('#nimenkirjoitus').value=="" ){
     document.querySelector('#notification').innerHTML = 'Ei tyhjiä kenttiä!'; 
     setTimeout(() => document.querySelector('#notification').innerHTML = '', 3000);
  }
  else{
    document.querySelector('#notification').innerHTML = document.querySelector('#nimenkirjoitus').value; 
  }
  
  
  
  })

document.querySelector('#Vahvistabox').addEventListener('click', e => {
  e.preventDefault();
  if (document.querySelector('#HTML').checked) {
    document.querySelector('.lootat').children[0].innerHTML = '<li> <input type="checkbox" id="HTML" checked>HTML on nyt valittu</li>';

  }
  else {
    document.querySelector('.lootat').children[0].innerHTML = '<li> <input type="checkbox" id="HTML">HTML</li>';

  }
if (document.querySelector('#CSS').checked) {
    document.querySelector('.lootat').children[1].innerHTML = '<li> <input type="checkbox" id="CSS" checked>CSS on nyt valittu</li>';

  }
  else {
    document.querySelector('.lootat').children[1].innerHTML = '<li> <input type="checkbox" id="CSS">CSS</li>';

  }
 if (document.querySelector('#Java-Script').checked) {
    document.querySelector('.lootat').children[2].innerHTML = '<li> <input type="checkbox" id="Java-Script" checked>JavaSript on nyt valittu</li>';
 }
 else {
  document.querySelector('.lootat').children[2].innerHTML = '<li> <input type="checkbox" id="Java-Script">Java Script</li>';
 }
})
function validateForm() {
  var x = document.forms["Formi"]["nimenkirjoitus"].value;
  if (x == "") {
    alert("Ei tyhjiä kenttiä!");
    return false;
  }
}
