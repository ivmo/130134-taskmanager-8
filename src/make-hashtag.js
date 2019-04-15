const hashtagHtml = (hashtag) => `
<span class="card__hashtag-inner">
  <input
    type="hidden"
    name="hashtag"
    value="${hashtag}"
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


const renderHashtag = (hashtagData) => (Array.from(hashtagData).map((tag) => hashtagHtml(tag))).join(``);

export default renderHashtag;
