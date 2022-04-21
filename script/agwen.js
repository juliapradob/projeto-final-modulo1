function decisao1() {
    alert('1: Acha que os lacaios estavam mentindo; \n2: Como não tem nada para fazer, decide descobrir se é os rumores são verdadeiros');
    var escolha1 = prompt('Escolha um número: 1 ou 2');
    while (true) {
        if (escolha1 == 1) {
            window.location = ("/personagens/agwen1-derrota.html");
            break;
        } 
        else if (escolha1 == 2) {
            window.location = ("agwen2.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha1 = prompt('Escolha um número: 1 ou 2');
        }
    }
}

function decisao2() {
    alert('1: Segue pelas árvores, onde tem total domínio; \n2: Segue pelo rio, onde avista um barco');
    var escolha2 = prompt('Escolha um número: 1 ou 2');
    while (true) {
        if (escolha2 == 1) {
            window.location = ("/personagens/agwen2-derrota.html");
            break;
        } 
        else if (escolha2 == 2) {
            window.location = ("agwen3.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha2 = prompt('Escolha um número: 1 ou 2');
        }
    }
}

function decisao3() {
    alert('1: Vai pelo lado esquerdo; \n2: Vai pelo lado direito');
    var escolha3 = prompt('Escolha um número: 1 ou 2');
    while (true) {
        if (escolha3 == 2) {
            window.location = ("/personagens/agwen3-derrota.html");
            break;
        } 
        else if (escolha3 == 1) {
            window.location = ("agwen4.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha3 = prompt('Escolha um número: 1 ou 2')
        }
    }
}
function decisao4() {
    alert('1: Decide desafiar o monstro usando seu arco e flecha; \n2: Decide esperar para ver se o monstro dorme');
    var escolha4 = prompt('Escolha um número: 1 ou 2');
    while (true) {
        if (escolha4 == 2) {
            window.location = ("/personagens/agwen4-derrota.html");
            break;
        } 
        else if (escolha4 == 1) {
            window.location = ("/personagens/agwen-vitoria.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha4 = prompt('Escolha um número: 1 ou 2')
        }
    }
}