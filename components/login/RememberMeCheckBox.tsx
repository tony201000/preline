// /app/login/RememberMeCheckbox.tsx
"use client";
import React from "react";

interface RememberMeCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Composant pour la case à cocher "Se souvenir de moi".
 */
const RememberMeCheckbox: React.FC<RememberMeCheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <div className="flex">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
          checked={checked}
          onChange={onChange}
        />
      </div>
      <div className="ms-3">
        <label htmlFor="remember-me" className="text-sm">
          Se souvenir de moi
        </label>
      </div>
    </div>
  );
};

export default RememberMeCheckbox;
