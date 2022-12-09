function symbol(){
    let op = getop();
    document.getElementById("symbol").innerHTML = op;
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


function getop(){
    if(document.getElementById("adicao").checked){
        return '+';
    }
    else if(document.getElementById("subtracao").checked){
        return '-';
    }
    else if(document.getElementById("multiplicacao").checked){
        return '*';
    }
    else if(document.getElementById("divisao").checked){
        return '/';
    }
}