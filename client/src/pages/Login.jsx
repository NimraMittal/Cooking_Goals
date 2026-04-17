import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the hook

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  // Destructure the login function from useAuth
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email.trim().toLowerCase(),
          password: formData.password
        })
      });
      
      const data = await res.json();

      if (res.ok) {
        // USE CONTEXT LOGIN: This handles state AND localStorage for you!
        login(data.user, data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Connection failed. Is the backend running?');
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: 'center', color: '#e67e22' }}>Chef Login 🍳</h2>
        {error && <p style={errorStyle}>{error}</p>}
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={labelStyle}>Email</label>
          <input 
            type="email" 
            placeholder="chef@example.com" 
            required
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={labelStyle}>Password</label>
          <input 
            type="password" 
            placeholder="******" 
            required
            onChange={(e) => setFormData({...formData, password: e.target.value})} 
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>Login</button>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          New chef? <Link to="/register" style={{ color: '#e67e22', fontWeight: 'bold' }}>Register here</Link>
        </p>
      </form>
    </div>
  );
};

// Styles
const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', backgroundColor: '#fdf2e9' };
const formStyle = { background: 'white', padding: '2.5rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' };
const labelStyle = { display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' };
const inputStyle = { width: '100%', padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' };
const buttonStyle = { width: '100%', padding: '0.75rem', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' };
const errorStyle = { color: '#721c24', backgroundColor: '#f8d7da', padding: '0.75rem', borderRadius: '5px', border: '1px solid #f5c6cb', marginBottom: '1rem', textAlign: 'center' };

export default Login;