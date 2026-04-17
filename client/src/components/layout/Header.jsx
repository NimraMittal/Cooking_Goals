import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import the hook

const Header = () => {
  // Get everything we need from the Global Pantry
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>
          <Link to="/" style={linkStyle}>🍳 CookingGoals</Link>
        </h1>
        
        <nav style={navStyle}>
          <Link to="/" style={navLinkStyle}>Home</Link>
          
          {/* If the chef is logged in, show Dashboard and Logout */}
          {isAuthenticated() ? (
            <>
              <Link to="/dashboard" style={navLinkStyle}>Dashboard</Link>
              <span style={userNameStyle}>Hi, Chef {user?.name}!</span>
              <button onClick={logout} style={logoutBtnStyle}>Logout</button>
            </>
          ) : (
            /* If not logged in, show Login and Register */
            <>
              <Link to="/login" style={navLinkStyle}>Login</Link>
              <Link to="/register" style={navLinkStyle}>Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

// Styles
const headerStyle = { backgroundColor: '#2c3e50', color: 'white', padding: '1rem 0', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' };
const containerStyle = { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' };
const logoStyle = { margin: 0, fontSize: '1.5rem' };
const linkStyle = { color: 'white', textDecoration: 'none', fontWeight: 'bold' };
const navStyle = { display: 'flex', alignItems: 'center', gap: '1.5rem' };
const navLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '1rem' };
const userNameStyle = { color: '#f39c12', fontWeight: 'bold', fontSize: '0.9rem', borderLeft: '1px solid #555', paddingLeft: '1rem' };
const logoutBtnStyle = { 
  backgroundColor: '#e74c3c', 
  color: 'white', 
  border: 'none', 
  padding: '0.5rem 1rem', 
  borderRadius: '5px', 
  cursor: 'pointer', 
  fontWeight: 'bold',
  transition: 'background 0.3s'
};

export default Header;