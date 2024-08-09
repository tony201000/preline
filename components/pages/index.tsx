// /app/login/index.tsx
'use client';

import React from 'react';


const Index: React.FC = () => {

    return (
        <div className="bg-zinc-700" itemScope itemType="https://schema.org/WebPage">
            <div className="max-w-full max-h-full mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                {/* Titre */}
                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" itemProp="headline">
                        Bienvenue à toi petit chanceux !.
                    </h1>
                </div>
                {/* Fin du titre */}

                <div className="max-w-3xl text-center mx-auto">
                    <p className="text-lg text-white/70" itemProp="text">
                        Tu es ici car tu as été invité par un ami proche à profiter de bons plans extraordinaires et dont le secret doit etre gardé. 
                        Pour qu&rsquo;un bon plan reste exceptionnel il ne doit pas etre divulgué à tout le monde.
                    </p>
                </div>

                <div className="max-w-3xl text-center mx-auto">
                    <p className="text-lg text-red-500" itemProp="text">
                        Pour accéder à tous les avantages qui t&rsquo;ont été concocté connectes-toi avec les identifiants personnels qui t&rsquo;ont été communiqués.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Index;