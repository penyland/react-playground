import React, { FC } from 'react';
import LoginLayout from './LoginLayout';
import { SignInButton } from '../SignInButton';

export const LoginPage: FC = () => {
  return (
    <LoginLayout>
      <div id="login-card">
        <h2>Welcome to Singapore</h2>
        <SignInButton />
      </div>
    </LoginLayout>
  );
};