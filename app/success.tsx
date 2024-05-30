import React from 'react';

const SuccessPage = () => {
  return (
    <div className="success-page">
      <h1>THANK YOU!</h1>
      <img src="./assets/images/basket.png" alt="Basket Icon" />
      <p>You just saved a meal from being wasted!</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button style={styles.button}>Got It</button>
      </div>
      {/* Add an icon here if desired */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: `linear-gradient(to bottom, #ffffff, #fad3b6)`, // Gradient background
  },
  successPage: {
    padding: '2rem',
    borderRadius: '10px',
    backgroundColor: '#fff', // White background for content area
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
    maxHeight: '100%', // Set max height for scroll view
  },
  button: {
    marginTop: '2rem',
    padding: '1rem 2rem',
    justify: 'center',
    align: 'center',
    backgroundColor: '#FFF8F2', // Button background color
    color: '#FF9D7B', // Button text color
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    width: '200px',
    height: '50px',
  },
};

const App = () => {
  return (
    <div className="container" style={styles.container}>
      <SuccessPage className="thankyou-page" style={styles.successPage} />
    </div>
  );
};

export default App;