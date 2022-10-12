import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SolutionsItems from "./components/SloutionsItems/SolutionsItems";
import About from "./Pages/About/About";
import Connection from "./Pages/Connetion/Connection";
import MainPage from "./Pages/MainPage/MainPage";
import Solutions from "./Pages/Yechimlar/Solutions";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/solutions" element={<Solutions />}></Route>
        <Route path="/solutions/:solutionId" element={<SolutionsItems />} />
        <Route path="/about" element={<About />} />
        <Route path="/connection" element={<Connection />} />
      </Routes>
    </div>
  );
}

export default App;
