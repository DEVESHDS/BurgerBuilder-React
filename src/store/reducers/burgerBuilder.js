import * as actionType from "../actions/actionTypes";

const initalState = {
  ingredients: null,
  totalprice: 20,
  error: false,
  building: false,
};
const INGREDIENT_PRICE = {
  salad: 10,
  bacon: 15,
  meat: 20,
  cheese: 25,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalprice: state.totalprice + INGREDIENT_PRICE[action.ingredientName],
        building: true,
      };
    case actionType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalprice: state.totalprice - INGREDIENT_PRICE[action.ingredientName],
        building: true,
      };
    case actionType.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        totalprice: 20,
        error: false,
        building: false,
      };
    case actionType.FETCH_INGREDIENT_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
  }
  return state;
};

export default reducer;
