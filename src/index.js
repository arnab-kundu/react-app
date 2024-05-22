import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./components/sample1/login";
import Register from "./components/sample1/register";
import LifeCycle from "./components/sample1/lifeCycleMethods";
import TwitterLogin from "./components/twitter/login";
import 'bootstrap/dist/css/bootstrap.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="life_cycle" element={<LifeCycle />} />
          <Route path="twitterLogin" element={<TwitterLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);