import React from 'react';
import { brandStory, companyInfo } from '../utils/data';
const About = () => {
  return <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl mb-6 text-center">Our Heritage</h1>
          <div className="mb-12">
            <img src={companyInfo.images.perfumery} alt="Diur Parfums" className="w-full h-80 object-cover mb-6" />
            <div className="prose prose-stone max-w-none">
              <p>
                Founded by {brandStory.founderName}, Diur Parfums creates
                sophisticated French fine fragrances that blend contemporary
                luxury with our unique heritage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img src={companyInfo.images.forest} alt="Diur Forest" className="w-full h-64 object-cover" />
                <img src={companyInfo.images.cedars} alt="Cedar trees" className="w-full h-64 object-cover" />
              </div>
              <h2>The Story of Diur</h2>
              <p>{brandStory.heritage.diurForest}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img src={companyInfo.images.laboratory} alt="Modern perfumery" className="w-full h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1597775191046-b84d1e5d2aa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Perfume creation" className="w-full h-64 object-cover" />
              </div>
              <h2>Our Expertise</h2>
              <p>{brandStory.heritage.paternalHeritage}</p>
              <h2>Our Inspiration</h2>
              <p>{brandStory.heritage.maternalGrandfather}</p>
              <h2>French Savoir-Faire</h2>
              <p>
                Our fragrances are crafted in France by master perfumers who
                combine centuries of French perfumery expertise with the finest
                ingredients sourced from around the world. While our connection
                to the Himalayas remains an important part of our story, our
                scents represent a global perspective on modern luxury.
              </p>
              <h2>Our Philosophy</h2>
              <p>{brandStory.philosophy}</p>
              <div className="my-8">
                <img src="https://images.unsplash.com/photo-1601295452898-78a8dd904ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Luxury perfume creation" className="w-full h-96 object-cover" />
              </div>
              <h2>Commitment to Quality</h2>
              <p>
                Every Diur Parfums creation embodies our commitment to
                excellence, from the careful selection of ingredients to the
                artisanal crafting process in France. We blend traditional
                French perfumery techniques with contemporary sensibilities to
                create fragrances that are both timeless and modern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default About;