// document.body.onload=function(){
//     alert("hola mundo")
// }

function suma(){
    var a=0;
    var b=0;
    var suma=0;
    var mu=0;
    var div=0; 
    var res=0;
    alert("Este algoritmo realiza las cuatros operaciones matematicas");

    a= parseInt(prompt("por favor ingrese el primer valor a operar "));
    b= parseInt (prompt ("Por favor ingrese el segundo valor a operar "));
    
    suma= a+b;    
    alert("el resultado de la suma es: " +suma );

    res= a-b;
    alert("el resultado de la resta es: " +res );

    mu= a*b;
    alert("el resultado de la multiplicacion es: " +mu );

    div= a/b
    alert("el resultado de la division es: " +div );
}

function area(){
    b=0;
    h=0;
    re=0;
    alert("Este algoritmo dara el resultado del area de un triangulo");

    b=parseInt(prompt("por favor ingrese el valor de la base del triangulo "));
    h=parseInt(prompt("por favor ingrese el valor de la altura del triangulo "));

    re= (b*h) /2;
    alert("el area del triangulo es: " +re );

}

function ma2nu(){
    a=0;
    b=0;
    alert("Este algoritmo mostrara el mayor de los dos numeros ingresados por el usuario");

    a=parseInt(prompt("por favor ingrese el primer numero "));
    b=parseInt(prompt("por favor ingrese el segundo numero "));

    if (a===b) { 
    alert("los numeros son iguales: "+a)
    }    
    else if (a<b){
        alert("el numero mayor es: "+b)
    }
    else if (a>b){
        alert ("el numero mayor es: "+a)
    }
}

function med3(){
    a=0;
    b=0;
    c=0;
    alert("Este algoritmo mostrara el numero menor de tres numeros ingresados por el usuario ")

    a=parseInt(prompt("por favor ingrese el primer numero "));
    b=parseInt(prompt("por favor ingrese el segundo numero "));
    c=parseInt(prompt("Por favor ingrese el tercer numero "));

    if ( (a<b) && (a<c) )  {
        
    alert("el numero menor es: " +a)
    }
    if ((b<a)&&(b<c)){
        alert("el numero menor es: "+b)
    }
    if ((c<a)&&(c<b)){
        alert("el numero menor es: "+c)
    }
    if ((a===b)&&(b===c)) {
        alert("los numeros son iguales")               
    }
}

function ban(){
    var ti=0;
    var cap=0;
    var to=0;
    
    alert("Este algoritmo mostrara el  interes generado por el tiempo y el monto de inversion ingresado por el usuario ");

    cap= parseInt(prompt("ingrese el monto que deseea invertir: "));
    ti=parseInt(prompt("ingrese cuantos años desea mantener la inversion: "));

    to=(cap *24 /100)*ti;

    alert("la ganancia en intereses es: "+to);
    alert("la suma de su capital con los intereses es: "+(to+cap));

}

function year(){
    alert("Este algoritmo mostrara el año de nacimiento dependiendo la edad ingreada por el usuario ");
    var ed=0;
    var an=0; 
    var re=0;
    
    an= parseInt(prompt("ingrese el año actual"));
    ed=parseInt(prompt("ingrese su edad"));

    re= (an-ed);

    alert("Usted nacio en el año: "+re);

}

function frutdes(){
    alert("Este algoritmo mostrara el descuento dependiendo de los kilos comprados por el usuario");
    
    var val=0;
    var des=0;
    var total=0;
    var kil= 0;
    var de=0;

    kil= parseInt(prompt("digite la cantidad de kilos que lleva el cliente"));
    if (kil<=2) {
        
        alert("total a pagar: "+kil*4500);        
    }

            else if (kil <= 5) {
             total = 4500* kil;
             des = total * 10/ 100;
                de= total - des;
                alert("Valor a pagar: "+de );
        
             }
             
             else if (kil <= 10) {
                total = 4500*kil;  
                des = total * 15/ 100;
                de= total - des;
                alert ("Valor a pagar: "+de);

             }
             else if (kil >= 10) {
                total = 4500*kil;  
                des = total * 20/ 100;
                de= total - des;
                alert("Valor a pagar: "+de);
                 
             }
}

function metros(){
    alert ("Este algoritmo es un coversor de metros a centimetros");
        var c=0;
        var m=0;

        m=parseInt(prompt("digite la cantidad de metros que deseea convertir a centimetros"));

        c=m*100;
        alert("La cantidad de centimetros es :"+c);
}


function elevacion(){
    alert ("Este algoritmo elevara un numero digitado por el usuario al cuadrado");
    var a=0;
    var r=0;
    
    a=parseInt(prompt("digite el numero que desea elevar: "));

    r= a*a;

    alert ("El resultado es: "+r);

}


function paroimpar(){
    alert ("Este algoritmo permitirá saber si el numero ingresado por el usuario es par o impar");
    var a=0;
    
    a=parseInt(prompt("Por favor digite un numero"));
    if (a===0) {
        alert("el numero es cero: "+a);
        
    }
    else if ((a % 2)===0) {
        alert ("el numero es par: "+a);
    }
    else if ((a % 2)!=0) {
        alert ("El numero es impar: "+a);
        
    }

}

function promecole(){
    alert("Este sistema permite calcular su promedio de las notas de ingles, recuerde que las calificaciones son en una escala de 1 a 5 donde reprueba entre 1 y 2.9 y aprueba si es superior 3");
    var cal1, cal2, cal3, cal4, cal5, nota, r=0;
    
    
    cal1=parseInt(prompt("Por favor ingrese la nota numero uno: "));
    cal2=parseInt(prompt("Por favor ingrese la nota numero dos: "));
    cal3=parseInt(prompt("Por favor ingrese la nota numero tres: "));
    cal4=parseInt(prompt("Por favor ingrese la nota numero cuatro: "));
    cal5=parseInt(prompt("Por favor ingrese la nota numero cinco: "));
    
    r= cal1+cal2+cal3+cal4+cal5;
    nota = r/5;
    
    if (nota<=29) {
        alert("El alumno reprobo: " + nota);
        
    } else{
        alert("El almuno aprobo: "+ nota);
    }

 


}

function cifra(){
    
    alert("Algoritmo para sumar las cifras de un numero digitado por el usuario");

    var nu=0;
    nu=parseInt(prompt("Por favor ingrese un numero "));

    if (nu <= 9) {
        alert("el numero una cifra "+nu);
        
    }
    else if (nu <= 99) {
        alert("el numero contiene dos cifras "+nu);
        
    }
    else if (nu <=999) {
        alert("el numero contiene tres cifras"+nu);
        
    }

    else if (nu <= 9999) {
        alert("el numero contiene cuatro cifras "+nu);
        
    }
    else{
        alert("el numero contiene mas de cuatro cifras "+nu);
    }

    
        
    


}

             



    
        
    
    





