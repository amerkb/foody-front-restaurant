const initialState = {
  show: false,
  data: {},
  update: false,
  Refetch:0
};

const SET_SHOW = "SET_SHOW";
const SET_UPDATE = "SET_UPDATE";
const SET_DATA = "SET_DATA";
const SET_REFETCH = "SET_REFETCH";

export const setShow = (value) => ({
  type: SET_SHOW,
  payload: value,
});

export const setUpdate = (value) => ({
  type: SET_UPDATE,
  payload: value,
});
export const setData = (value) => ({
  type: SET_DATA,
  payload: value,
});
export const SetRefetch = (value) => ({
  type: SET_REFETCH,
  payload: value,
});

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW:
      return { ...state, show: action.payload };
    case SET_UPDATE:
      return { ...state, update: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_REFETCH:
      return { ...state, Refetch: action.payload };
    default:
      return state;
  }
};

export default CategoryReducer;
