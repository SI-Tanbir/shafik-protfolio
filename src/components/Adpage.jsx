// components/FeaturesSection.js
import Image from 'next/image';
import responsive from '../../public/img/responsive.webp'
export default function Adpage() {
    
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto text-center px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            CREATE AN AMAZING SITE TODAY!
          </h2>
  
          {/* Feature List */}
          <div className="flex justify-center space-x-6 text-gray-600 mb-8">
            <span>Responsive Design</span>
            <span>•</span>
            <span>Fast Performance</span>
            <span>•</span>
            <span>Standard Code</span>
            <span>•</span>
            <span>Easy To Customize</span>
            <span>•</span>
            <span>Retina Ready</span>
          </div>
  
          {/* Cards */}
      
          <Image 
          src={responsive}
          all="responsive-img"
          />
        </div>
      </section>
    );
  }
  