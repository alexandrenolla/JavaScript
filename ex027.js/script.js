function adicionar() {
    var txtnum = window.document.getElementById('txtnum')
    var num = Number(txtnum.value)
    var caixa = window.document.getElementById('select')
    var res = document.querySelector('div#res')
    let valores = []
    if (num <= 0 || num > 100) {
        window.alert('Digite um número válido')
    }  else {
        valores.push(num)
        caixa.innerHTML = ''
        caixa2 = document.createElement('option')
        caixa2.text += `Valor ${num} adicionado.`
        caixa.appendChild(caixa2)
    }
}