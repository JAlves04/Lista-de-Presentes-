function adicionarPresente() {
  let nome = document.getElementById("presente").value.trim();
  let link = document.getElementById("link").value.trim();

  if (nome === "" || link === "") {
    alert("Preencha todos os campos!");
    return;
  }

  let lista = document.getElementById("lista");

  let li = document.createElement("li");

  // LINK DO PRESENTE
  let a = document.createElement("a");
  a.href = link;
  a.textContent = nome;
  a.target = "_blank";

  // BOTÃO RESERVAR (qualquer pessoa pode clicar)
  let botaoReservar = document.createElement("button");
  botaoReservar.textContent = "Reservar";
  botaoReservar.classList.add("reservar");

  botaoReservar.onclick = function () {
    li.classList.toggle("reservado");

    if (li.classList.contains("reservado")) {
      botaoReservar.textContent = "Reservado";
    } else {
      botaoReservar.textContent = "Reservar";
    }
  };

  // BOTÃO REMOVER (só o dono)
  let botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.classList.add("remover");

  botaoRemover.onclick = function () {
    let senha = prompt("Digite a senha do dono para remover:");

    if (senha === "21042011") { // <- você pode mudar essa senha
      li.remove();
    } else {
      alert("Senha incorreta! Só o dono pode remover.");
    }
  };

  // AGRUPA OS BOTÕES
  let divBotoes = document.createElement("div");
  divBotoes.appendChild(botaoReservar);
  divBotoes.appendChild(botaoRemover);

  li.appendChild(a);
  li.appendChild(divBotoes);

  lista.appendChild(li);

  document.getElementById("presente").value = "";
  document.getElementById("link").value = "";
}