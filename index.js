//1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla
function sumar(a, b){
    return a + b;
}
console.log(sumar(4, 3));

//2. Un estudiante realiza 4 exámenes, calcular el promedio de estos
function promedio(a,b,c,d){
    return (a + b + c + d)/4;
}
console.log(promedio(4,2,1,9));

//3. Calcular el área de un rectángulo
function areaRectangulo(b,h){
    return (b * h);
}
console.log(areaRectangulo(8, 3));

//4. Calcular el área de un triángulo
function areaTriangulo(b,h){
    return (b * h)/2;
}
console.log(areaTriangulo(10,4));

//5. Calcular el área de una circunferencia
const π = 3.14159;
function areaCircunferencia(π, r){
    return π * (r*r);
}
console.log(areaCircunferencia(π, 4));

//6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
function sueldoSemanal(ht, sh){
    return ht * sh;
}
console.log(sueldoSemanal(40, 5));

/*7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas,
pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a
resolver el problema, determinando cuantas pulgadas debe pedir con base en
los metros que requiere. Represéntelo mediante el diagrama de flujo y el
pseudocódigo (1 pulgada = 0.0254 m).*/
const p = 0.0254;
function pulgadas(m,p){
    return m/p;
}
console.log(pulgadas(20, p));

//8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano
function dolares(d, s){
    return s / d;
}
console.log(dolares(4, 400));

/*9. Una empresa que contrata personal requiere determinar la edad de las
personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se
les pregunta el año en que nacieron*/
function edad(ac, an){
    return ac - an;
}
console.log(edad(2023, 1997));

//10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad
const personaUno = {nombre: "José", edad: 5}
const personaDos = {nombre: "Carlos", edad: 12}
const personaTres = {nombre: "Bryan", edad: 3}
function personaMenorEdad(){
    if(personaUno.edad < (personaDos.edad && personaTres.edad)){
        console.log(`${personaUno.nombre} es el de menor edad`)
    }else if(personaDos.edad < (personaUno.edad && personaTres.edad)){
        console.log(`${personaDos.nombre} es el de menor edad`)
    }else{
        console.log(`${personaTres.nombre} es el de menor edad`)
    }
}
personaMenorEdad();

/*11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5
años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo
y represéntelo ,que permita determinar el bono que recibirá un trabajador */
function bono(año){
    switch(año){
        case 0:
            console.log("Acá no existes perro");
        break;
        case 1:
            console.log("Recibes $100");
        break;
        case 2:
            console.log("Recibes $200");
        break;
        case 3:
            console.log("Recibes $300");
        break;
        case 4:
            console.log("Recibes $400");
        break;
        case 5:
            console.log("Recibes $500");
        break;
        default:
            console.log("Recibes $1000");
        break;
    }
}
bono(4);

/*12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual
durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido
en cada uno de los 6 años? Realice el algoritmo y representan la solución,
utilizando el ciclo apropiado
 */
function salarioAnual(s){
    for(let i = 0; i < 7; i++){
        const year = s * Math.pow(1.1, i);
        console.log(year)
    }
}
salarioAnual(1500);

//13. Realice un algoritmo para leer las calificaciones de 5 alumnos y determine el número de aprobados y reprobados
function calificaciones(a,b,c,d,e){
    if(a > 13){
        console.log("Aprobados")
    }else{
        console.log("Desaprobados")
    }if(b > 13){
        console.log("Aprobados")
    }else{
        console.log("Desaprobados")
    }if(c > 13){
        console.log("Aprobados")
    }else{
        console.log("Desaprobados")
    }if(d > 13){
        console.log("Aprobados")
    }else{
        console.log("Desaprobados")
    }if(e > 13){
        console.log("Aprobados")
    }else{
        console.log("Desaprobados")
    }
}
calificaciones(4,2,15,16,20);

/*14. Realice un algoritmo para determinar si una persona puede votar con base en
su edad en las próximas elecciones*/
function edadVotar(persona){
    if(persona > 70){
        console.log("Usted tiene la opción de elegir si desea votar, no es obligatorio")
    }else if(persona >= 18){
        console.log("Usted puede votar por su candidato preferido")
    }else{
        console.log("Usted no cuenta con la edad necesaria para votar, a partir de los 18 años en adelante")
    }
}

edadVotar(22);