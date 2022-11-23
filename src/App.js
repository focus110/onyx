import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
