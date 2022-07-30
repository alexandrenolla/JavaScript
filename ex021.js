let num = [5,8,4]
console.log(`Imprimindo a Array com 3 elementos iniciais: ${num}`)
num[3] = 6
console.log(`Adicionando o valor 6 na quarta posição: ${num}`)
num.push(7)
console.log(`Adicionando o valor 7 na última posição: ${num}`)
num.sort()
console.log(`Ordenando em ordem crescente: ${num}`)
console.log(`O primeiro elemento da Array é o ${num[0]}.`)
console.log(`O vetor tem ${num.length} elementos.`)

/*for (c = 0; c < num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}.`)
}*/
for (c in num) {
    console.log(`A posição ${c} tem o valor ${num[c]}.`)
}
pos = num.indexOf(16)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor digitado está na posição ${pos}`)
}
