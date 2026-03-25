import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Agent Dashboard</h1>
        <p>Real-time monitoring for your AI systems.</p>
        {/* Placeholder for dashboard components */}
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Agent Status Overview</h2>
          <p>Agent 1: Online</p>
          <p>Agent 2: Processing</p>
          <p>Agent 3: Idle</p>
        </div>
      </header>
    </div>
  );
}

export default App;
