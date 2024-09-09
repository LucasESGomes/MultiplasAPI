//Função API dolar
function refresh() {

    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {
     console.log(economia)
     document.getElementById('valor-dolar').innerHTML = economia.USDBRL.bid; 
     document.getElementById('maior-dolar').innerHTML = economia.USDBRL.high;
     document.getElementById('menor-dolar').innerHTML = economia.USDBRL.low;
})

    
}

//Criando função de intervalo para atualizar a API dolar
setInterval(refresh,10)