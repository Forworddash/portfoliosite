import React from 'react';
// import Picture from '../images/sa.jpg';

const About = () => {
  return (
    <div className="container m-auto p-6">
      <div>
        <h1 className="text-3xl text-center font-bold mb-4">About</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
        <div className='m-auto order-2 xl:order-1 lg:order-1 md:order-2 sm:order-2 hidden xl:block lg:block'>
          <img src='https://cdn.rack-a-tiers.com/wp-content/uploads/2022/10/03100805/Samuel-B-Second-Version.jpg' alt='profile picture' className='w-64 h-auto rounded-full shadow-2xl'></img>
        </div>

        <div className='order-1 xl:order-2 lg:order-2 md:order-1 sm:order-1 rounded-2xl m-auto shadow-2xl p-8'>
          <p className="text-lg leading-7">
          Hey there, I'm Samuel – a digital wizard by day, conjuring code and crafting pixels in the charming realm of Victoria, BC. With React as my wand and JavaScript as my spellbook, I shape captivating web spells that dance harmoniously with HTML and CSS incantations. When I'm not taming browsers, I'm brewing Python potions and summoning C# enchantments, often exploring the virtual realms of Unity. So whether it's pixels or python, spells or scripts, I'm your sorcerer of software, ready to bring magic to the digital realm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
