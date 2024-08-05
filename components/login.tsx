// app/login.tsx
'use client';
import React, { useState } from 'react';
import { auth, signIn } from '../firebase';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signIn(email, password);
      router.push('/dashboard'); // Redirigez l'utilisateur vers une page sécurisée après connexion
    } catch (error) {
      setError('Échec de la connexion. Vérifiez vos informations.');
    }
  };

  return (
    <>
        <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Connexion
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
