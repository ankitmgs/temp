import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/add";
import Read from "./components/read";
import Update from "./components/update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
