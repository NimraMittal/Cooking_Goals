import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (!user) return <p>Loading kitchen...</p>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome back, Chef {user.name}! 👨‍🍳</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout} style={{ marginTop: '1rem', color: 'red' }}>Logout</button>
    </div>
  );
};

export default Dashboard;