var contador = 0;

function agregarTarea(){
    var tareaNueva = document.getElementById("newTaskText").value;
    var contenedor = document.getElementById("tasksContainer");
    
    if(tareaNueva != ""){
        var divTask = document.createElement("div");
        divTask.innerHTML = "<button onclick='eliminar(" + contador + ")'>X</button><span>" + tareaNueva + 
                            "</span>" + "<input type='checkbox' onchange='cambiarEstado(" + contador + 
                            ",this)'>";

        contenedor.appendChild(divTask);
        contenedor.appendChild(document.createElement("br"));

        contador++;
    }
    
}

function cambiarEstado(fila, check){
    var contenedor = document.getElementById("tasksContainer");
    var divs = contenedor.getElementsByTagName("div");
    var divElegido = divs[fila];
    var spanTexto = divElegido.getElementsByTagName("span")[0];

    if(check.checked){
        spanTexto.classList.add("hecho");
    }else{
        spanTexto.classList.remove("hecho");
    }
}

function eliminar(fila){
    var contenedor = document.getElementById("tasksContainer");
    var divs = contenedor.getElementsByTagName("div");
    var divElegido = divs[fila];
    divElegido.classList.add("eliminado");
}