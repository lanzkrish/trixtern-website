import PageHeader from '@/components/ui/page-header';
import React from 'react';
import Header from './components/nav';
import TeamsPage from './components/teams';
import Banner from './components/banner';

interface LayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={{ backgroundColor: '#f4f4f4', textAlign: 'center' }}>
        <PageHeader
          title="About Us"
          description="Welcome to Trixtern! Learn more about us here."
        />
      </header>
      <main>
        <Header />
        <section className="pb-16 sm:py-16">
          <section className="py-16 px-5 sm:px-26 bg-gray-100 max-w-4xl mx-auto sm:rounded-3xl">
            {children}
          </section>
        </section>
        <Banner />
        <TeamsPage />
      </main>
    </div>
  );
};

export default AboutLayout;