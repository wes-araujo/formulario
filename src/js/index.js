const botao = document.getElementById("btn");
const campos = document.querySelectorAll(".borda-padrao")

campos.forEach(function (campo) {
  campo.addEventListener("input", function () {

    campo.classList.remove("borda-padrao", "borda-vermelha")

    if (campo.value !== "") {
      campo.classList.add("borda-verde")
    } else {
      campo.classList.remove("borda-verde")
      campo.classList.add("borda-padrao")
    }

  })
})


botao.addEventListener("click", function (event) {
  event.preventDefault();

  campos.forEach(function (campo) {
    if (campo.value.trim() === "") {
      campo.classList.remove('borda-padrao', 'borda-verde');
      campo.classList.add('borda-vermelha');

      if (!campo.nextElementSibling || !campo.nextElementSibling.classList.contains("mensagem-erro")) {
        const erro = document.createElement("span");
        erro.classList.add("mensagem-erro");
        erro.innerHTML = "campo obrigatório"
        campo.insertAdjacentElement("afterend", erro);
      }

    } else {
      campo.classList.remove('borda-padrao', 'borda-vermelha');
      campo.classList.add('borda-verde');

      if (campo.nextElementSibling && campo.nextElementSibling.classList.contains("mensagem-erro")) {
        campo.nextElementSibling.remove();
      }
    }
  });
});
