var numEsco = []

function sorteio() {
    if(numEsco.length == 6 && numEsco.findIndex(null) == ){
    var cont = 0
    numSort = []

    while(cont < 6){
    let num = Math.random() * 60;
    num = Math.ceil(num)
    if(!numSort.includes(num)){
        numSort[cont] = num
        console.log(numSort)
        cont++
        }
    } document.getElementById("Sorteados").innerHTML = numSort;
} else{
    alert("É necessario digitar os 6 números, antes do sorteio")
}

document.getElementById("sorteados").innerHTML = numSort
contAcertos()
}
function getValor(valor, pos){
    valor = Number(valor)
    if(valor <= 0 || valor > 60){
        alert("Numero invalido, digite um numero entre 1 e 60")
        document.getElementById(`num${pos+1}`).value = ""
    } else if(numEsco.includes(valor)){
        alert("Numero repetido, escolha um outro numero!")
        document.getElementById(`num${pos+1}`).value = ""
    } else{
    numEsco[pos] = valor
    console.log(numEsco)
    }
}
function contAcertos(){
    numEsco.forEach(function(value,index){
        if(numSort.includes(value)){
            contA = contA +1
