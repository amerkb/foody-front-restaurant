import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";

function App() {
  window.host = "http://192.168.43.130:8000/api";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
