import React from 'react';
// import Picture from '../images/sa.jpg';

const About: React.FC = () => {
  return (
    <div className="container m-auto p-6" id=''>
      <div>
        <h1 className="text-3xl text-center font-bold mb-4">About</h1>
      </div>
      <div className='grid grid-cols-2'>
        <div className='m-auto'>
          <img src='https://cdn.rack-a-tiers.com/wp-content/uploads/2022/10/03100805/Samuel-B-Second-Version.jpg' alt='profile picture' className='w-64 h-auto rounded-full'></img>
        </div>

        <div className=''>
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
