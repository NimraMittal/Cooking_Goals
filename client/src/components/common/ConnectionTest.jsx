import { useState } from 'react';

const ConnectionTest = () => {
  const [status, setStatus] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      // Note the relative URL - the proxy handles the rest!
      const response = await fetch('/api/health');
      const data = await response.json();
      setStatus({ message: `✅ Success: ${data.message}`, type: 'success' });
    } catch (err) {
      setStatus({ message: '❌ Connection Failed: ' + err.message, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', background: '#f0f2f5', borderRadius: '10px', marginTop: '20px' }}>
      <h3>Kitchen Connection Test</h3>
      <button 
        onClick={testConnection} 
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer', background: '#e67e22', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        {loading ? 'Checking...' : 'Check Backend Status'}
      </button>
      {status.message && (
        <p style={{ color: status.type === 'success' ? 'green' : 'red', marginTop: '15px' }}>
          {status.message}
        </p>
      )}
    </div>
  );
};

export default ConnectionTest;