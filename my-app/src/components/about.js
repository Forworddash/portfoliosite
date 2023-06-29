import React from 'react';
// import Picture from '../images/sa.jpg';

const About: React.FC = () => {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id magna
            consequat, cursus nulla sit amet, accumsan velit. Quisque interdum
            sagittis urna. Aliquam erat volutpat. Fusce dapibus, odio eu pulvinar
            sollicitudin, turpis dui facilisis lorem, at fringilla quam nulla eu
            ipsum. Integer non dolor ac tellus imperdiet finibus. Nullam quis
            pulvinar nulla, a tempor turpis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
