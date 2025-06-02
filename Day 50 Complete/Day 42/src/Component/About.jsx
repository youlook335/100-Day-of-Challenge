function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-white text-gray-900 px-6 py-12">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-16 text-center text-indigo-700 tracking-wide drop-shadow-md">
          About Our Company & Expertise
        </h1>

        {[
          {
            title: "Ecommerce",
            desc: `
Ecommerce is the buying and selling of goods and services online, revolutionizing retail worldwide by making shopping accessible anytime and anywhere. Our ecommerce platform provides an extensive catalog, user-friendly interface, and secure payment solutions to enhance customer experience.

Our Key Products & Services include:
- Online Marketplaces for Electronics, Fashion, Home Decor, and Groceries.
- Customized Shopping Solutions with AI-driven Recommendations.
- Subscription Boxes for wellness, snacks, and books.
- Mobile App for seamless shopping on-the-go.
- Customer Loyalty Programs & Flash Sales.
- Vendor Dashboard for inventory and order management.

With digital transformation accelerating, we integrate augmented reality features to let customers virtually try products and chatbots for 24/7 assistance, creating a highly engaging and convenient shopping journey.
            `,
            img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
            alt: "Ecommerce products",
          },
          {
            title: "Finance",
            desc: `
Finance is the backbone of both personal wealth and business growth. We provide a comprehensive suite of financial products and services designed to empower users to manage money wisely, invest smartly, and secure their futures.

Our Core Offerings:
- Personal Finance Tools: Budget planners, savings trackers, and debt management.
- Investment Portfolios: Diverse options including mutual funds, stocks, bonds, and ETFs.
- Retirement & Pension Planning: Long-term financial security strategies.
- Digital Banking Services: Instant payments, mobile deposits, and contactless cards.
- Insurance Products: Life, health, property, and auto insurance with flexible plans.
- Business Finance Solutions: Working capital loans, invoicing, payroll, and tax advisory.

We harness AI-powered analytics to deliver personalized financial advice, detect fraud, and predict market trends, ensuring our customers stay ahead in the dynamic financial landscape.
            `,
            img: "https://images.unsplash.com/photo-1556742400-b5c1a7a45f0e?auto=format&fit=crop&w=800&q=80",
            alt: "Finance concept",
          },
          {
            title: "Education",
            desc: `
Education fuels growth, innovation, and societal advancement. Our educational platform offers a wide spectrum of learning resources, from early childhood to professional development, supporting learners of all ages and backgrounds.

Our Educational Products & Features:
- Online Courses in Technology, Business, Arts, and Humanities.
- Interactive Live Classes and Recorded Lectures.
- Exam Preparation Modules for standardized tests and certifications.
- Skill Development Workshops in coding, digital marketing, communication, and leadership.
- E-books, Practice Tests, and Progress Tracking Dashboards.
- Career Counseling and Internship Placements.

Leveraging adaptive learning algorithms, we tailor content to each learner's pace and style. Our collaborations with industry experts ensure updated curricula aligned with market needs.
            `,
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
            alt: "Education",
          },
          {
            title: "Establishment & Real Estate",
            desc: `
Real estate is a pivotal sector shaping urban growth and investment opportunities. We offer end-to-end services that simplify property transactions and management for buyers, sellers, renters, and investors.

Our Real Estate Services Include:
- Comprehensive Property Listings: Residential homes, commercial offices, retail spaces, and land parcels.
- Virtual Property Tours and 3D Walkthroughs.
- Market Analysis Reports highlighting price trends and investment potential.
- Legal Documentation Assistance and Due Diligence.
- Property Management Services covering maintenance, tenant relations, and rent collection.
- Development Consulting for new projects and urban planning.

Embracing technology, we integrate blockchain for transparent ownership records and smart contracts to automate agreements, making property dealings more secure and efficient.
            `,
            img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
            alt: "Real Estate",
          },
          {
            title: "Cryptocurrency & Blockchain",
            desc: `
Cryptocurrency and blockchain technologies are revolutionizing finance and beyond by enabling decentralized, secure, and transparent systems.

Our Crypto & Blockchain Offerings:
- Cryptocurrency Exchange Platform with support for Bitcoin, Ethereum, and altcoins.
- Secure Digital Wallets for asset storage and transactions.
- Blockchain Development Services including DApps, NFTs, and smart contracts.
- Educational Content covering blockchain fundamentals, trading strategies, and regulatory insights.
- Security Solutions employing multi-signature wallets, cold storage, and 2FA.
- Consulting for businesses seeking blockchain integration for supply chain, healthcare, or finance.

With the rapid growth of decentralized finance (DeFi) and Web3, we are committed to providing trustworthy tools and education to navigate the evolving crypto ecosystem safely.
            `,
            img: "https://images.unsplash.com/photo-1623052291020-978d8f512d2c?auto=format&fit=crop&w=800&q=80",
            alt: "Cryptocurrency",
          },
          {
            title: "Exam Preparation",
            desc: `
Exam preparation is crucial for academic and professional success. Our dedicated platform offers comprehensive resources to help students excel in competitive exams across various fields.

Features & Products:
- Extensive Question Banks with detailed solutions for subjects like Math, Science, and English.
- Timed Mock Tests simulating real exam conditions.
- Interactive Video Tutorials by expert instructors.
- Personalized Study Plans and Progress Tracking.
- Preparation Material for Board Exams, ICS, Medical, Engineering, and Competitive Tests like SAT, GRE, and IELTS.
- Motivational and Time Management Workshops to enhance study habits.

Our approach combines quality content, technology-driven analytics, and mentor support to maximize student potential and confidence during exams.
            `,
            img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
            alt: "Exam Preparation",
          },
        ].map(({ title, desc, img, alt }, index) => (
          <section
            key={title}
            className={`mb-20 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-12`}
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-indigo-700 mb-6 drop-shadow-md">
                {title}
              </h2>
              <p className="text-gray-700 text-lg whitespace-pre-line leading-relaxed font-medium">
                {desc.trim()}
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src={img}
                alt={alt}
                className="rounded-2xl shadow-xl object-cover w-full h-80 md:h-96"
                loading="lazy"
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default About;
