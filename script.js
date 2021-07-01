//constante que recebe o id da div fantasma criada no html para ser utilizada no js
const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

//listas de estudos que serão inseridos no forms
let lists = []

//essa função pega a data exata e transforma em string para
//que os elementos da lista sejam inputados de forma correta Como um objeto
    
function createList(name){
    return {id: Date.now().toString(), name: name}
}

//submit é o tipo do evento do botão (envio)
newListForm.addEventListener('submit', function(e){
//sempre que o submit é acionado, a pagina é atualizada. Para isso precisamos 
//capturar os inputs para não perder as infos.
    e.preventDefault()
    //capturando o valor do input
    const listName = newListInput.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()

})



//essa função já é para jogar a lista para o html

function render() {
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('Li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)

    })
}
//função criada para eleminar os primeiros itens para que não
//se repitam na lista.

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}