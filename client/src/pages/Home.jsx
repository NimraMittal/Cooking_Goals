import { Link } from 'react-router-dom';
import ConnectionTest from '../components/common/ConnectionTest';

const Home = () => {
  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={titleStyle}>Master Your Cooking Goals 🍳</h1>
        <p style={subtitleStyle}>
          Track your culinary journey, discover new recipes, and level up your skills from beginner to executive chef.
        </p>
        <div style={ctaStyle}>
          <Link to="/register" style={buttonStyle}>
            Get Started
          </Link>
          <Link to="/login" style={secondaryButtonStyle}>
            Login
          </Link>
        </div>
      </section>

      {/* Connectivity Test - Required for Lesson 3.6 */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <ConnectionTest />
      </section>

      {/* Features Section */}
      <section style={featuresStyle}>
        <h2>Why Use CookingGoals?</h2>
        <div style={featureGridStyle}>
          <div style={featureCardStyle}>
            <h3>Track Progress</h3>
            <p>Log your completed recipes and watch your skill level grow.</p>
          </div>
          <div style={featureCardStyle}>
            <h3>Curated Recipes</h3>
            <p>Access a library of recipes tailored to your current mastery level.</p>
          </div>
          <div style={featureCardStyle}>
            <h3>Community</h3>
            <p>Share your achievements with a squad of fellow foodies.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles (You can keep these or move them to index.css)
const containerStyle = { minHeight: '100vh' };
const heroStyle = { textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#fdf2e9' };
const titleStyle = { fontSize: '3rem', marginBottom: '1rem', color: '#e67e22' };
const subtitleStyle = { fontSize: '1.25rem', color: '#666', marginBottom: '2rem' };
const ctaStyle = { display: 'flex', gap: '1rem', justifyContent: 'center' };
const buttonStyle = { backgroundColor: '#e67e22', color: 'white', padding: '0.75rem 2rem', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' };
const secondaryButtonStyle = { backgroundColor: 'white', color: '#e67e22', padding: '0.75rem 2rem', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', border: '2px solid #e67e22' };
const featuresStyle = { padding: '4rem 2rem', textAlign: 'center' };
const featureGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '2rem auto' };
const featureCardStyle = { padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' };

export default Home;