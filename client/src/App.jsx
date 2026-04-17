import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';
import PublicRoute from './components/common/PublicRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                <Dashboard />
                </ProtectedRoute>
                } 
                />
            <Route path="*" element={<div style={{textAlign:'center', padding:'5rem'}}><h1>404 Page Not Found</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;