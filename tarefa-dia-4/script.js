/* --------------- LISTA DE TAREFAS NO HTML ----------------------------------------------*/
//
//
//
let idTarefa =0; // um indexador para item da lista "ul"

// Obtém o valor na caixa "new-task" do HTML
const  inputTarefa = document.getElementById("new-task");

/* ---------------------- Cria um procedimento para adicionar tarefa na lista----------------*/
const adicionaTarefa = () => {


    if  (inputTarefa.value == "") {return}  //Impede a adição de uma tarefa sem nenhum texto
    
    // cria um elemento "li" vazio
    const item = document.createElement( "li" )

    idTarefa++; // incrementa o indexador de elementos "li".

    item.id = idTarefa; // indexando o item "li" da lista "ul".

    // acrescenta o valor de input "new-task", no elemento "li"
    // e escreve a instrução para a conclusão de tarefa
    // adiciona um botão tipo "cancelar" dentro do fluxo
    item.innerHTML = ` 
        <span onclick = "concluir(${ idTarefa })" > ${ inputTarefa.value } </span>   
        <button onclick = "cancelaItem(${ idTarefa })"  class = "cancelaItem" >\u{00D7}</button>
    `
    // acessa a lista de tarefa no documento HTML
    const lista = document.querySelector( "#list" )

    // escreve o elemento "li" construído no JS, no documento (HTML)
    lista.appendChild ( item )

    // esvaziar caixa de input
    inputTarefa.value = ""

}; /* -----------------------------------------------------------------------------------------*/

/*  Adicionar um evento "ao clicar" ao botão "buttonAdd" do HTML  */
document
    .querySelector ( "#button-add")
    .addEventListener ( "click", adicionaTarefa ); // acionar o procedimento "adicionaTarefa"
    
/*   Esvaziar toda a lista "ul" do HTML */
const resetButton = document.querySelector ( ".blueButton" ); 

resetButton.addEventListener ( "click" , function ( event ) {
    const lista = document.querySelector ( "#list" )
    lista.innerHTML = "" // "ul" esvazia
} );

/* ---------------------- Cria um procedimento -------------------------- */
function concluir ( itemId ) {
    const tarefaSelecionada = document.getElementById ( itemId );
    tarefaSelecionada.className = "concluida"; //classifica um elemento "li"
}

/* ---------------------- Cria um procedimento -------------------------- */
function cancelaItem ( itemId ) {
    const tarefaSelecionada = document.getElementById ( itemId );
    tarefaSelecionada.remove() } // remove o item da lista
 