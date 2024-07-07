let currentIndex = 0; //Essa variável manterá o controle do índice do item atualmente visível no carrossel.

//seleciona os itens da classe, armazena em items. 
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length; //calcula o total de items do carrossel e armazena em totalItems


// Adiocionando o evente de Click nos botões
document.querySelector('.next').addEventListener('click', () => {
    moveToNextItem();  //quando o botão é clicado, chama a função
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevItem();
});


function updateCarousel() {
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });  //Adiciona a classe active ao índice atual e remove dos outros 

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
} //move o item para a esquerda, mostrando o atual


//Movendo para o próximo item

function moveToNextItem() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

//Movendo para o item anterior

function moveToPrevItem() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
}

//atualizando para o primeiro item 
updateCarousel();