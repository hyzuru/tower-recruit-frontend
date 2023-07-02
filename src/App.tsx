import React from 'react';
import Navigation from './components/Navigation';
import RegisterCard from './components/RegisterCard';
import './App.css';

type User = {
  firstName: string
  lastName?: string
  getFullName: () => string,
}

function App() {

  const user: User = { 
    firstName: "Jacqueline",
    lastName: "Yeung",
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }

  return (
    <div className="App">
      <header className="navbar">
        <h1 className="pagetitle">Register Card Form</h1>
        <Navigation/>

      </header>

      <div className="welcome">
        Welcome, { user.getFullName() }!
      </div>

      <RegisterCard/>
    </div>
  );
}

export default App;
