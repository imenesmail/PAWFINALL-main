import React from "react";
import { Route, Routes } from "react-router-dom"; // Use only Routes and Route
import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Calendarpage from "./pages/Calendarpage";
import Dashboardfin from "./pages/Dashboardfin";
import Garden from "./pages/Garden";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Settings from "./pages/Settings";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      
      <Routes>
        {/* Home Page */}
        <Route path="/HomePage" element={<><Navbar /><Header /><AboutUs /><Footer /></>} />

        {/* Authentication */}
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />

        {/* Dashboard */}
        <Route path="/Dashboard" element={<Dashboardfin />} />

        {/* Settings */}
        <Route path="/Settings" element={<Settings />} />

        {/* Calendar */}
        <Route path="/Calendarpage" element={<Calendarpage />} />

        {/* Garden */}
        <Route path="/Garden" element={<Garden />} />

        {/* Todo (Tasks Management) */}
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
