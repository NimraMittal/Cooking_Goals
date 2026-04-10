const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} CookingGoals. All rights reserved.</p>
        <p>Designed for Chefs by Nimra Mittal</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#2c3e50', // Matching your Header color
  color: 'white',
  padding: '2rem 0',
  marginTop: 'auto', // This helps keep it at the bottom
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
};

export default Footer;