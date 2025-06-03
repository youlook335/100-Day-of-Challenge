import React from 'react';

const services = [
  
  {
    title: 'E-commerce Solutions',
    image: 'https://source.unsplash.com/800x500/?ecommerce,shopping',
    description: `We provide end-to-end e-commerce solutions including online store setup, product management, secure checkout integration, SEO optimization, and digital marketing strategies to grow your business in the online world.`,
  },
  {
    title: 'Financial & Investment Guidance',
    image: 'https://source.unsplash.com/800x500/?finance,investment',
    description: `Our expert team offers personalized investment planning, digital banking setup, cryptocurrency portfolio consulting, budgeting tools, and corporate finance solutions for individuals and businesses.`,
  },
  {
    title: 'Educational Services & Exam Preparation',
    image: 'https://source.unsplash.com/800x500/?education,study',
    description: `We assist students in exam preparation for ICS, Matric, and university entrance exams. Services include tutoring, online classes, study resources, and career counseling.`,
  },
  {
    title: 'Property & Business Establishment',
    image: 'https://source.unsplash.com/800x500/?realestate,building',
    description: `We help entrepreneurs in setting up businesses and managing property transactions. From business registration to real estate consultancy, our services ensure smooth establishment processes.`,
  },
  {
    title: 'Cryptocurrency & Blockchain Services',
    image: 'https://source.unsplash.com/800x500/?blockchain,crypto',
    description: `Explore the world of blockchain with our expert advice on crypto trading, wallet setup, token creation, blockchain development, and Web3 application deployment.`,
  },
];
const processSteps = [
  'Free Consultation',
  'Deep Research & Planning',
  'UI/UX Design & Development',
  'Quality Assurance & Testing',
  'Final Delivery',
  'After-Sale Support',
];

const testimonials = [
  {
    name: 'Ali Khan',
    feedback: 'Their finance services helped me grow my business. Highly professional and supportive team!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sara Ahmed',
    feedback: 'I took their educational coaching service. Best investment I ever made!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const faqs = [
  {
    question: 'Which technologies do you use?',
    answer: 'We use modern tools like React, Node.js, Django, Blockchain, Firebase, and more depending on project needs.',
  },
  {
    question: 'Do you offer free consultation?',
    answer: 'Yes! Our first consultation is 100% free to understand your needs.',
  },
  {
    question: 'Can I get custom service?',
    answer: 'Absolutely. Every solution is tailored for your business goals.',
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-16">
        Our Professional Services
      </h1>
      <div className="space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover"
            />
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-indigo-600 mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-32 bg-white rounded-3xl shadow-lg p-12">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
          Why Choose Us
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700 list-disc pl-6">
          <li>Experienced professionals in every field from finance to tech.</li>
          <li>Customized and scalable solutions to meet your business goals.</li>
          <li>24/7 client support with fast response times.</li>
          <li>Proven track record of successful projects and happy clients.</li>
          <li>Focus on quality, innovation, and long-term growth.</li>
          <li>Integrated services — get everything from one trusted provider.</li>
        </ul>
      </div>
      <div className="bg-gray-50 text-gray-800">
      {/* Process Workflow */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">How We Deliver Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-indigo-500 mb-2">Step {index + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl shadow p-6 flex flex-col items-center text-center">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4" />
              <p className="italic">“{t.feedback}”</p>
              <h4 className="mt-4 font-bold text-indigo-600">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-indigo-500">{faq.question}</h3>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}


// import React from 'react';

// const processSteps = [
//   'Free Consultation',
//   'Deep Research & Planning',
//   'UI/UX Design & Development',
//   'Quality Assurance & Testing',
//   'Final Delivery',
//   'After-Sale Support',
// ];

// const testimonials = [
//   {
//     name: 'Ali Khan',
//     feedback: 'Their finance services helped me grow my business. Highly professional and supportive team!',
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     name: 'Sara Ahmed',
//     feedback: 'I took their educational coaching service. Best investment I ever made!',
//     image: 'https://randomuser.me/api/portraits/women/65.jpg',
//   },
// ];

// const faqs = [
//   {
//     question: 'Which technologies do you use?',
//     answer: 'We use modern tools like React, Node.js, Django, Blockchain, Firebase, and more depending on project needs.',
//   },
//   {
//     question: 'Do you offer free consultation?',
//     answer: 'Yes! Our first consultation is 100% free to understand your needs.',
//   },
//   {
//     question: 'Can I get custom service?',
//     answer: 'Absolutely. Every solution is tailored for your business goals.',
//   },
// ];

// export default function ServicesExtras() {
//   return (
//     <div className="bg-gray-50 text-gray-800">
//       {/* Process Workflow */}
//       <section className="max-w-7xl mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">How We Deliver Our Services</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {processSteps.map((step, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
//               <h3 className="text-xl font-semibold text-indigo-500 mb-2">Step {index + 1}</h3>
//               <p>{step}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-white py-12">
//         <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">What Our Clients Say</h2>
//         <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4">
//           {testimonials.map((t, idx) => (
//             <div key={idx} className="bg-gray-100 rounded-xl shadow p-6 flex flex-col items-center text-center">
//               <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4" />
//               <p className="italic">“{t.feedback}”</p>
//               <h4 className="mt-4 font-bold text-indigo-600">{t.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQs */}
//       <section className="py-12 max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">Frequently Asked Questions</h2>
//         <div className="space-y-6">
//           {faqs.map((faq, idx) => (
//             <div key={idx} className="bg-white shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-indigo-500">{faq.question}</h3>
//               <p className="mt-2 text-gray-700">{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
