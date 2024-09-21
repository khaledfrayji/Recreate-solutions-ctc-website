
import MagicButton from './MagicButton';

const Hero = () => {
  return (
    <section className="bg-[#f2f2f2] min-h-screen flex items-center justify-center ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12">
        
        {/* Left side: Description */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        
          <h1 className="text-[#ff4900] text-3xl lg:text-6xl font-bold leading-tight lg:leading-snug">
            Solutions digitales de bout en bout pour vous et vos clients
          </h1>
          <p className="text-lg lg:text-xl pb-10">
            Nous fournissons des solutions numériques adaptées à vos besoins pour améliorer l'expérience client et optimiser votre entreprise.
          </p>
          <a href="tel:+1 (866) 552-2040" > <MagicButton/></a>
       
        </div>

        {/* Right side: Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="/devices.png" // Replace with the correct image path
            alt="Solutions Digitales"
            className="w-600 h-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
