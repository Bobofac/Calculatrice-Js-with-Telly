//-------------------------------------------- Exo 01 : 
let x = 10; y = 5.5; z = "Bonjour";

alert("La valeur de x est: " + x + "\n" +
       "\nLa valeur de y est: " + y + "\n" +
       "La valeur de z est: " + z);

// -------------------------------------Exo 02 :
x = prompt("Veuillez saisir votre nom");
z = prompt("Veuillez saisir votre age");

alert("Bonjour " + x + ", vous avez " + z + " ans.");

//------------------------------------------------------------------------ Exo 03 :
let a = 1; b = 2;

let addition = a+b; soustraction = a-b; multiplication = a*b; division = a/b;

alert("La somme de " + a + " et " + b + " est: " + addition + "\n" +
       "La différence de " + a + " et " + b + " est: " + soustraction + "\n" +
       "La multiplication de " + a + " et " + b + " est: " + multiplication + "\n" +
       "La division de " + a + " et " + b + " est " + division); 

// ---------------------------------------------Exo 04 :
let c; d;

c = prompt("Veuillez saisir une valeur pour c");
d = prompt("Veuillez saisir une valeur pour d");

c = c + d;
d = c - d;
c = c- d;

alert("Après les changements, la valeur de c est: " + c + "\n" +
       "Et la valeur de d est: " + d);

// -------------------------------------------------Exo 05 :
const Pi = 3.14;
let r; c; 

r = prompt("Veuillez saisir le rayon du cercle");
c = 2 * Pi * r;

alert("Le périmètre du cercle est: " + c);

// ------------------------------------------------------------Exo 06 :

let f; c; 

c = prompt("Veuillez saisir une temperature en degrés Celsius");

f = (c * 9/5) + 32;

alert("La temperature en degrés Fahrenheit est: " + f);
