import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import Login from "./Page/login";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import AlertReducer from "./Redux/AlertReducer";

const store = createStore(AlertReducer);
function App() {
  // window.host = "http://192.168.1.111:8000/api";
  window.host = "http://192.168.1.107:8000/api";
  // window.host = "http://192.168.43.117:8000/api";
  // window.host = "https://api.dev4.gomaplus.tech/api";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/Dashboard"
            element={<DashboardLayout content="Dashboard" />}
          />
          <Route
            path="/Categories"
            element={<DashboardLayout content="Category" />}
          />
          <Route
            path="/Employees"
            element={<DashboardLayout content="Employee" />}
          />
          <Route
            path="/AddMeal"
            element={<DashboardLayout content="AddMeal" />}
          />
          <Route
            path="/updateMeal/:id"
            element={<DashboardLayout content="AddMeal" />}
          />
          <Route path="/Meals" element={<DashboardLayout content="Meals" />} />
          <Route
            path="/Tables"
            element={<DashboardLayout content="Tables" />}
          />

          <Route
            path=""
            element={
              <Provider store={store}>
                <Login />
              </Provider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
