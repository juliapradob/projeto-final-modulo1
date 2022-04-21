function decisao1() {
    alert('Escolha um número: 1 ou 2');
    var escolha1 = prompt('1: Ele pega o bilhete, o rasga e joga no lixo \n2: Analisa o bilhete, decide fazer as malas e parte para a aventura');
    while (true) {
        if (escolha1 == 1) {
            window.location = ("/personagens/bylim1-derrota.html");
            break;
        } 
        else if (escolha1 == 2) {
            window.location = ("bylim2.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha1 = prompt('1: Ele pega o bilhete, o rasga e joga no lixo \n2: Analisa o bilhete, decide fazer as malas e parte para a aventura');
        }
    }
}

function decisao2() {
    alert('Escolha um número: 1 ou 2');
    var escolha2 = prompt('1: Permanece no acampamento com a fogueira \n2: Sai em busca de alimento');
    while (true) {
        if (escolha2 == 2) {
            window.location = ("/personagens/bylim2-derrota.html");
            break;
        } 
        else if (escolha2 == 1) {
            window.location = ("bylim3.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha2 = prompt('1: Permanece no acampamento com a fogueira \n2: Sai em busca de alimento');
        }
    }
}

function decisao3() {
    alert('Escolha um número: 1 ou 2');
    var escolha3 = prompt('1: Um caminho livre e bem demarcado \n2: Um caminho escuro, com espinhos e sinuoso');
    while (true) {
        if (escolha3 == 1) {
            window.location = ("/personagens/bylim3-derrota.html");
            break;
        } 
        else if (escolha3 == 2) {
            window.location = ("bylim4.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha3 = prompt('1: Um caminho livre e bem demarcado \n2: Um caminho escuro, com espinhos e sinuoso')
        }
    }
}
function decisao4() {
    alert('Escolha um número: 1 ou 2');
    var escolha4 = prompt('1: Foge e volta para o conforto da sua casa \n2: Procura uma maneira de distrair o monstro e entra na caverna');
    while (true) {
        if (escolha4 == 2) {
            window.location = ("/personagens/bylim4-derrota.html");
            break;
        } 
        else if (escolha4 == 1) {
            window.location = ("/personagens/bylim-vitoria.html");
            break;
        }
        else {
            alert('Escolha um número: 1 ou 2!')
            escolha4 = prompt('1: Foge e volta para o conforto da sua casa \n2: Procura uma maneira de distrair o monstro e entra na caverna')
        }
    }
}

function tentarNovamente() {
    window.location = ('./bylim1.html')
}

function jogarNovamente() {
    window.location = ('../index.html')
}