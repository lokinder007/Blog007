import Login from "./pages/login/Login";
import Topbar from './components/layout/Topbar'
import Homepage from './pages/home/Homepage'
import Register from './pages/register/Register';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Errorpage from "./pages/Errorpage";
import Contact from "./pages/Contact";

const App = () => {
  const currentUser = true;
  return (
    <Router>
      <>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/posts" element={<Homepage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/register" element={currentUser ? <Homepage /> : <Register />} />
          <Route exact path="/login" element={currentUser ? <Homepage /> : <Login />} />
          <Route exact path="/post/:id" element={<Single />} />
          <Route exact path="/write" element={currentUser ? <Write /> : <Login />} />
          <Route exact path="/settings" element={currentUser ? <Settings /> : <Login />} />

          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
