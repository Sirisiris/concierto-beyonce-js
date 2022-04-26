let edad = 16;

if(edad>=18){
    console.log("Eres mayor de edad, puedes entrar.")

}else if (edad>=14&&edad<=17){
        console.log("Puedes entrar, pero sólo si te acompaña una persona mayor de edad")

    }else{
        console.log("Lo siento, eres demasiado joven, vuelve a intentarlo en unos años")
    }

    function  gestionarAdmision (edad) {
    if(edad>=18){
        console.log("Eres mayor de edad, puedes entrar.")
    
    }else if (edad>=14&&edad<=17){
            console.log("Puedes entrar, pero sólo si te acompaña una persona mayor de edad")
    
        }else{
            console.log("Lo siento, eres demasiado joven, vuelve a intentarlo en unos años")
        }
    }

gestionarAdmision(0);
gestionarAdmision(8);
gestionarAdmision(12);
gestionarAdmision(14);
gestionarAdmision(17);
gestionarAdmision(18);
gestionarAdmision(35);
gestionarAdmision(99);