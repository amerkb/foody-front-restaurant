import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import Login from "./Page/login";

function App() {
  // window.host = "http://192.168.1.111:8000/api";
  window.host = "http://192.168.43.117:8000/api";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/Dashboard"
            element={<DashboardLayout content="Dashboard" />}
          />
          <Route
            path="/Restaurants"
            element={<DashboardLayout content="Restaurant" />}
          />
          <Route
            path="/AddRestaurant"
            element={<DashboardLayout content="AddRestaurant" />}
          />
          <Route
            path="/UpdateRestaurant/:id"
            element={<DashboardLayout content="UpdateRestaurant" />}
          />
          <Route
            path=""
            element={<Login/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
