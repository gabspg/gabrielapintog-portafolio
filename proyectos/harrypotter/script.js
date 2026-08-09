function calcularCasa(){

    let casas={
        Gryffindor:0,
        Slytherin:0,
        Ravenclaw:0,
        Hufflepuff:0
    };

    for(let i=1;i<=10;i++){
        let respuesta=document.getElementById("p"+i).value;
        casas[respuesta]++;
    }

    let casa="Gryffindor";

    for(let c in casas){
        if(casas[c]>casas[casa]){
            casa=c;
        }
    }

    let mensaje="";

    if(casa=="Gryffindor"){
        mensaje="🦁 ¡Perteneces a Gryffindor! Eres valiente y decidido.";
    }else if(casa=="Slytherin"){
        mensaje="🐍 ¡Perteneces a Slytherin! Eres ambicioso y estratégico.";
    }else if(casa=="Ravenclaw"){
        mensaje="🦅 ¡Perteneces a Ravenclaw! Destacas por tu inteligencia y creatividad.";
    }else{
        mensaje="🦡 ¡Perteneces a Hufflepuff! Eres leal, amable y trabajador.";
    }

    document.getElementById("resultado").innerHTML=mensaje;
}