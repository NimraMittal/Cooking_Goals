import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Connection failed');
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Chef Login 🍳</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
          style={inputStyle}
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
        <p>New chef? <Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
};

// Use the styles from your lesson plan here...
const containerStyle = { display: 'flex', justifyContent: 'center', padding: '5rem', backgroundColor: '#fdf2e9' };
const formStyle = { background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' };
const inputStyle = { display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' };
const buttonStyle = { width: '100%', padding: '0.75rem', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };

export default Login;