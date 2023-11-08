//Variáveis dos elementos da lista

//Atribuindo o formulario a uma variável
const form = document.getElementById('addForm');
//Atribuir a lista a uma variável
const ItemList = document.getElementById('items');
//Atribuição  da barra de pesquisa
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
ItemList.addEventListener('click' , removeItem);
filter.addEventListener('keyup', buscarItems);

function buscarItems() {
    alert('busca alguma coisa neném?');
}

function removeItem() {
    alert('clicou na ul!!!');
}

function addItem() {
    alert('você clicou!!!');

}