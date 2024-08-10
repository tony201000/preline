// eslint-disable-next-line no-unused-vars

// /app/login/InputField.tsx

"use client";
import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Composant pour un champ de saisie.
 */
const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={id}
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
          required
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
