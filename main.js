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

function buscarItems(e) {
    //alert('busca alguma coisa neném?');
    //entender como o text é coletado letra a letra
    console.log(e.target.value.toLowerCase());
//armazenando valor digitado
    let txt = e.target.value.toLowerCase();
        //buscar todos os itens
        let Items = ItemList.getElementsByTagName('li');

    Array.from(Items).forEach( function(item){
            //busca o item na lista
        let nomeItem = item.firstChild.textContent;
    if(nomeItem.toLowerCase().indexOf(txt) != -1){
        item.style.display = 'block'; //mostra o item
    } else {
        item.style.display = 'none'; //oculta o item
    }
    });
}

function removeItem(evento) {
    /*console.log('clicou errado! isso nao é um botão!!');*/
    if(evento.target.classList.contains('delete')) {
        //console.log('TENHO Q DELETAR');
        let li = evento.target.parentElement;
        ItemList.removeChild(li);
    }

}

function addItem(evento) {
evento.preventDefault();

//criar tag <li>
let novo_li = document.createElement('li');
//add a classe para tag li class =list-group-item
novo_li.className = 'list-group-item';
//resgatamos o valor inserido no formulário
let novoItem = document.getElementById('item').value;

//unindo o <li> com o nome do item
novo_li.appendChild(document.createTextNode(novoItem));

//criar o botão deletar
let deleteBtn = document.createElement('button');
//atribuindo classes ao btn
deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
//acrescentando x ao btn
deleteBtn.appendChild(document.createTextNode('X'));


//colocar o btn dentro da tag <li>
novo_li.appendChild(deleteBtn)

console.log(novo_li)
/*console.log(evento) */

// adicionando<li> completa a <ul>
ItemList.appendChild(novo_li);

//limpar campos input
form.reset();

}