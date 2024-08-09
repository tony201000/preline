// /app/login/ErrorMessage.tsx
'use client';
import React from 'react';

interface ErrorMessageProps {
  message: string | null;
}

/**
 * Composant pour afficher un message d'erreur.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return message ? <p className="text-red-600 text-xs">{message}</p> : null;
};

export default ErrorMessage;