function cargar(){
    muertes=new Array(7);
    suma=0;
    promedio=0;
    var cadena ='';
    for(let i=0; i<muertes.length; i++){
        let valor=prompt("Captura la cantidad muertos por dia");
        muertes[i]=parseInt(valor);
        suma+=parseInt(valor);
        console.log(muertes[i]);
    }
    console.log(promedio); 
    for(let indice in muertes){
        cadena +='<div style="background-color:#1F06AC; color:white; width:20%; text-align:center; border:#65D0F4 5px solid;"> Indice: '+indice+'= Valor:'+muertes[indice]+' </div>';
    }
    document.getElementById("promedio").innerHTML=cadena;
    console.log(suma);
   promedio=suma/7
   let min1=Math.min(...muertes);
    let max1=Math.max(...muertes);
   document.getElementById("promedio").innerHTML +="La suma es: "+ suma + "   El promedio es:"+promedio +" El miniimo es: "+min1+"  El maximo es:  "+max1;


}


function dibujarF(){

    let letraE = new Array(5);

    letraE[0] = new Array(4);
    letraE[1] = new Array(4);
    letraE[2] = new Array(4);
    letraE[3] = new Array(4);
    letraE[4] = new Array(4);

    letraE[0] = ["X","X","X","X"];
    letraE[1] = ["X","","",""];
    letraE[2] = ["X","X","X","X"];
    letraE[3] = ["X","","",""];
    letraE[4] = ["X","X","X","X"];

    let cadenaE = '';

    for(let i=0; i<letraE.length; i++){
        for(let j=0; j<letraE[i].length; j++){
                cadenaE += '<div style="color:black; width:40px; height:40px; text-align:center; display:inline-block;">'
            + letraE[i][j] + '</div>';
        }

        cadenaE += '<br>';
    }

    document.getElementById("impF").innerHTML = cadenaE;
}

function calcularSueldo(){

    let sueldos = new Array(3);

    sueldos[0] = new Array(3);
    sueldos[1] = new Array(3);
    sueldos[2] = new Array(3);

    sueldos[0][0] = 120;
    sueldos[0][1] = 180;
    sueldos[0][2] = 280;

    sueldos[1][0] = 120;
    sueldos[1][1] = 280;
    sueldos[1][2] = 340;

    sueldos[2][0] = 240;
    sueldos[2][1] = 520;
    sueldos[2][2] = 890;

    let puesto = document.getElementById("puesto").value;
    let nivel = document.getElementById("nivel").value;
    let horas = parseInt(document.getElementById("hrs").value);

    let sueldo = sueldos[puesto][nivel];
    let total = sueldo * horas;

    document.getElementById("total").innerHTML =
    "Sueldo por hora: $" + sueldo +
    "<br>Total a pagar: $" + total;
}




let agenda = new Array(7);

for(let i=0; i<agenda.length; i++){
    agenda[i] = new Array(3);
}

function registrarAgenda(){

    let dia = document.getElementById("dia").value;

    let hora = document.getElementById("hora").value;
    let evento = document.getElementById("evento").value;
    let descripcion = document.getElementById("descripcion").value;

        agenda[dia][0] = hora;
        agenda[dia][1] = evento;
        agenda[dia][2] = descripcion;

        document.getElementById("hora" + dia).innerHTML = agenda[dia][0];
        document.getElementById("evento" + dia).innerHTML = agenda[dia][1];
        document.getElementById("descripcion" + dia).innerHTML = agenda[dia][2];
    
}

