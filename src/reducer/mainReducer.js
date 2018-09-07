const mainReducerInitialState = {
  test: 'woohoo',
  butts: true,
};
const mainReducer = (state = mainReducerInitialState, action) => {
  switch (action.type) {
    case 'TEST_ONE':
      return {
        ...state,
        test: 'TEST_ONE',
      };
    case 'TEST_TWO':
      return {
        ...state,
        test: 'TEST_TWO',
        value: action.value,
      };
    default:
      return state;
  }
};
export default mainReducer;
