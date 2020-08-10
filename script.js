let num = document.getElementsByClassName('num')
let opr = document.getElementsByClassName('opr_b')
let count = []

const MAX_VISOR_CHAR = 12

for (let pos = 0; pos < num.length; pos++) {
    num[pos].addEventListener('click', function () {
        addNumber(num[pos])
    })
}

for (let pos = 0; pos < opr.length; pos++) {
    opr[pos].addEventListener('click', function () {
        addOpr(opr[pos])
    })
}

function addNumber(n) {
    document.getElementById("total").removeAttribute("hidden")
    if (document.getElementById('total').innerHTML.length < MAX_VISOR_CHAR) {
        total.innerHTML += n.innerHTML
    }
}

function addOpr(opr) {
    let currentNumber = Number(document.getElementById('total').textContent)

    if (currentNumber != "") {
        document.getElementById('total').innerHTML = ""
        document.getElementById('accumulator').innerText += `${currentNumber}${opr.innerHTML}`
        count.push(currentNumber)
        count.push(opr.innerHTML)
    }
}

function AddFloat() {
    let currentNumber = document.getElementById('total').innerHTML

    if (!currentNumber.includes(".")) {
        document.getElementById("total").innerHTML += "."
    }
}

function Percent() {
    let currentNumber = document.getElementById("total").innerHTML

    if (currentNumber != "") {
        document.getElementById("total").innerHTML = Number(document.getElementById("total").innerHTML) / 100
    }
}

function Sqrt() {
    let currentNumber = document.getElementById("total").innerHTML
    let sqrt = Math.sqrt(Number(currentNumber))

    if (sqrt.toString().length > 6) {
        sqrt = sqrt.toFixed(3)
    }

    if (currentNumber != "") {
        document.getElementById('total').innerHTML = sqrt.toString().substring(0, MAX_VISOR_CHAR)
    }

}

function Clear() {
    document.getElementById('total').innerHTML = ""
    document.getElementById('accumulator').innerHTML = ""
    count = []
}

function Equal() {
    let currentNumber = Number(document.getElementById('total').textContent)

    if (currentNumber != "") {
        count.push(currentNumber)
        document.getElementById('accumulator').innerText += `${currentNumber}`
    }

    if (isNaN(count[count.length - 1])) {
        count.pop()
    }

    let tot = null

    for (let p in count) {

        if (count[p] == 'x') {
            count[p] = '*'
        }
        if (count[p] == '÷') {
            count[p] = '/'
        }
        tot += count[p]
    }
    count = []
    document.getElementById('total').innerHTML = eval(tot.toString().substring(0, MAX_VISOR_CHAR))
    document.getElementById('accumulator').innerHTML = ""
}