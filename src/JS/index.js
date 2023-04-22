const setaAvanco = document.querySelector('.btn-avancar');
const setaVoltar = document.querySelector('.btn-voltar');
const CardsOne = document.querySelectorAll('.cartao');
let cardAtual = 0;

setaAvanco.addEventListener('click', () => {
    console.log('cardAtual',cardAtual);
    console.log('CardsOne',CardsOne.length-1);


    if(cardAtual === CardsOne.length-1)return;
    
    

    cardAtual++;
    console.log(CardsOne[cardAtual].classList.add('selecionado'));

    const cartaoSelecionado = document.querySelector('.selecionado');
     cartaoSelecionado.classList.remove('selecionado');
     console.log(cartaoSelecionado);


})


setaVoltar.addEventListener('click', () =>{
   if(cardAtual === 0)return;

   const cartaoSelecionado = document.querySelector('.selecionado');
   cartaoSelecionado.classList.remove('selecionado');
   
   cardAtual--;
   console.log(cardAtual);
   CardsOne[cardAtual].classList.add('selecionado')
   
   
   
})