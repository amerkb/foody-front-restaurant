const initialState = {
  Refetch: 0,
};

const SET_REFETCH = "SET_REFETCH";

export const SetRefetchMeals = (value) => ({
  type: SET_REFETCH,
  payload: value,
});

const MealReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REFETCH:
      return { ...state, Refetch: action.payload };
    default:
      return state;
  }
};

export default MealReducer;
