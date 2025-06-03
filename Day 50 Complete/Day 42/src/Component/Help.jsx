import React from 'react';

const helpTopics = [
  {
    title: 'Account & Login Issues',
    content: 'If you are having trouble logging in or forgot your password, use our "Reset Password" option or contact support for help.',
  },
  {
    title: 'Orders & Services Tracking',
    content: 'You can track your orders and services via the "My Orders" page. Each service may have a different delivery timeline.',
  },
  {
    title: 'Payment & Billing Support',
    content: 'We support PayPal, JazzCash, EasyPaisa, and bank transfers. If you face any billing issues, please let us know immediately.',
  },
  {
    title: 'Technical Support',
    content: 'Having trouble using the website or application? Our technical team is available 24/7 to assist you with any issue.',
  },
  {
    title: 'Education & Exam Help',
    content: 'We provide coaching, study resources, and exam preparation guidance for ICS, Matric, and university entrance exams.',
  },
  {
    title: 'Crypto & Finance Guidance',
    content: 'Need help with crypto trading, financial planning, or investment? Our experts are ready to assist you with the best advice.',
  },
];

const faqs = [
  {
    question: 'Do you offer support via WhatsApp?',
    answer: 'Yes, we are available on WhatsApp. You can reach us directly using the WhatsApp button on the contact page.',
  },
  {
    question: 'What is your average response time?',
    answer: 'We usually respond within 30 minutes. During busy hours, it may take slightly longer.',
  },
  {
    question: 'Are you available on weekends?',
    answer: 'Yes, our support team is active 7 days a week, including weekends.',
  },
];

export default function HelpPage() {
  return (
    <div className="bg-gray-50 text-gray-800 py-16 px-6 sm:px-12 lg:px-24">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-indigo-700 text-center mb-12">Need Help?</h1>
      <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-gray-700">
        We're here to answer your questions and support you at every step. Browse the topics below or get in touch with us directly.
      </p>

      {/* Help Topics */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {helpTopics.map((topic, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">{topic.title}</h2>
            <p>{topic.content}</p>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Frequently Asked Questions (FAQs)</h2>
      <div className="space-y-6 max-w-4xl mx-auto mb-20">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-indigo-600">{faq.question}</h3>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Help */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Still Need Help?</h2>
        <p className="mb-6 text-gray-700">Contact our customer support team directly via email.</p>
        <a
          href="mailto:support@yourwebsite.com"
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition"
        >
          Email Support
        </a>
      </div>
    </div>
  );
}