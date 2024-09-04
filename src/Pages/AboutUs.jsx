import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <AboutSection />
      <MissionSection />
      <TeamSection />
      <Footer />
    </div>
  );
};



const AboutSection = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Our Platform</h2>
      <p className="text-lg">
        Welcome to [Your E-Commerce Platform Name], your one-stop destination for all your shopping needs. 
        We are committed to providing you with an unparalleled shopping experience, offering a vast selection 
        of products across various categories. From the latest fashion trends to cutting-edge electronics, 
        home essentials to unique gifts, we have everything you need in one place.
      </p>
      <p className="text-lg mt-4">
        Our platform is designed with you in mind, ensuring that you have a seamless and enjoyable shopping 
        experience. We work tirelessly to bring you the best products at the best prices, all while providing 
        top-notch customer service. Whether you're browsing our website or using our mobile app, you'll find 
        it easy to navigate and discover exactly what you're looking for.
      </p>
    </section>
  );
};

const MissionSection = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
      <p className="text-lg">
        Our mission is to empower consumers by providing them with an exceptional shopping experience. We 
        strive to offer the highest quality products at competitive prices, while ensuring that our customers 
        receive the best possible service. We believe that shopping should be convenient, accessible, and enjoyable 
        for everyone, and we are committed to making that a reality.
      </p>
      <p className="text-lg mt-4">
        At [Your E-Commerce Platform Name], we are more than just a retailer – we are a community. We are 
        dedicated to building relationships with our customers, listening to their needs, and continuously 
        improving our platform to better serve them. We are driven by a passion for innovation, quality, and 
        customer satisfaction, and we are always looking for new ways to enhance your shopping experience.
      </p>
    </section>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO & Founder',
      image: 'https://marketplace.canva.com/EAFbETaQ81o/1/0/1600w/canva-blue-modern-linkedin-profile-picture-6vIo4A6wEqg.jpg',
      bio: 'John has over 20 years of experience in the e-commerce industry and is the visionary behind our platform. His leadership and dedication have been instrumental in our growth and success.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Chief Technology Officer',
      image: 'https://marketplace.canva.com/EAGOhZUm43E/1/0/400w/canva-foto-de-perfil-para-linkedin-ejecutivo-profesional-negro-wQl0arBAsA4.jpg',
      bio: 'Jane is responsible for our cutting-edge technology and innovative solutions. With a background in software engineering, she leads our tech team with a focus on excellence and efficiency.',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      position: 'Head of Marketing',
      image: 'https://marketplace.canva.com/EAFRnlFqyL0/2/0/400w/canva-blue-%26-white-modern-linkedin-profile-picture-msOGKwKmvl4.jpg',
      bio: 'Sarah is the creative force behind our brand. She oversees all marketing strategies and campaigns, ensuring that our message resonates with our customers and keeps them coming back.',
    },
    {
      id: 4,
      name: 'Michael Brown',
      position: 'Customer Service Manager',
      image: 'https://marketplace.canva.com/EAFuxWeKWeY/2/0/800w/canva-blue-and-white-simple-man-linkedin-profile-picture-u75_3vMOQbQ.jpg',
      bio: 'Michael is dedicated to providing our customers with the best possible service. He leads our customer support team with a focus on resolving issues quickly and efficiently.',
    },
  ];

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map(member => (
          <div key={member.id} className="text-center">
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-full mb-4" />
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-lg text-gray-700">{member.position}</p>
            <p className="text-lg mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 [Your E-Commerce Platform Name]</p>
    </footer>
  );
};

export default AboutUs;
