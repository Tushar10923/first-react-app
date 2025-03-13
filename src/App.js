// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Modes from "./components/Modes";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("set to dark mode");
      document.body.style.backgroundColor = "#333741";
      showAlert("Dark mode Enabled!", "success");
    } else {
      setMode("light");
      console.log("set to light mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled!", "success");
    }
  };

  return (
    <Router>
      <Navbar title="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <div className="container">
        <Modes />
      </div> */}
      <Routes>
        <Route exact path="/modes" element={<Modes />} />
        <Route
          exact path="/"
          element={
            <div className="container my-3">
              <Textform
                title="Enter Text To Analyse"
                mode={mode}
                showAlert={showAlert}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
