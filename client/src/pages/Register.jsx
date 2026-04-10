import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [apiError, setApiError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setApiError('');

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Chef Account created! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setApiError(data.message || 'Registration failed.');
      }
    } catch (error) {
      setApiError('Server connection lost. Is the backend preheated?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1>Join CookingGoals 🍳</h1>
        <p>Start tracking your culinary achievements today.</p>

        {successMessage && <div style={successStyle}>{successMessage}</div>}
        {apiError && <div style={errorBannerStyle}>{apiError}</div>}

        <form onSubmit={handleSubmit}>
          <div style={fieldStyle}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
            {errors.name && <span style={errorTextStyle}>{errors.name}</span>}
          </div>

          <div style={fieldStyle}>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
            {errors.email && <span style={errorTextStyle}>{errors.email}</span>}
          </div>

          <div style={fieldStyle}>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} style={inputStyle} />
            {errors.password && <span style={errorTextStyle}>{errors.password}</span>}
          </div>

          <div style={fieldStyle}>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={inputStyle} />
            {errors.confirmPassword && <span style={errorTextStyle}>{errors.confirmPassword}</span>}
          </div>

          <button type="submit" disabled={isLoading} style={isLoading ? buttonDisabledStyle : buttonStyle}>
            {isLoading ? 'Creating Chef Profile...' : 'Sign Up'}
          </button>
        </form>
        <p style={{ marginTop: '1rem' }}>Already a member? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

// Styles (In-JS)
const containerStyle = { display: 'flex', justifyContent: 'center', padding: '3rem', backgroundColor: '#fdf2e9' };
const formContainerStyle = { backgroundColor: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' };
const fieldStyle = { marginBottom: '1rem', display: 'flex', flexDirection: 'column' };
const inputStyle = { padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' };
const buttonStyle = { width: '100%', padding: '0.75rem', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };
const buttonDisabledStyle = { ...buttonStyle, backgroundColor: '#ccc', cursor: 'not-allowed' };
const successStyle = { padding: '10px', backgroundColor: '#d4edda', color: '#155724', marginBottom: '1rem', borderRadius: '5px' };
const errorBannerStyle = { padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', marginBottom: '1rem', borderRadius: '5px' };
const errorTextStyle = { color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' };

export default Register;