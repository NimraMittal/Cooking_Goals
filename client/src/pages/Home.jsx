import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1>Master Your Kitchen Goals</h1>
      <p>Discover recipes, track your progress, and level up your cooking skills.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/register" style={{ padding: '0.75rem 2rem', backgroundColor: '#e67e22', color: 'white', borderRadius: '5px', textDecoration: 'none', marginRight: '1rem' }}>Get Started</Link>
        <Link to="/login" style={{ padding: '0.75rem 2rem', border: '2px solid #e67e22', color: '#e67e22', borderRadius: '5px', textDecoration: 'none' }}>Login</Link>
      </div>
    </div>
  );
};
export default Home;