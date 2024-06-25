import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Sidebar from "./Sidebar";
import SidebarReducer from "../Redux/SidebarReducer";
import AlertReducer from "../Redux/AlertReducer";
import DeleteReducer from "../Redux/DeleteReducer";
import Head from "./Head";
import Dashboard from "../Page/Dashboard";
import Container from "./Container";
import Restaurant from "../Page/Restaurant/Restaurant";
import AddRestaurant from "../Page/Restaurant/AddRestaurant";
import UpdateRestaurant from "../Page/Restaurant/UpdateRestaurant";

const rootReducer = combineReducers({
  Sidebar: SidebarReducer,
  Alert: AlertReducer,
  Delete: DeleteReducer,
});
const store = createStore(rootReducer);
const DashboardLayout = (props) => {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <Sidebar />
        {props.content === "Dashboard" && <Container content={<Dashboard />} />}
        {props.content === "Restaurant" && (
          <Container content={<Restaurant />} />
        )}
        {props.content === "AddRestaurant" && (
          <Container content={<AddRestaurant />} />
        )}
        {props.content === "UpdateRestaurant" && (
          <Container content={<UpdateRestaurant />} />
        )}
      </Provider>
    </div>
  );
};

export default DashboardLayout;
