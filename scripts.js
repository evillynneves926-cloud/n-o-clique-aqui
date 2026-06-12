
const idiomas = [
    "Eu te amo",
    "I love you",
    "Je t'aime",
    "Te amo",
    "Ich liebe dich",
    "Ti amo",
    "Ik hou van jou",
    "Jag älskar dig",
    "Jeg elsker deg",
    "Jeg elsker dig",
    "Minä rakastan sinua",
    "Seni seviyorum",
    "Σ' αγαπώ",
    "Я тебя люблю",
    "Я тебе кохаю",
    "Te iubesc",
    "Volim te",
    "Ljubim te",
    "Обичам те",
    "Szeretlek",
    "Kocham cię",
    "Miluji tě",
    "Ľúbim ťa",
    "Aš tave myliu",
    "Es tevi mīlu",
    "Ma armastan sind",
    "أنا أحبك",
    "אני אוהב אותך",
    "میں تم سے محبت کرتا ہوں",
    "मैं तुमसे प्यार करता हूँ",
    "আমি তোমাকে ভালোবাসি",
    "நான் உன்னை காதலிக்கிறேன்",
    "నేను నిన్ను ప్రేమిస్తున్నాను",
    "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ",
    "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു",
    "我爱你",
    "我愛你",
    "愛してる",
    "사랑해",
    "Anh yêu em",
    "ผมรักคุณ",
    "Aku cinta padamu",
    "Mahal kita",
    "Kocham cię",
    "Ngiyakuthanda",
    "Nakupenda",
    "Ndinokuda",
    "Mo nifẹ rẹ",
    "Ina son ka"
];

const tempos = [
    5000, // Eu te amo
    3000,
    2500,
    2000,
    1500,
    1200,
    1000
];

const texto = document.getElementById("amor");

let indice = 0;

function trocarIdioma() {

    texto.textContent = idiomas[indice];

    let tempoAtual;

    if (indice < tempos.length) {
        tempoAtual = tempos[indice];
    } else {
        tempoAtual = 1000;
    }

    indice++;

    if (indice < idiomas.length) {
        setTimeout(trocarIdioma, tempoAtual);
    } else {

        // Última mensagem
        setTimeout(() => {
            texto.textContent = "Feliz dia dos namorados amor, que nosso amor fique forte a cada dia que passa. Eu te amo muitooo ❤️ Nunca tenha dúvidas sobre meu amor por você";
        }, 1000);

    }
}

trocarIdioma();

