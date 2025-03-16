import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Landing from "./page/Landing";
import Login from "./page/login";
import Signup from "./page/signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
