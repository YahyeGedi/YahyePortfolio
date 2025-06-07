import React from 'react';
import hero from '../assets/hero.png';
import facebook from '../assets/facebook.png'; 
import github from '../assets/github.png'; 
import linkedin from '../assets/linkedin.png'; 
import Yahye from '../assets/Yahye.pdf'; 

/**
 * Hero Component - The main banner section of the portfolio
 * Displays personal introduction, social links, and call-to-action
 */
export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      {/* Animated Gradient Circle Background */}

      {/* Main Content Section */}
      <section 
        data-aos="fade-up" 
        data-aos-delay="250" 
        className="text-gray-500 body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Text Content Section */}
          <div className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 
            flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
            {/* Social Media Icons */}
            <div 
              className="flex space-x-4 mb-2" 
              data-aos="fade-up" 
              data-aos-delay="400"
              aria-label="Social media links"
            >
              <a href="https://github.com/YahyeGedi?tab=repositories" aria-label="GitHub profile">
                <img src={github} alt="GitHub" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/yahyegedi/" aria-label="LinkedIn profile">
                <img src={linkedin} alt="LinkedIn" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Headings */}
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-gray-900">
              Hi! I'm <span className="text-red-600">Yahye</span>
            </h1>
            <h2 className="sm:text-3xl mb-4 font-bold text-blue-950">
              Software Developer
            </h2>
            
            {/* Description */}
            <p className="mb-8 leading-relaxed text-black max-w-lg">
              A passionate third year software developer that is currently pursuing a degree in Computer Science at Carleton University with a specializaition in Artificial Intelligence and Machine Learning.
              I am always eager to learn new technologies and improve my skills. Continuning to learn and grow in the field of software development is my main goal!
            </p>

            {/* Call-to-Action Button */}
            <div className="flex justify-center">
              <a 
                href={Yahye} 
                download="Yahye_Gedi_Resume.pdf"
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 
                focus:outline-none hover:bg-red-700 rounded-full text-lg
                hover:shadow-[0_0_20px_rgba(255,100,100,0.5)] transition-all"
                aria-label="Download Resume"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}