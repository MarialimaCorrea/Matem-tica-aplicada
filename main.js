const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

// ⚠️ Datas FUTURAS
const tempos = [
  new Date("2026-12-31T00:00:00"),
  new Date("2026-11-30T00:00:00"),
  new Date("2026-10-30T00:00:00"),
  new Date("2026-09-30T00:00:00")
];

function calculaTempo(tempoObjetivo) {
  const agora = new Date();
  const tempoFinal = tempoObjetivo - agora;

  if (tempoFinal <= 0) {
    return [0, 0, 0, 0];
  }

  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
  for (let i = 0; i < tempos.length; i++) {
    const [dias, horas, minutos, segundos] = calculaTempo(tempos[i]);

    document.getElementById("dias" + i).textContent = dias;
    document.getElementById("horas" + i).textContent = horas;
    document.getElementById("min" + i).textContent = minutos;
    document.getElementById("seg" + i).textContent = segundos;
  }
}

function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();