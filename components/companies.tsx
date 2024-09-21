import React from 'react';
import Image from 'next/image';

const Companies = () => {
  const companies = [
    { src: '/merkle.svg', alt: 'Merkle' },
    { src: '/optimum.png', alt: 'Optimum' },
    { src: '/dotfusion.svg', alt: 'DotFusion' },
    { src: '/croix.svg', alt: 'Croix' },
  ];

  return (
    <section className="bg-[#03063e] py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={company.src}
                alt={company.alt}
                width={150} // Adjust width as needed
                height={50}  // Adjust height as needed
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
