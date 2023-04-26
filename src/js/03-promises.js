import Notiflix from 'notiflix';

const form = document.querySelector('form');
form.addEventListener('submit', ev => {
  ev.preventDefault();
  //zabezpiesza przed wyczyszczeniem pój po kliknięciu button "submit"
  const formObject = new FormData(ev.target);
  // console.log(formObject);
  const firstDelay = parseInt(formObject.get('delay'), 10);
  console.log(firstDelay);
  const step = parseInt(formObject.get('step'), 10);
  const amount = parseInt(formObject.get('amount'), 10);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, firstDelay + i * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
