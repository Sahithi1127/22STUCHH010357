import React from 'react';

const features = [
  {
    title: 'Fast Performance',
    desc: 'Our website loads blazing fast to give the best user experience.',
  },
  {
    title: 'Responsive Design',
    desc: 'Looks great on desktop, tablet, and mobile devices.',
  },
  {
    title: 'Easy Customization',
    desc: 'Built with flexibility in mind to suit your brand.',
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      {features.map(({ title, desc }, index) => (
        <div key={index} className="feature-card">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
