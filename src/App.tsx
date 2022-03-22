import React from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import './App.css';
import { LoginPage } from './components/Login/LoginPage';
import { Home } from './components/Home';

const MainContent = () => {
  return (
    <div className='app'>
      <AuthenticatedTemplate>
        <Home />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <LoginPage />
      </UnauthenticatedTemplate>
    </div>
  )
}

function App() {
  return (
    <MainContent />
  );
}

export default App;
