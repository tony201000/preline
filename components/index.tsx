'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import SeConnecterBleu from './boutons/seConnecterBleu';    


const Index: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Gestion de la connexion utilisateur
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
        } catch (err) {
            if (err instanceof Error) {
                console.error("Error logging in:", err.message);
                setError(err.message);
            } else {
                console.error("Unexpected error", err);
                setError("An unexpected error occurred");
            }
        }
    };

    return (
        <div className="bg-zinc-700" itemScope itemType="https://schema.org/WebPage">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                {/* Titre */}
                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" itemProp="headline">
                        Bienvenue sur votre site personnalisé.
                    </h1>
                </div>
                {/* Fin du titre */}

                <div className="max-w-3xl text-center mx-auto">
                    <p className="text-lg text-white/70" itemProp="text">
                        Vous êtes ici car vous avez été invité par un ami proche à profiter de bons plans extraordinaires et dont la force réside dans le fait que pour qu&rsquo;un bon plan reste exceptionnel il ne doit pas trop s&rsquo;ébruiter.
                    </p>
                </div>

                <div className="max-w-3xl text-center mx-auto">
                    <p className="text-lg text-red-500" itemProp="text">
                        Pour accéder à tous vos avantages connectez-vous avec vos identifiants personnels qui vous ont été communiqués :
                    </p>
                </div>

                {/* Boutons */}
                <SeConnecterBleu />
                {/* Fin des boutons */}

                {/* Modal de connexion */}
                <div id="hs-modal-signin" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto" role="dialog" tabIndex={-1} aria-labelledby="hs-modal-signin-label">
                    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                        <div className="bg-orange-800 border border-gray-200 rounded-xl shadow-sm">
                            <div className="p-4 sm:p-7">
                                <div className="mt-5">
                                    <div className="py-3 flex items-center text-xs text-lime-500 uppercase before:flex-1 before:border-t before:border-green-500 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
                                        Saisissez vos identifiants ici :
                                    </div>

                                    {/* Formulaire */}
                                    <form onSubmit={handleLogin}>
                                        <div className="grid gap-y-4">
                                            {/* Champ de saisie Email */}
                                            <div>
                                                <label htmlFor="email" className="block text-sm mb-2">Adresse e-mail</label>
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Champ de saisie Mot de passe */}
                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <label htmlFor="password" className="block text-sm mb-2">Mot de passe</label>
                                                    <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="../examples/html/modal-recover-account.html">Mot de passe oublié ?</a>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                                        required
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Checkbox Se souvenir de moi */}
                                            <div className="flex items-center">
                                                <div className="flex">
                                                    <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500" />
                                                </div>
                                                <div className="ms-3">
                                                    <label htmlFor="remember-me" className="text-sm">Se souvenir de moi</label>
                                                </div>
                                            </div>

                                            {/* Bouton de connexion */}
                                            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                                                Se connecter
                                            </button>

                                            {/* Message d&rsquo;erreur */}
                                            {error && <p className="text-red-600 text-xs">{error}</p>}
                                        </div>
                                    </form>
                                    {/* Fin du formulaire */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fin du modal de connexion */}
            </div>
        </div>
    );
}

export default Index;
