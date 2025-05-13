import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Plans from './pages/Plans.jsx'
import Gyms from './pages/Gyms.jsx'
import Articles from './pages/Articles.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import GymDetailPage from "./pages/GymDetailPage.jsx";
import ArticleDetailPage from "./pages/ArticleDetailPage.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock login/logout functions
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/gyms" element={<Gyms />} />
          <Route path="/articles" element={<Articles />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Login onLogin={handleLogin} />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register onRegister={handleLogin} />}
          />
          <Route path="/gym/:id" element={<GymDetailPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App