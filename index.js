let p ={
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    cantidadDecimal: false,
    resultado: false,
} 

let n = {
    inicio : ()=>{
       for(let i = 0; i< p.teclas.length; i++){
           p.teclas[i].addEventListener("click",n.oprimirTecla)
       }
    },
    oprimirTecla: (event)=>{
       p.accion = event.target.getAttribute("class");
       p.digito = event.target.innerHTML;
       n.calculadora(p.accion, p.digito);
    },
    calculadora: (accion,digito)=>{
        switch(accion){
            case "numero":
                p.cantidadSignos = 0;
                if(p.operaciones.innerHTML == "0"){
                    p.operaciones.innerHTML = digito;
                }
                else{
                    if(p.resultado){
                        p.resultado = false;
                        p.operaciones.innerHTML = digito;
                      
                    }
                    else{
                        p.operaciones.innerHTML += digito;
                    }
                
                }
                
                break;
            case "signo":
                p.cantidadSignos ++;
                if(p.cantidadSignos == 1){
                    if(p.operaciones.innerHTML == "0"){
                        p.operaciones.innerHTML = 0;
                    }
                    else{
                        p.operaciones.innerHTML += digito;
                        p.resultado = false;
                        p.cantidadDecimal = false;
                    }
                   
                }
                break;
            case "decimal":
                if(!p.cantidadDecimal){
                    p.operaciones.innerHTML += digito;
                    p.cantidadDecimal = true;
                    p.resultado = false;
                }
                
                break;
            case "igual":

                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                p.resultado = true;
                break;
        }
    },
    borrarCalculadora : ()=>{
        p.operaciones.innerHTML = 0;
        p.resultado = false;
    },
}
n.inicio()