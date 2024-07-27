import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Sidebar from "./Sidebar";
import SidebarReducer from "../Redux/SidebarReducer";
import AlertReducer from "../Redux/AlertReducer";
import DeleteReducer from "../Redux/DeleteReducer";
import CategoryReducer from "../Redux/CategoryReducer";
import MealReducer from "../Redux/MealReducer";
import Head from "./Head";
import Dashboard from "../Page/Dashboard";
import Container from "./Container";
import Categories from "../Page/Category/Category";
import AddMeal from "../Page/Meal/AddMeal";
import Meals from "../Page/Meal/Meals";

const rootReducer = combineReducers({
  Sidebar: SidebarReducer,
  Alert: AlertReducer,
  Category: CategoryReducer,
  Delete: DeleteReducer,
  Meal: MealReducer,
});
const store = createStore(rootReducer);
const DashboardLayout = (props) => {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <Sidebar />
        {props.content === "Dashboard" && <Container content={<Dashboard />} />}
        {props.content === "Category" && <Container content={<Categories />} />}
        {props.content === "AddMeal" && <Container content={<AddMeal />} />}
        {props.content === "Meals" && <Container content={<Meals />} />}
      </Provider>
    </div>
  );
};

export default DashboardLayout;
