let quantidadeDeDevolucoes = []; // Array para armazenar devoluções

function alterarStatus(gameId) {
    // Seleciona o item do jogo e o botão associado
    let gameItem = document.getElementById(`game-${gameId}`);
    let button = gameItem.querySelector('.dashboard__item__button');

    if (button.textContent === 'Alugar') {
        // Troca o texto e o estilo do botão para "Devolver"
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');

        // Adiciona a classe de imagem alugada
        let imgDiv = gameItem.querySelector('.dashboard__item__img');
        imgDiv.classList.add('dashboard__item__img--rented');
    } else {
        // Troca o texto e o estilo do botão para "Alugar"
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return');

        // Remove a classe de imagem alugada
        let imgDiv = gameItem.querySelector('.dashboard__item__img');
        imgDiv.classList.remove('dashboard__item__img--rented');

        // Confirma a devolução
        let confirma = confirm('Tem certeza que deseja devolver o jogo?');
        if (confirma === true) { alert('Jogo devolvido com sucesso!'); 
            
            // Inicializa o contador se ainda não existir 
            if (!quantidadeDeDevolucoes[gameId]) { quantidadeDeDevolucoes[gameId] = 0; } 
            
            // Incrementa o contador de devoluções 
            quantidadeDeDevolucoes[gameId]++;
            console.log(`Devoluções do jogo ${gameId}: ${quantidadeDeDevolucoes[gameId]}`);
        } else {
            alert('Jogo não devolvido!');
        }
    }
}
