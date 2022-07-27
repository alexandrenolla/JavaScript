function contar() {
    var txti = window.document.getElementById('txti')
    var i = Number(txti.value)
    var txtf = window.document.getElementById('txtf')
    var f = Number(txtf.value)
    var txtp = window.document.getElementById('txtp')
    var p = Number(txtp.value)
    var res = window.document.getElementById('res')
    
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        if (p <= 0) {
            window.alert('Passo inválido! Digite um passo a partir de 1')
        }
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}