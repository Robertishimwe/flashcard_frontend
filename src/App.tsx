import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./app/privateRoute";
import BounceRoute from "./app/bounce";
import Login from "./pages/login";
import Controllpanel from "./pages/controllpanel";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route element={<BounceRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Controllpanel />} />
      </Route>
    </Routes>
  );
}

export default App;
