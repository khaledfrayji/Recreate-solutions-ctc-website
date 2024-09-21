"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const serviceElements = document.querySelectorAll(".service-item");

      serviceElements.forEach((service) => {
        const rect = service.getBoundingClientRect();
        const serviceElement = service as HTMLElement;

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveService(parseInt(serviceElement.dataset.id || "0"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "Développement Web",
      description:
        "Chez Klevr, nous travaillons main dans la main pour créer des sites web réactifs et sur mesure qui reflètent votre vision...",
    },
    {
      id: 2,
      title: "Développement d'applications",
      description:
        "Nous travaillons de manière agile chez Klevr, en nous immergeant dans un environnement basé sur Scrum pour développer des applications performantes...",
    },
    {
      id: 3,
      title: "UX/UI Design",
      description:
        "La créativité est entre vos mains, et notre équipe de designers de classe mondiale est là pour concrétiser votre vision dans une interface utilisateur intuitive...",
    },
    {
      id: 4,
      title: "Audit de marque et création d'identité",
      description:
        "La valeur d'une marque se mesure à la façon dont elle fait ressentir le client. Nos experts en branding vous aident à créer une identité forte...",
    },
    {
      id: 5,
      title: "Stratégie de marketing numérique et SEO",
      description:
        "Dans le monde numérique d'aujourd'hui, il est essentiel de fournir des stratégies marketing percutantes. Nous sommes là pour vous accompagner...",
    },
    {
      id: 6,
      title: "Développement de produits numériques",
      description:
        "Notre travail chez Klevr n'a de sens que si nous forgeons des relations durables entre les marques et les utilisateurs finaux. Nous renforçons ces liens avec des produits innovants...",
    },
  ];

  return (
    <section className="bg-[#ff4900] min-h-screen flex items-start py-12" id="services">
      <div className="w-1/2 hidden lg:block sticky p-10 top-0">
        <div className="flex items-center justify-center h-full">
          <Image
            src="/logo.svg"
            alt="Services Image"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        
      </div>

      <div className="w-full lg:w-1/2 flex flex-col px-6 space-y-12 relative">
        <div className="sticky top-0 py-4 bg-[#ff4900]">
          <h1 className="text-white text-4xl lg:text-6xl font-bold py-10">
            Nos services qui simplifient votre vie
          </h1>
        </div>

        <div className="space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-item text-white"
              data-id={service.id.toString()}
            >
              <h2
                className={`text-2xl lg:text-3xl font-bold transition-colors duration-600 ease-in-out ${
                  activeService === service.id ? "text-[#03063e]" : "text-white"
                }`}
              >
                {service.id}. {service.title}
              </h2>
              <p className="text-base lg:text-lg mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
