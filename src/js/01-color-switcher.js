function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function randomizeColor() {
  console.log('aktualny status petli', loopStatus);
  // jezeli powinna sie wykonywac petla
  if (loopStatus) {
    // zmieniamy kolor tła strony
    body.style.backgroundColor = getRandomHexColor();

    // wywolujemy tą samą metodę po czasie 1s
    // wywolanie metody po czasie
    // wywolanie metody randomizeColor za 1000ms = 1s
    setTimeout(randomizeColor, 1000);
  }
}

// zmienna przechowuje status petli
// przypisujemy jej false, żeby losowanie nie uruchamiało sie odrazu
let loopStatus = false;

start.addEventListener('click', () => {
  //   console.log('before change at start', loopStatus);
  // włączamy wykonywanie petli
  loopStatus = true;
  // blokujemy klikanie na przycisk i odpalanie kolejnych pętli które mogłyby się na siebie zaćząć nakładać
  start.disabled = true;
  //   console.log('after change at start', loopStatus);

  // uruchamiamy losowanie kolorow tla
  randomizeColor();
});

stop.addEventListener('click', () => {
  //   console.log('before change at stop', loopStatus);
  loopStatus = false;
  start.disabled = false;
  //   console.log('after change at stop', loopStatus);
});

// w zmiennej x zapisujesz stan czy losowanie kolorów jest aktywne
// klikniecie przycisku start uruchamia losowanie, poprzez zmiane wartosci zmiennej x na true, zmieniamy stan przycisku start na disabled
// klikniecie przycisku stop zatrzymuje losowanie, poprzez zmiane wartosci zmiennej x na false, zmieniamy stan przycisku stop na disabled

// w nieskonczonej petli sprawdzamy czy wartosc zmiennej x jest true
// jezeli tak zmieniamy kolor strony i czekamy 1 sek
// jezeli nie to tylko czekamy 1 sek

// 1 zmienna przechowuje stan czy jest aktywne losowanie czy nie
// masz timeout na metodzie getRandomHEXColor sprawdzający czy losowanie w pierwszej zmiennej jest aktywne czy nie
