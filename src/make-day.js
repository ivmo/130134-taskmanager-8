const renderDay = (repeatInfo, day) => `
<input
  class="visually-hidden card__repeat-day-input"
  type="checkbox"
  id="repeat-${day}-5"
  name="repeat"
  value="${day}"
  ${repeatInfo ? `checked` : ``}
/>
<label class="card__repeat-day" for="repeat-${day}-5"
  >${day}</label
>
`;

const getDaysHtml = (daysInfo) => {
  const daysArray = Object.keys(daysInfo);
  return daysArray.map((it) => {
    return renderDay(daysInfo[it], it);
  }).join(``);
};

export default getDaysHtml;
