const tarefas = [
    {titulo:"Adicione uma tarefa no botão acima ☝️", status:"Em andamento"},
    {titulo:"Passe o mouse na tarefa para ver o botão excluir 🗑️", status:"Em andamento"},
    {titulo:"Clique na tarefa para marca-la como feita ✔️", status:"Em andamento"}
  ];

  let contador = tarefas.length;

  function criarTarefasExemplo() {
    document.querySelector("h1").innerHTML = `To-do List (${tarefas.length})`;
  
    contador = tarefas.length;
    document.querySelector("ul").innerHTML = "";
  
    for (let index = 0; index < tarefas.length; index++) {
      const tarefaTemplate = `
        <li>
            <div class="btn-delete">
                <ion-icon name="trash-outline"></ion-icon>
            </div>
            <span onclick="finalizarTarefa(this)">${tarefas[index].titulo}</span>
        </li>
    `;
      document.querySelector("ul").innerHTML += tarefaTemplate;
    }
  }
  
  criarTarefasExemplo();
  
  function adicionarTarefa() {
    const novaTarefa = document.querySelector("input").value;

    const tarefa = {
        titulo:novaTarefa,
        status:"Em andamento"
    };
    
    tarefas.push(tarefa);

    criarTarefasExemplo();

  }
  
  function finalizarTarefa(elemento) {
    const li = elemento.parentNode;
    const ehFinalizada = li.classList.contains("finalizada");
  
    if (ehFinalizada) {
      li.classList.remove("finalizada");
      contador++;
    } else {
      li.classList.add("finalizada");

      //atualizarStatus(li);  

      contador--;
    }
  
    document.querySelector("h1").innerHTML = `To-do List (${contador})`;
  }
  
  function atualizarStatus(elemento){



  }

  function finalizarTarefas() {
    const tarefas = document.querySelectorAll("li");
    let controlador = 0;
    while (controlador < tarefas.length) {
      tarefas[controlador].classList.add("finalizada");
      controlador++;
    }
    contador = 0;
    document.querySelector("h1").innerHTML = `To-do List (${contador})`;
  }
  