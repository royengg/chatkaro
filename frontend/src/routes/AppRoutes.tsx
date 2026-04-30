import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import chatComponent from "../pages/general/chat";
import UserRegister from "../pages/auth/UserRegister";
import UserLogin from "../pages/auth/UserLogin";
import Home from "../pages/general/home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/chat" element={<div>Chat</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
