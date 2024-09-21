import React from 'react';
import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      src: '/team1.png',
      name: 'Alexandre Duquette',
      title: 'VP - Trésorier / Développeur',
      description:
        "Alexandre est le vieux sage de l'équipe. Avec son expérience en gestion de bases de donnée, d'infrastructure et de développement ''back-end'', sa vision et son expertise sont des incontournables lors de la création d'un nouveau logiciel. Il est toujours à l'affût des dernières technologies et parle couramment le langage des meilleures pratiques.",
    },
    {
      src: '/team2.png',
      name: 'Francis Laverdière',
      title: 'VP / Développeur',
      description:
        "Francis est l'incarnation même de l'énergie positive et notre source éternelle de motivation. Il voit toujours le bon côté des choses et garde comme priorité le plaisir de l'équipe de réalisation et du partenaire. Il est très professionnel, soucieux du détail et prend grand plaisir à innover et trouver de meilleures façons de faire.",
    },
    {
      src: '/team3.png',
      name: 'Bruno Guérin',
      title: 'VP / Développeur',
      description:
        "Bruno est la bouffée d'air frais dans la compagnie. Ses idées et sa curiosité sont à l'origine de plusieurs innovations dans l'équipe. Il est polyvalent et détient une grande capacité d'apprentissage et d'adaptation.",
    },
    {
      src: '/team4.png',
      name: 'Serge Kassabian',
      title: 'Président / Développeur',
      description:
        "Serge fait preuve d'un talent naturel de communicateur, de beaucoup de leadership et d'une grande transparence. Ceux-ci lui permettent de naviguer aisément dans le mode des relations d'affaires et des partenariats. Il est essentiel pour lui que tout le monde sorte gagnant de chaque situation. Ayant été développeur avant de devenir gestionnaire, il est outillé pour mener à bien tout type de solution Web.",
    },
  ];

  return (
    <section className="bg-[#f2f2f2] py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Notre Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <Image
                src={member.src}
                alt={member.name}
                width={150} // Adjust width as needed
                height={150} // Adjust height as needed
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <h4 className="text-md text-gray-500 mb-2">{member.title}</h4>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
