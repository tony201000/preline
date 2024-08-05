// app/components/header.tsx
'use client';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setErrorMessage(''); // Réinitialiser le message d'erreur à chaque ouverture
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(''); // Réinitialiser le message d'erreur
  
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // Rediriger vers la page dashboard
        window.location.href = '/dashboard';
      } catch (error) {
        // Gérer les erreurs d'authentification
        const typedError = error as { code?: string };
        switch (typedError.code) {
          case 'auth/invalid-email':
            setErrorMessage('Adresse e-mail invalide.');
            break;
          case 'auth/user-not-found':
            setErrorMessage('Aucun utilisateur trouvé avec cette adresse e-mail.');
            break;
          case 'auth/wrong-password':
            setErrorMessage('Mot de passe incorrect.');
            break;
          default:
            setErrorMessage('Erreur de connexion, veuillez réessayer.');
        }
      }
    };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-500">Accueil</a>
          <a href="/aPropos" className="text-gray-700 hover:text-blue-500">A propos</a>        </div>
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Se connecter
        </button>
      </nav>

      {/* Modal de connexion */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4">Connexion</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
                {errorMessage && errorMessage.includes('e-mail') && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
                {errorMessage && errorMessage.includes('Mot de passe') && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-700 mr-4"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Connexion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;