import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import NavBar from "./components/NavBar.jsx";
import LeagueTable from "./components/LeagueTable.jsx";
import "./App.css";
import { Routes, Route } from "react-router";

// TODO: We set up routes in here. (Routes, Route)
//- All our components will be rendered in here

export default function App() {
  return (
    <>
      <div className="header">
        <h1>Liverpool FC</h1>
      </div>
      <div className="NavBar">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/League" element={<LeagueTable />} />
          <Route path="/Posts" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}
