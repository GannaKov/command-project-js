import { refs } from './js/reference/libraryRefs';
import { onQueueBtn } from './js/customFunction/getBtnLibrary.js';
import { onWatchedBtn } from './js/customFunction/getBtnLibrary.js';

refs.queueEl.addEventListener('click', onQueueBtn);
refs.watchedEl.addEventListener('click', onWatchedBtn);
