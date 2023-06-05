import { KEY } from "./index";
import { choseBreed } from "./index";
import { loaderEl } from "./index";
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