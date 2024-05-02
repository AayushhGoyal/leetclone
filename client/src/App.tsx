import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./index.css";
import Alert from "./components/Alert";
import Login from "./pages/login";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Alert />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/:name" element={<div>Problems</div>} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}