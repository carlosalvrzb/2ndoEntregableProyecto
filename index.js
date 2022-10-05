function gen_table(){
    document.getElementById("tab").innerHTML="";
    let capital=Number(document.getElementById("capital").value);
    let cuota=Number(document.getElementById("cuota").value);
    let interes=Number(document.getElementById("interes").value);
    if(capital>0){   
        for(i=1;i<=cuota;i++){
            ca=capital/cuota;
            d1=ca.toFixed(2);
            i2=((capital*interes)/100)/cuota;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=capital.toFixed(2);
        t_i=i2*cuota;
        d4=t_i.toFixed(2);
        t_p=r*cuota;
        d5=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;        
    }else{
        alert("Falta ingresar un Número");
    }
}

function funcionpaso1(){
    sessionStorage.setItem("capital ingresado", document.getElementById("capital").value);
    sessionStorage.setItem("cuota ingresado", document.getElementById("cuota").value);
    sessionStorage.setItem("interes ingresado", document.getElementById("interes").value);
}

function funcionpaso2(){
    if (sessionStorage.getItem("capital ingresado") === null) {
        
    } else {
        elemento1existe = 1
    }
    if (sessionStorage.getItem("cuota ingresado") === null) {
        
    } else {
        elemento2existe = 1
    }
    if (sessionStorage.getItem("interes ingresado") === null) {
        
    } else {
        elemento2existe = 1
    }
    elementosexistentes = (elemento1existe + elemento2existe + elemento3existe)
    if (elementosexistentes = 3) {
        gen_table()
    }
}



// Paso 1 Hacer una funcion que se mande a llamar cuando el valor de la textbox cambie
// Paso 1.1 La funcion deberá guardar el valor del textbox en la local storage
// Paso 2 Despues hacer una funcion que va a revisar si ya hay valores dentro del storage en caso de que la pagina se cargue desde 0
// Paso 2.1 En caso de que los 3 elementos existan, mandar llamar la funcion de gen_table()
// Paso 3 Al principio del documento Inicializar los valores mandar a llamar

// Anotaciones=============================
// Previous capital o data (es el nombre)
// Si existe se pone, si no existe, no se pone nada
// Condicion cuando sale null(porque no hay nada en el Storage)
// Condicion cuando exista un valor
// Si existen los 3 valores que se llame la función gen_table

// 3 Ifs y 1 condicional verdadera

// 3 funciones para guardar los valores
// 1 para recuperarlos todos