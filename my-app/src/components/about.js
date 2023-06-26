import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6" id='about'>
      <h1 className="text-3xl text-center font-bold mb-4">About</h1>
      <p className="text-lg leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id magna
        consequat, cursus nulla sit amet, accumsan velit. Quisque interdum
        sagittis urna. Aliquam erat volutpat. Fusce dapibus, odio eu pulvinar
        sollicitudin, turpis dui facilisis lorem, at fringilla quam nulla eu
        ipsum. Integer non dolor ac tellus imperdiet finibus. Nullam quis
        pulvinar nulla, a tempor turpis.
      </p>
      <p className="text-lg leading-7 mt-4">
        Proin sollicitudin, felis vitae luctus lobortis, velit nulla laoreet
        erat, vel feugiat ex purus eu dolor. Vivamus vel dictum nunc. Nullam
        tristique turpis a metus molestie laoreet. Duis sed felis est. Sed
        efficitur finibus lacus, vel commodo arcu pretium vitae. In eu dui vel
        odio commodo bibendum. Nam convallis ac nisi vel aliquet. Suspendisse
        venenatis elit in quam euismod vestibulum.
      </p>
    </div>
  );
};

export default About;
