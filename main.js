const item1 = document.querySelector('item_1')
const caixaDialogo = document.querySelector('caixa_dialogo2')
const palavrasEng = document.querySelectorAll('.div_coluna h2')
const modal = document.querySelector('#modal')
const explicacaoEng = document.querySelector('.explicacaoIngles')
const explicacaoBr = document.querySelector('.explicacaoPortugues')
const palavraIngModal = document.querySelector(".textoModal h3")
const palavraPortugues = document.querySelector('.palavraPortugues')
const abrirAba = document.querySelector('.frase_dialogo')
const dialogoexemp = document.querySelector('.caixa_dialogo')
const fecharModal = document.querySelector(".fechar-modal")

let audio = new Audio('./cade-a-seta-completo.mp3')
let audioFrase = new Audio

for (let pos = 0; pos < palavrasEng.length; pos++) {
  palavrasEng[pos].addEventListener('click', (e) => {
    e.stopPropagation()
    modal.style.display = "block"

    if (e.target.textContent === "Love") {
      explicacaoEng.textContent = "It is a deep feeling of affection, fondness, tenderness and care for someone or something. Love can be directed towards a person, a pet, an object, an activity or even oneself."
      palavraPortugues.textContent = 'Amor'
      explicacaoBr.textContent = 'É um sentimento profundo de afeto, carinho, ternura e cuidado por alguém ou algo. O amor pode ser direcionado a uma pessoa, um animal de estimação, um objeto, uma atividade ou até mesmo a si mesmo.'
      audio = new Audio('./audios/loves.mp3')
    }
    else if (e.target.textContent == "Drought") {
      explicacaoEng.textContent = 'A prolonged period of abnormally low rainfall, leading to a shortage of water.'
      palavraPortugues.textContent = 'Seca'
      explicacaoBr.textContent = 'Um período prolongado de precipitação anormalmente baixa, que conduz a uma escassez de água.'
      audio = new Audio('./audios/drought.mp3')
    }

    else if (e.target.textContent == "Dessert") {
      palavraPortugues.textContent = 'Sobremesa'
      explicacaoEng.textContent = 'The sweet course eaten at the end of a meal.'
      explicacaoBr.textContent = 'O prato doce que se come no final de uma refeição.'
      audio = new Audio('./audios/dessert.mp3')
    }

    else if (e.target.textContent == "Sieve") {
      explicacaoEng.textContent = 'A utensil consisting of a wire or plastic mesh held in a frame, used for straining solids from liquids, for separating coarser from finer particles, or for reducing soft solids to a pulp.'
      palavraPortugues.textContent = 'Peneira'
      explicacaoBr.textContent = 'Um utensílio constituído por uma rede de arame ou de plástico fixada numa armação, utilizado para filtrar sólidos de líquidos, para separar partículas mais grossas de partículas mais finas ou para reduzir sólidos moles a uma pasta.'
      audio = new Audio('./audios/sieve.mp3')
    }

    else if (e.target.textContent == "Knowledge") {
      explicacaoEng.textContent = 'Facts, information, and skills acquired by a person through experience or education; the theoretical or practical understanding of a subject.'
      palavraPortugues.textContent = 'Conhecimento'
      explicacaoBr.textContent = 'Factos, informações e competências adquiridos por uma pessoa através da experiência ou da educação; a compreensão teórica ou prática de um assunto.'
      audio = new Audio('./audios/knowledge.mp3')
    }

    else if (e.target.textContent == "Whisper") {
      explicacaoEng.textContent = 'Speak very softly using one s breath without one s vocal cords, especially for the sake of privacy.'
      palavraPortugues.textContent = 'Sussuro'
      explicacaoBr.textContent = 'Falar muito suavemente usando a respiração sem as cordas vocais, especialmente por uma questão de privacidade.'
      audio = new Audio('./audios/whisper.mp3')
    }

    else if (e.target.textContent == "Lieutenant") {
      explicacaoEng.textContent = 'A naval officer of a high rank, in particular a commissioned officer in the US Navy or Coast Guard ranking above lieutenant junior grade and below lieutenant commander.'
      palavraPortugues.textContent = 'Tentente'
      explicacaoBr.textContent = 'Um oficial da marinha de alta patente, em particular um oficial comissionado da Marinha dos Estados Unidos ou da Guarda Costeira com uma patente superior a tenente de grau júnior e inferior a tenente-comandante.'
      audio = new Audio('./audios/liuetenant.mp3')
    }

    else if (e.target.textContent == "Oath") {
      explicacaoEng.textContent = 'A solemn promise, often invoking a divine witness, regarding one s future action or behavior.'
      palavraPortugues.textContent = 'Juramento'
      explicacaoBr.textContent = 'Uma promessa solene, muitas vezes invocando um testemunho divino, relativa a uma ação ou comportamento futuro.'
      audio = new Audio('./audios/oatch.mp3')
    }

    else if (e.target.textContent == "Though") {
      explicacaoEng.textContent = 'However (indicating that a factor qualifies or imposes restrictions on what was said previously).'
      palavraPortugues.textContent = 'Embora'
      explicacaoBr.textContent = 'No entanto (indicando que um fator qualifica ou impõe restrições ao que foi dito anteriormente).'
      audio = new Audio('./audios/though.mp3')
    }

    else if (e.target.textContent == "Tough") {
      explicacaoEng.textContent = '(of a substance or object) Strong enough to withstand adverse conditions or rough or careless handling'
      palavraPortugues.textContent = 'Resistente'
      explicacaoBr.textContent = '(de uma substância ou objeto) Suficientemente forte para resistir a condições adversas ou a um manuseamento brusco ou descuidado.'
      audio = new Audio('./audios/tough.mp3')
    }

    palavraIngModal.textContent = e.target.textContent
  })
}

const botao = document.querySelector("button");

console.log(botao)
botao.addEventListener('mouseenter', () => {
  audio.play()
})

function tocaAudio() {
  audio.play()
}

let dicionarioaberto = true

abrirAba.addEventListener('click', (e) => {
  if (dicionarioaberto) {
    dialogoexemp.style.display = 'none'
    dicionarioaberto = false
  } else {
    dialogoexemp.style.display = 'flex'
    dicionarioaberto = true
  }
})

fecharModal.addEventListener("click", (e) => {
  modal.style.display = "none"
})