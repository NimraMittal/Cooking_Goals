const LoadingSpinner = ({ message = 'Loading...' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
    <div className="spinner"></div>
    <p style={{ marginTop: '1rem', color: '#666' }}>{message}</p>
  </div>
);

export default LoadingSpinner;