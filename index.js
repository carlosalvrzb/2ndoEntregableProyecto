let textoCapital;
let textoCuota;
let textoInteres;
let limpiarStorage;

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

function inicializarElementos() {
    capital = document.getElementById("capital");
    cuota = document.getElementById("cuota");
    interes = document.getElementById("interes");
    limpiarStorage = document.getElementById("limpiarStorage");
}

function inicializarEventos() {
    limpiarStorage.onclick = eliminarStorage;
}

function eliminarStorage() {
    localStorage.clear();
}

function obtenerCapitalStorage() {
    let capitalAlmacenado = localStorage.getItem("capital");
    if (capitalAlmacenado) {
        capital = capitalAlmacenado;
        mostrarTextoCapital();
    }
}

function obtenerCuotaStorage() {
    let cuotaAlmacenado = localStorage.getItem("cuota");
    if (cuotaAlmacenado) {
        cuota = cuotaAlmacenado;
        mostrarTextoCuota();
    }
}

function obtenerInteresStorage() {
    let interesAlmacenado = localStorage.getItem("interes");
    if (interesAlmacenado) {
        interes = interesAlmacenado;
        mostrarTextoInteres();
    }
}

function mostrarTextoCapital() {
    textoCapital.innerHTML += ` ${capital}`;
}

function mostrarTextoCuota() {
    textoCuota.innerHTML += ` ${cuota}`;
}

function mostrarTextoInteres() {
    textoInteres.innerHTML += ` ${interes}`;
}

function main() {
    obtenerCapitalStorage();
    obtenerCuotaStorage();
    obtenerInteresStorage()
    inicializarElementos();
}

main();