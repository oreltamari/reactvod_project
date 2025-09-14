import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import VodInput from "./components/vodInput";
import MovieInfo from "./components/movieInfo";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<MovieInfo />} />
        <Route
          path="/*"
          element={
            <div>
              <h2>404, Page not found!</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
