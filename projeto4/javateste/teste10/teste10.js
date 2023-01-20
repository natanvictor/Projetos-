let btn = document.getElementById('btn')
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('digite o numero')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML= ''
        while (c <= n ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }


}

btn.addEventListener('click', tabuada)