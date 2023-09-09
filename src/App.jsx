import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectPage/ProjectsPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/aboutmepage" element={<AboutMePage />} />
        <Route path="/contactspage" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
