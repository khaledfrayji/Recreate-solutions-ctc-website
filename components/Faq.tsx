'use client'
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Pourquoi Solutions CTC?",
      answer: "Pour s'épanouir dans notre passion, à notre façon.",
    },
    {
      question: "En combien de temps je peux m'attendre à recevoir une réponse lorsque je tente de contacter Solutions CTC?",
      answer: "Normalement, vous recevrez une réponse dans les 24 heures suivant la communication.",
    },
    {
      question: "Qu'est-ce que anime les membres de solutions CTC?",
      answer: "S'amuser en travaillant, dans des projets qui nous permettent de nous dépasser et de repousser nos limites.",
    },
    {
      question: "Quels sont les services offerts par Solutions CTC?",
      answer: "Consultez la page Services.",
    },
    {
      question: "Comment contacter Solutions CTC collaborer avec eux?",
      answer: "Remplir le formulaire dans la page Contact.",
    },
    {
      question: "Dois-je chercher ailleurs si le service recherché n'est pas mentionné dans le site web de Solutions CTC?",
      answer: "N'hésitez pas à nous contacter pour toute question, même si le service n'est pas mentionné.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f2f2f2] py-8" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Questions Fréquemment Posées</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none bg-[#ff4900] text-white rounded-md"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <p className="p-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
