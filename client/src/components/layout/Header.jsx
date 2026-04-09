import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>
          <Link to="/" style={linkStyle}>🍳 CookingGoals</Link>
        </h1>
        <nav>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/login" style={navLinkStyle}>Login</Link>
          <Link to="/register" style={navLinkStyle}>Register</Link>
        </nav>
      </div>
    </header>
  );
};

// Use the styles provided in your Learning Unit notes here...
const headerStyle = { backgroundColor: '#2c3e50', color: 'white', padding: '1rem 0' };
const containerStyle = { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' };
const logoStyle = { margin: 0 };
const linkStyle = { color: 'white', textDecoration: 'none', fontWeight: 'bold' };
const navLinkStyle = { color: 'white', textDecoration: 'none', marginLeft: '2rem' };

export default Header;