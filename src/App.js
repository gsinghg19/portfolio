import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.jsx";
import FutureProjects from "./components/FutureProjectPage/FutureProjects.jsx";
import AboutPages from "./components/AboutPage/AboutPages.jsx";
import SettingsPage from "./components/SettingsPage/SettingsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutPages" element={<AboutPages />} />
          <Route path="/FutureProject" element={<FutureProjects />} />
          <Route path="/SettingsPage" element={<SettingsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
