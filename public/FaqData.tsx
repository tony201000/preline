// FaqData.tsx
import React from 'react';
import FaqModele from '../components/FAQ/FaqModele';
import FormattedAnswer from '../components/FAQ/ForamattedAnswer';


const FaqData = () => {
  const faqItems = [
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-one",
      question: "En quoi consiste la formation dans laquelle je serais inscrit ?",
      answer: "La formation dans laquelle vous serez inscrit est un bilan de compétences 100% en ligne. Le centre de formation dont elle fait partie est entièrement reconnu par L&rsquo;Etat."
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-two",
      question: "Dois-je suivre cette formation ?",
      answer: "Non, Vous ne devrez suivre aucune formation. Cependant, vous recevrez par mail les documents comme-ci vous suiviez une formation. Vous n&rsquo;avez pas besoin d&rsquo;y répondre ou de signer quoique ce soit."
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-three",
      question: "J&rsquo;ai recu un mail m&rsquo;invitant à un appel vidéo. Dois-je y participer ?",
      answer: "Non, comme indiqué précédemment, vous n&rsquo;avez pas besoin de répondre aux mails ou appels vidéos. Ils sont envoyés dans le but de rendre officiel le fait que vous suiviez une formation."
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
            text: "En effet, il est impossible de récupérer tout l’argent qui est sur votre compte de formation car pour pouvoir accéder à cet argent bloqué, le centre de formation doit effectuer des démarches et cela a un coût! Voici ce qui est déduit du montant total :",
            listItems: [
              "Les taxes perçues par l’URSAAF : 23,6%",
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
      question: "Est-ce qu’il y a un risque ?",
      answer: "La société qui vous propose de récupérer votre argent est une société 100% légale. Elle est enregistrée au RCS de Paris, et est listée officiellement dans les sociétés partenaires sur le site du CPF. Pourquoi risquerait-elle de tuer la poule aux oeufs d’or ?"
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-seven",
      question: "Est-ce que cette offre est permanente ?",
      answer: "Il n'y a pas de date limite pour demander à récupérer votre argent. Ce qui veut dire que l'offre n'a pas de fin défini, elle peut durer plusieurs mois, années, ou quelques jours seulement."
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