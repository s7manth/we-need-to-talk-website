import "./App.css";
import { Route, Routes } from "react-router-dom";
import "@fontsource/merriweather/700-italic.css";
import HomePage from "./screens/HomePage.tsx";
import NotFound from "./screens/NotFound.tsx";
import ArchivePage from "./screens/ArchivePage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
