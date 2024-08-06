// app/components/header.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { auth, logout, signIn  } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const HeaderMember: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setErrorMessage(''); // Réinitialiser le message d&rsquo;erreur à chaque ouverture
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(''); // Réinitialiser le message d&rsquo;erreur
  
    try {
        await signIn(email, password);
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

    const handleLogout = async () => {
        await logout();
        window.location.href = '/'; // Rediriger vers la page d&rsquo;accueil
      };

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-10">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <nav className="container mx-auto flex justify-between items-center p-4">
            <div className="flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-blue-500">Accueil</a>
              {user && (
                <>
                  <a href="/bourso2" className="text-gray-700 hover:text-blue-500">Boursorama</a>
                  <a href="/cpf" className="text-gray-700 hover:text-blue-500">CPF</a>
                </>
              )}
            </div>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Bienvenue, {user.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={toggleModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Se connecter
              </button>
            )}
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

export default HeaderMember;