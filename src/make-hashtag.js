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

const getRandomValue = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;


const renderHashtag = (hashtagData) => {
  let hashtagItems = [];
  const hashtagCount = getRandomValue(4);
  const arrHashtags = Array.from(hashtagData);

  for (let i = 0; i < hashtagCount; i++) {
    hashtagItems.push(hashtagHtml(arrHashtags[getRandomValue(arrHashtags.length)]));
  }
  return hashtagItems.join(``);
};

export default renderHashtag;
