import {getRandomValue} from './utils.js';

const hashtagHtml = (hashtag) => `
<span class="card__hashtag-inner">
  <input
    type="hidden"
    name="hashtag"
    value="repeat"
    class="card__hashtag-hidden-input"
  />
  <button type="button" class="card__hashtag-name">
    #${hashtag}
  </button>
  <button type="button" class="card__hashtag-delete">
    delete
  </button>
</span>
`;


const renderHashtag = (hashtagData) => {
  let hashtagItems = [];
  hashtagData.forEach((it) => {
    hashtagItems.push(hashtagHtml(it));
  });
  return hashtagItems.join(``);
};

export default renderHashtag;
