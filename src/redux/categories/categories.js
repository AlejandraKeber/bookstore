const STATUS_CHECKED = 'bookstore/categories/STATUS_CHECKED';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
}

const checkStatus = () => ({
  type: STATUS_CHECKED,
});

export { checkStatus };
export default categoriesReducer;