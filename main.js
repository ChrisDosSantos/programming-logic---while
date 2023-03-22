function AulaUmWhile(){
    let numeroWhile = parseFloat(prompt("Digite um número para a Tabuada While"));

    let indiceWhile = 1;

while (indiceWhile <= 10) {
    document.write(numeroWhile + "X" + indiceWhile + " = " + (numeroWhile * indiceWhile) + "<br>");

    indiceWhile = indiceWhile + 1;
}
document.write("Fim do Loop");
}

document.querySelector(".AulaUm-while").innerHTML(AulaUmWhile());
