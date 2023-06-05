import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds } from "./cat-api";
import { getInformationForCat } from "./cat-api";
export const KEY = 'live_Likxy1hq44RVw131OlqvY6KuP2xHl4ccDS0hEsaNSgvvpJfLPdErDM9G3sctUFME';
export const selectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
export const loaderEl = document.querySelector('.loader');
loaderEl.style.display = 'none';
const arrName = [];
export let choseBreed = '';
fetchBreeds()
    .then(nameId => {
        nameId.map(name => {
            arrName.push(name);
        })
        addOptionOnSelect(arrName);
    })
    .catch(error => {
        console.log(error);
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
    }
    );
function addOptionOnSelect() {
    selectEl.innerHTML = `<option value="null">~Chose breed~</option>`;
    markupOptions = arrName.map(el => {

        return `<option value="${el.id}">${el.name}</option>`;
    }).join('');

    selectEl.insertAdjacentHTML('beforeend', markupOptions);
    new SlimSelect({
        select: selectEl,
    })
};
function addActivityItem(event) {
    if (event.target.value === "null") {
        catInfoEl.innerHTML = '';
        return;
    }
    choseBreed = event.target.value;
    getInformationForCat(choseBreed)
        .then(markupInformationForCat)
        .catch(error => {
            console.log(error);
            Notify.failure('Oops! Something went wrong! Try reloading the page!');
        }
        );
};
function markupInformationForCat(el) {
    loaderEl.style.display = 'none';
    catInfoEl.innerHTML = `<div class="thumb">
        <img src="${el[0].url}" alt="" />
      </div>
      <div class="block-info">
       <h2>${el[0].breeds[0].name}</h2>
        <p>${el[0].breeds[0].description}</p>
        <p><b>Temperament:</b>${el[0].breeds[0].temperament}</p>
         </div>`
}
selectEl.addEventListener("change", addActivityItem);






