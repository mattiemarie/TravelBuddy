import React from 'react';
import ReactDOM from 'react-dom';
import Onboarding from "./components/onboarding";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/dashboard.jsx";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <App>
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      
    </BrowserRouter>
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);
