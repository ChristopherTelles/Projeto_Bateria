let input = document.getElementById("input");
let button = document.getElementById("button");
document.body.addEventListener("keyup", playAudio);
button.addEventListener("click", reproducao);

// Função para reproduzir o som correspondente à tecla pressionada
function playAudio(e) {
  let audio = document.getElementById("s_" + e.code.toLowerCase());
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

// Função para reproduzir a sequência de sons com base no texto do input
function reproducao() {
  let text = input.value.toLowerCase(); // Converte o texto para minúsculas
  for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
      let audio = document.getElementById("s_key" + text[i]);
      if (audio) {
        audio.currentTime = 0; // Reinicia o áudio para tocar desde o início
        audio.play(); // Toca o áudio
      }
    }, i * 400); // Define um intervalo de 400ms entre cada som
  }
}
