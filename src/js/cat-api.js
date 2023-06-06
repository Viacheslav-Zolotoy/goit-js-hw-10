import { choseBreed } from "./index";
import { loaderEl } from "./index";
const KEY = 'live_Likxy1hq44RVw131OlqvY6KuP2xHl4ccDS0hEsaNSgvvpJfLPdErDM9G3sctUFME';
export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${KEY}`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status);
        }
        return resp.json();
    }).catch(error => console.log(error));
};
export function getInformationForCat() {
    loaderEl.style.display = 'block';
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${choseBreed}&api_key=${KEY}`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status);
        }
        return resp.json();
    }).catch(error => console.log(error));
};