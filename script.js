document.addEventListener("DOMContentLoaded", function () {
  // Elementos da seção
  const h1 = document.querySelector(".inicio h1");
  const p = document.querySelector(".inicio p");
  const button = document.getElementById("curriculo");

  // Texto para digitação
  const h1Text = "Olá, sou Luis Guilherme";
  const pText = "Desenvolvedor Back-end | Engenheiro de Software";
  const h1Info = "Olá,Sou <br> Luis Guilherme";

  let h1Index = 0;
  let pIndex = 0;

  // Função para digitar o texto com efeito de máquina de escrever
  function typeWriter(element, text, index, callback) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(function () {
        typeWriter(element, text, index, callback);
      }, 100); // Velocidade de digitação (100ms por caractere)
    } else if (callback) {
      callback();
    }
  }

  // Função para animar o título e o parágrafo
  function animateText() {
    // Digitar título
    typeWriter(h1, h1Text, h1Index, function () {
      // Após o título ser digitado, digitar o parágrafo
      typeWriter(p, pText, pIndex);
    });
  }

  // Inicia a animação
  animateText();

  // Ação do botão "Currículo"
  button.addEventListener("click", function () {
    window.location.href = "curriculo guilherme.pdf"; // Substitua pelo link do seu currículo
  });
});

function getApiGItthub() {
  const ul = document.querySelector(".projetos");
  fetch("https://api.github.com/users/lguimorais/repos")
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      var data = await res.json();
      data.map((item) => {
        let li = document.createElement("li");
        li.innerHTML = `
<strong>${item.name.toUpperCase()}</strong>
<span>URL:${item.url}</span>
<span>Data Criação:${Intl.DateTimeFormat("pt-BR").format(
          new Date(item.created_at)
        )}</span>

`;
ul.appendChild(li);
      });
    })
    .catch((e) => console.log(e));
}
getApiGItthub();
