const monBouton = document.getElementById('monBouton');
const monParagraphe = document.getElementById('monParagraphe');
const maListe = document.getElementById('maListe');
const li = document.createElement("li");

monBouton.addEventListener('click', function() {
    //alert("alert")
    monParagraphe.textContent = "Je suis un paragraphe modifié";
    maListe.appendChild(li);
    li.textContent = "Nouvel élément";
})
monBouton.addEventListener("mouseover", function(){
    monParagraphe.style.fontSize = "20px"; 
    monParagraphe.style.color = "red";
})