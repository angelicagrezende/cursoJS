function tabuada() {
    var n1 = document.querySelector('#number1')
    var tab = document.querySelector('#seltab')
    if (n1.value.length == 0) {
        alert('Por favor, digite um número!')   
    } else {
        var final = Number(n1.value)
        var count = 1
        tab.innerHTML = ''

        while (count <= 10) {
            let item = document.createElement('option')
            item.text = `${final} X ${count} = ${final*count}`
            item.value = `tab${count}`
            tab.appendChild(item)
            count ++
        }
    }
}