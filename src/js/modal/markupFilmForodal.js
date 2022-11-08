import { fetchFilmId } from './fetchFilmId';
import { markupBtnModalFilm } from '../markup';
import { addToLokalStorage } from '../controls';

let film = {};
const modalCardEl = document.querySelector('.modal-card');

export async function FetchFilmId(id) {
  await fetchFilmId(id).then(respons => {
    film = respons;
    return film;
  });

  addToLokalStorage(film);

  const marcup = markupBtnModalFilm(film);
  return (modalCardEl.innerHTML = marcup);
}

export function clianFilmCard() {
  return (modalCardEl.innerHTML = '');
}