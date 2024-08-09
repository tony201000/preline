// /app/login/LoginForm.tsx
'use client';
import React from 'react';
import InputField from './InputField';
import RememberMeCheckbox from './RememberMeCheckBox';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
}

/**
 * Composant pour le formulaire de connexion.
 */
const LoginForm: React.FC<LoginFormProps> = ({ email, password, setEmail, setPassword, handleLogin, rememberMe, setRememberMe }) => {
  return (
    <form onSubmit={handleLogin}>
      <div className="grid gap-y-4">
        <InputField
          id="email"
          label="Adresse e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <div className="flex justify-between items-center">
            <InputField
              id="password"
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="../examples/html/modal-recover-account.html">Mot de passe oublié ?</a>
          </div>
        </div>
        <RememberMeCheckbox
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </div>
    </form>
  );
};

export default LoginForm;