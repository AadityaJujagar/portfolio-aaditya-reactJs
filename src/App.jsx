import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import ContactsPage from "./pages/ContactsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/aboutmepage" element={<AboutMePage />} />
        <Route path="/contactspage" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
