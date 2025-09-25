
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";


import "./App.css";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
