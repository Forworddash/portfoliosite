import React from 'react';
// import Picture from '../images/sa.jpg';

const About = () => {
  return (
    <div className="container m-auto p-6">
      <div>
        <h1 className="text-3xl text-center font-bold mb-4">About</h1>
      </div>
      <div className='grid grid-cols-1'>
        {/* <div className='m-auto order-2 xl:order-1 lg:order-1 md:order-2 sm:order-2 hidden xl:block lg:block'>
          <img src='https://cdn.rack-a-tiers.com/wp-content/uploads/2022/10/03100805/Samuel-B-Second-Version.jpg' alt='profile picture' className='w-64 h-auto rounded-full shadow-2xl'></img>
        </div> */}

        <div className='order-1 xl:order-2 lg:order-2 md:order-1 sm:order-1 rounded-2xl m-auto shadow-2xl p-8'>
          <p className="text-lg leading-7">
            Hello! I'm Sam, a developer with a passion for building clean, efficient, and user-focused experiences. I believe in using the right tool for the job. My projects range from full-stack web applications to business solutionsoften built with modern technologies like Python, JavaScript (React/Node.js), TypeScript and Rust. I'm constantly learning and exploring new technologies. When I'm not coding, I'm probably setting up home labs and making power efficient servers. 
            I'm always open to discussing new opportunities, collaborative projects, or just talking tech. Feel free to explore my work and get in touch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
