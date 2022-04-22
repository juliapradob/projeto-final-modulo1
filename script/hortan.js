function decisao1() {
    alert('Escolha um número: 1 ou 2');
    var escolha1 = prompt('1: Esquerda \n2: Direita');
    while (true) {
        if (escolha1 == 2) {
            window.location = ("../personagens/hortan1-derrota.html");
            break;
        } 
        else if (escolha1 == 1) {
            window.location = ("../personagens/hortan2.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha1 = prompt('1: Esquerda \n2: Direita');
        }
    }
}

function decisao2() {
    var escolha2 = prompt('1: Ajudar o amigo do hobbit \n2: Ignorar o empréstimo do álcool e seguir seu caminho');
    while (true) {
        if (escolha2 == 2) {
            window.location = ("../personagens/hortan2-derrota.html");
            break;
        } 
        else if (escolha2 == 1) {
            window.location = ("../personagens/hortan3.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha2 = prompt('1: Ajudar o amigo do hobbit \n2: Ignorar o empréstimo do álcool e seguir seu caminho');
        }
    }
}

function decisao3() {
    var escolha3 = prompt('1: Interpretar a dica do ferido hobbit como a necessidade de acender uma tocha \n2: Seguir seus instintos e encarar a caverna em sua forma natural');
    while (true) {
        if (escolha3 == 1) {
            window.location = ("../personagens/hortan3-derrota.html");
            break;
        } 
        else if (escolha3 == 2) {
            window.location = ("../personagens/hortan4.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha3 = prompt('1: Interpretar a dica do ferido hobbit como a necessidade de acender uma tocha \n2: Seguir seus instintos e encarar a caverna em sua forma natural')
        }
    }
}
function decisao4() {
    var escolha4 = prompt('1: Tentar subir a corda \n2: Descer a ribanceira em direção ao clarão');
    while (true) {
        if (escolha4 == 2) {
            window.location = ("../personagens/hortan4-derrota.html");
            break;
        } 
        else if (escolha4 == 1) {
            window.location = ("../personagens/hortan-vitoria.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha4 = prompt('1: Tentar subir a corda \n2: Descer a ribanceira em direção ao clarão')
        }
    }
}

function tentarNovamente() {
    window.location = ('../personagens/hortan1.html')
}

function jogarNovamente() {
    window.location = ('../index.html')
}