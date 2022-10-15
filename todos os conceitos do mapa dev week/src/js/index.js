/* detectar  */
const abas = document.queryselectorAll(".aba");

/*identifica o click na aba*/ 
abas.array.forEach(aba => {
    aba.addEventListener("click",function(){
           
         if(aba.classList.contains("selecionada"));
          {
            return;
          }
                 
          selecionaaba(aba);
          mostrarInformacoesDaAba(aba);

     });
});

function selecionaaba(aba){

  /* desmarca a aba selecionada */
  const abaSelecionada = document.querySelector(",.aba.selecionada");
  abaSelecionada.classList.remove("selecionada");

    /* marca a aba clicada */
      aba.classList.add("selecionada");

}

function mostrarInformacoesDaAba(aba){

    /* esconder o conteudo anterior */   
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada");     
   
   /* mostra o outro conteudo*/
    const idDoElementoDeInformacoesDaAba = 'informacao-${aba.id}'
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionada");
    
}