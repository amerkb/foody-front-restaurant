const initialState = {
  SuccessResturant: false,
};

const SET_SUCCESS_RESTAURANT = "SET_SUCCESS_RESTAURANT";

export const setSuccessRestaurant = (value) => ({
  type: SET_SUCCESS_RESTAURANT,
  payload: value,
});

const SidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUCCESS_RESTAURANT:
      return { ...state, SuccessResturant: action.payload };

    default:
      return state;
  }
};

export default SidebarReducer;
