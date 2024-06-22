import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Sidebar from "./Sidebar";
import SidebarReducer from "../Redux/SidebarReducer";
import Head from "./Head";
import Dashboard from "../Page/Dashboard";
import Container from "./Container";
import Restaurant from "../Page/Restaurant";

const sidebar = createStore(SidebarReducer);

const DashboardLayout = (props) => {
  return (
    <div>
      <Provider store={sidebar}>
        <Head />
        <Sidebar />
    { props.content === "Dashboard" &&   <Container content={<Dashboard />} />}
    { props.content === "Restaurant" &&   <Container content={<Restaurant />} />}
      </Provider>
    </div>
  );
};

export default DashboardLayout;
