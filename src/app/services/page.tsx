import React from "react";

const ServicesPage: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 p-5">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">Our Services</h1>
        <p className="text-lg text-gray-600 mt-2">
          Empowering businesses with cutting-edge technology solutions.
        </p>
      </header>
      <main className="max-w-4xl mx-auto">
        <section className="mb-8 p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900">
            AI-driven Automation
          </h2>
          <p className="text-gray-700 mt-2">
            Streamline your operations with intelligent automation solutions
            powered by AI.
          </p>
        </section>
        <section className="mb-8 p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900">
            FinTech Solutions & Smart Trading Systems
          </h2>
          <p className="text-gray-700 mt-2">
            Revolutionize financial services with innovative FinTech solutions
            and trading systems.
          </p>
        </section>
        <section className="mb-8 p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900">
            AI-powered Data Analytics & Insights
          </h2>
          <p className="text-gray-700 mt-2">
            Unlock actionable insights with advanced AI-driven data analytics.
          </p>
        </section>
        <section className="mb-8 p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900">
            Cybersecurity & Compliance
          </h2>
          <p className="text-gray-700 mt-2">
            Protect your business with robust cybersecurity and compliance
            solutions.
          </p>
        </section>
        <section className="mb-8 p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900">
            Cloud & Blockchain Integration for FinTech
          </h2>
          <p className="text-gray-700 mt-2">
            Leverage the power of cloud and blockchain for secure and scalable
            FinTech applications.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;