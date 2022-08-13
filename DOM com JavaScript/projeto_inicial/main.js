import BotaoConclui  from "../componentes/concluirTarefas"
import BotaoDeleta from "../componentes/deletaTarefas"

const criarTarefa = (evento) => { 

    evento.preventDefault()
    
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    

    const tarefa = document.createElement('li') // cria elementos 
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>` //template de um paragrafo recebe conteudo html e JavaScript
   
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa) // coloca elemento filho dentro do elemento pai
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)



