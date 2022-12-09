function getop(){
    let op = document.getElementById("selectoptions").value;
    document.getElementById("symbol").innerHTML = op;
    return op;
}

function calcular(){
    let op = getop();
    let n1 = parseFloat(document.getElementById("input1").value);
    let n2 = parseFloat(document.getElementById("input2").value);
    let result;

    switch(op){
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
    }

    document.getElementById("resultado").innerHTML = 'Resultado = ' + result;
}