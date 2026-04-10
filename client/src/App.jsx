import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';

// This is a simple placeholder for pages that don't exist
const NotFound = () => <div style={{padding: "50px", textAlign: "center"}}><h1>404 - Page Not Found</h1></div>;

function App() {
  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Header />
        
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Styling to ensure the footer stays at the bottom of the screen
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
};

export default App;