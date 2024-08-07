// FormattedAnswer.tsx
import React from 'react';
import ModuleCalCpf from '../moduleMontantCPF/modal';

interface FormattedAnswerProps {
  content: {
    text: string;
    listItems: string[];
    module?: boolean;
  };
}

const FormattedAnswer: React.FC<FormattedAnswerProps> = ({ content }) => {
  return (
    <div>
      {content.text}
      <ul className="list-disc list-inside">
        {content.listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {content.module && (
        <div>
          Vérifie le montant que tu peux toucher grâce à ce module: <ModuleCalCpf />
        </div>
      )}
    </div>
  );
};

export default FormattedAnswer;
