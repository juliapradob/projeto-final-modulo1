function decisao1() {
    alert('Escolha um número: 1 ou 2');
    var escolha1 = prompt('1: Acha que os lacaios estavam mentindo; \n2: Como não tem nada para fazer, decide descobrir se é os rumores são verdadeiros');
    while (true) {
        if (escolha1 == 1) {
            window.location = ("../personagens/agwen1-derrota.html");
            break;
        } 
        else if (escolha1 == 2) {
            window.location = ("../personagens/agwen2.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha1 = prompt('1: Acha que os lacaios estavam mentindo; \n2: Como não tem nada para fazer, decide descobrir se é os rumores são verdadeiros');
        }
    }
}

function decisao2() {
    var escolha2 = prompt('1: Segue pelas árvores, onde tem total domínio; \n2: Segue pelo rio, onde avista um barco');
    while (true) {
        if (escolha2 == 1) {
            window.location = ("../personagens/agwen2-derrota.html");
            break;
        } 
        else if (escolha2 == 2) {
            window.location = ("../personagens/agwen3.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha2 = prompt('1: Segue pelas árvores, onde tem total domínio; \n2: Segue pelo rio, onde avista um barco');
        }
    }
}

function decisao3() {
    var escolha3 = prompt('1: Vai pelo lado esquerdo; \n2: Vai pelo lado direito');
    while (true) {
        if (escolha3 == 2) {
            window.location = ("../personagens/agwen3-derrota.html");
            break;
        } 
        else if (escolha3 == 1) {
            window.location = ("../personagens/agwen4.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha3 = prompt('1: Vai pelo lado esquerdo; \n2: Vai pelo lado direito')
        }
    }
}
function decisao4() {
    var escolha4 = prompt('1: Decide desafiar o monstro usando seu arco e flecha; \n2: Decide esperar para ver se o monstro dorme');
    while (true) {
        if (escolha4 == 2) {
            window.location = ("../personagens/agwen4-derrota.html");
            break;
        } 
        else if (escolha4 == 1) {
            window.location = ("../personagens/agwen-vitoria.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha4 = prompt('1: Decide desafiar o monstro usando seu arco e flecha; \n2: Decide esperar para ver se o monstro dorme')
        }
    }
}

function tentarNovamente() {
    window.location = ('../personagens/agwen1.html')
}

function jogarNovamente() {
    window.location = ('../index.html')
}