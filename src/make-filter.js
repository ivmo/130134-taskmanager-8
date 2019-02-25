export default (filterName, taskCount, checked = false) => `
    <input
      type="radio"
      id="filter__${filterName}"
      class="filter__input visually-hidden"
      name="filter"
      ${checked ? `checked` : ``}
    />
    <label for="filter__${filterName}" class="filter__label">
      ${filterName} <span class="filter__${filterName}-count">${taskCount}</span></label>
`;
