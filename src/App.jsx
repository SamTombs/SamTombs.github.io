
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./NavBar/NavBar";
import ContactPage from "./components/ContactPage/ContactPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ProjectPage from "./components/ProjectPage/ProjectPage";

import "./App.css";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </>
  );
};

export default App;
