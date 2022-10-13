const currentHour = 4;
let message ;

if(currentHour >= 22){
    (message = "Não deveriamos comer nada, é hora de dormir")
} else if (currentHour >= 18 && currentHour < 22){
    (message = "Rango da noite, vamos jantar")
} else if (currentHour >= 14 && currentHour < 18){
    (message = "Vamos fazer um bolo para o cafe da tarde?")
} else if (currentHour >= 11 && currentHour <= 14){
    (message = "Hora do almoço")
}
  else if (currentHour >= 4 && currentHour <= 11){
    (message = "hmm... cheiro de cafe")
  }

  console.log(message)