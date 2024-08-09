// FaqData.tsx
import React from 'react';
import FaqModele from '../components/FAQ/FaqModele';
import FormattedAnswer from '../components/FAQ/ForamattedAnswer';


const FaqData = () => {
  const faqItems = [
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-one",
      question: "En quoi consiste la formation dans laquelle je serais inscrit ?",
      answer: "La formation dans laquelle tu sera inscrit est un bilan de compétences 100% en ligne. Le centre de formation dont elle fait partie est entièrement reconnu par L&rsquo;Etat."
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-two",
      question: "Dois-je suivre cette formation ?",
      answer: "Non, tu ne devras suivre aucune formation. Cependant, tu recevras par mail les documents comme-ci tu suivais une formation. Tu n&rsquo;as pas besoin d&rsquo;y répondre ou de signer quoique ce soit."
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-three",
      question: "J&rsquo;ai recu un mail m&rsquo;invitant à un appel vidéo. Dois-je y participer ?",
      answer: "Non, comme indiqué précédemment, tu n&rsquo;as pas besoin de répondre aux mails ou appels vidéos. Ne t&rsquo;inquiète pas, j&rsquo;entend par appel vidéo la demande de participation à un appel vidéo par mail, tu ne seras pas derangé par un appel vidéo inopiné."
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-four",
      question: "Dois-je payer quelque chose ?",
      answer: <>
        Depuis le 2 mai 2024 l&rsquo;Etat a mis en place une participation forfaitaire obligatoire de 100 € pour les personnes souhaitant utiliser leur compte personnel de formation. Malheureusement, il est impossible de passer outre cette participation, mais vous en récupérerez bien plus. De plus il est possible de profiter du bon plan <a href="/Bourso2" className="text-red-900 font-semibold"> Boursorama </a> pour récupérer 70 euros sans avancer d&rsquo;argent et jusqu&rsquo;à 220 euros !
      </>
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-five",
      question: "Pourquoi je ne peux pas récupérer la totalité du montant annoncé sur mon compte de formation ?",
      answer: (
        <FormattedAnswer
          content={{
            text: "Il est impossible de récupérer la totalité du montant affiché sur votre compte de formation pour la bonne raison que le centre de formation doit effectuer des démarches pour rendre ton argent disponible et cela a un coût! Par transpqrence, voici ce qui est déduit du montant total :",
            listItems: [
              "Les taxes perçues par l&rsquo;URSAAF : 23,6%",
              "Le montant nécessaire au centre de formation pour mener les démarches : salaires, suivi du dossier...",
              "Une commission de 100 euros"
            ],
            module: true
          }}
        />
      )
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-six",
      question: "Est-ce qu&rsquo;il y a un risque ?",
      answer: "La personne qui se propose de débloquer ton argent possede une société 100% légale enregistrée au RCS de Paris, et comme tu le verras en lancant la procédure elle est officiellement listée dans les sociétés partenaires sur le site du CPF."
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-seven",
      question: "Est-ce que cette offre est permanente ?",
      answer: "Il n&rsquo;y a pas de date limite fixée mais l&rsquo;offre durer plusieurs mois, années, ou seulement quelques jours."
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-height",
      question: "Quand et comment je toucherais l&rsquo;argent ?",
      answer: "L&rsquo;argent sera envoyé à ton ami apres environ 7 à 10 jours qui te le transmettra alors par virement bancaire, cryptomonnaie ou autre moyen de ton choix."
    }
  ];

  return (
    <>
      {faqItems.map((item) => (
        <FaqModele key={item.id} id={item.id} question={item.question}>
          {item.answer}
        </FaqModele>
      ))}
    </>
  );
};

export type FAQItem = {
  id: string;
  question: string;
  answer: React.ReactNode; // Permet d'accepter tout type de contenu React
}; 

export default FaqData;