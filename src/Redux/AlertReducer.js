const initialState = {
  SuccessCategory: false,
  SuccessEmployee: false,
  SuccessTable: false,
  SuccessMeal: false,
  FiledLogin: false,
};

const SET_SUCCESS_CATEGERY = "SET_SUCCESS_CATEGERY";
const SET_SUCCESS_EMPLOYEE = "SET_SUCCESS_EMPLOYEE";
const SET_SUCCESS_TABLE = "SET_SUCCESS_TABLE";
const SET_SUCCESS_MEAL = "SET_SUCCESS_MEAL";
const SET_FILED_LOGIN = "SET_FILED_LOGIN";

export const setSuccessCategory = (value) => ({
  type: SET_SUCCESS_CATEGERY,
  payload: value,
});
export const setSuccessTable = (value) => ({
  type: SET_SUCCESS_TABLE,
  payload: value,
});
export const setFiledLogin = (value) => ({
  type: SET_FILED_LOGIN,
  payload: value,
});
export const setSuccessMeal = (value) => ({
  type: SET_SUCCESS_MEAL,
  payload: value,
});
export const setSuccessEmployee = (value) => ({
  type: SET_SUCCESS_EMPLOYEE,
  payload: value,
});

const SidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUCCESS_CATEGERY:
      return { ...state, SuccessCategory: action.payload };
    case SET_SUCCESS_TABLE:
      return { ...state, SuccessTable: action.payload };
    case SET_SUCCESS_EMPLOYEE:
      return { ...state, SuccessEmployee: action.payload };
    case SET_SUCCESS_MEAL:
      return { ...state, SuccessMeal: action.payload };
    case SET_FILED_LOGIN:
      return { ...state, FiledLogin: action.payload };

    default:
      return state;
  }
};

export default SidebarReducer;
