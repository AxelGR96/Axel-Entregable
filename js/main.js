alert('Bievenido al sistema de calificaciones\n\n')
let start = confirm("Para dar inicio se tiene que responder una serie de preguntas\n\n¿Podemos comenzar?")

console.log("start",start)

//Función para la operacion a realizar
const operation = () => {
    let option
    while (true) {
        option = prompt(`¿Qué opción desea realizar?\n1. Calcular el promedio de un grupo\n2. Calcular el promedio de todos los grupos`);
        if (option === '1' || option === '2') {
            break;
        } else {
            alert('Opción inválida. Por favor, seleccione una opción válida.');
        }
    }
    
    switch(option){
        case '1':
            average();
            break;
        case '2':
            averages();
            break;
        default:
            alert('¡Opcion invalida intente de nuevo!')
    }
}

const average = () => {
    const school = prompt('¿Cual es el nombre de su escuela?')
    console.log(school)

    const teacher = prompt("Nombre del maestro que califica:")
    let grupo = prompt("¿Cuantos alumnos ahi en el grupo")


    let kids = []
    let nums = 0

    //Itero cada alumno y lo agrego a un arreglo vacio y ademas realizo la sumatoria de cada uno
    for(let i = 1; i<= parseInt(grupo); i++){
        let kid = prompt("Ingrese la calificación del alumno " + i);
        kids.push(parseInt(kid))
        nums += parseInt(kid)
    }

    console.log("Arreglo donde guardo la calificacion de cada alumno: ",kids)
    console.log("La sumatoria de todas las calificaciones: ",nums)

    //Saco el promedio
    let avg = 0
    avg = nums / kids.length
    console.log(avg)

    //Validación donde verifico si paso o no la materia el grupo
    let pass
    if(avg >= 7)
        pass = "El grupo aprobo la materia"
    else
        pass = "El grupo reprobo la materia"

    let grupoFinal = "El grupo cuenta con una cantidad de " + parseInt(grupo) + " de alumnos"

    alert("Nombre de la escuela: "+school+"\n\nNombre del maestro: "+teacher+"\n\n"+grupoFinal+"\n\nEl promedio del grupo es: "+avg+"\n\n"+pass)
    
    let again = prompt("¿Desea regresar al menu principal?\n\n1-Si\n2-No")
    switch(again){
        case '1':
            operation()
            break;
        case '2':
            alert("¡Sistema Finalizado!")
            break;
        default:
            alert('¡Opcion invalida intente de nuevo!')
    }
}

const averages = () => {
    const school = prompt('¿Cual es el nombre de su escuela?')
    console.log(school)

    const teacher = prompt("Nombre del maestro que califica:")
    let grupos = prompt("¿Cuantos grupos ahi en la escuela?")
    
    let grupo = []
    //Itero el numero de grupos y le asigno en el arreglo la cantidad de alumnos de cada grupo
    for (let i = 1; i <= parseInt(grupos); i++) {
        let students = prompt("¿Cuántos alumnos tiene el grupo " + i + "?");
        grupo.push(parseInt(students));
    }

    console.log("Cantidad de alumnos de cada grupo: ", grupo);
    let resumen = ""; 
    for (let i = 0; i < grupo.length; i++) {
        let numStudents = grupo[i];
        let calificaciones = [];
        let sum = 0;
        
        for (let j = 1; j <= numStudents; j++) {
            let calificacion = prompt(`Calificación del alumno ${j} del grupo ${i + 1}:`);
            calificaciones.push(parseInt(calificacion));
            sum += parseInt(calificacion); 
        }

        console.log(`Calificaciones del grupo ${i + 1}:`, calificaciones);
        
        // Calculo el promedio del grupo
        let avg = sum / calificaciones.length;
        let pass = ""
        if(avg >= 7)
            pass = "El Grupo aprobo la materia"
        else
            pass = "El Grupo reprobo la materia"
        

        resumen += `Grupo ${i + 1}: Promedio ${avg.toFixed(2)}, Número de alumnos ${numStudents} - ${pass}\n`;
    }

    alert("Nombre de la escuela: "+school+"\n\nNombre del maestro: "+teacher+"\n\n"+resumen)
    
    let again = prompt("¿Desea regresar al menu principal?\n\n1-Si\n2-No")
    switch(again){
        case '1':
            operation()
            break;
        case '2':
            alert("¡Sistema Finalizado!")
            break;
        default:
            alert('¡Opcion invalida intente de nuevo!')
    }
}





if(start){
    operation()
}


