import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignalRProvider } from './SignalR';

function App() {
  return (
    <SignalRProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => fetch('/ping')}>Ping!</button>
        </header>
      </div>
    </SignalRProvider>
  );
}

export default App;
