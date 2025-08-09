import PageHeader from '@/components/ui/page-header';
import React from 'react';
// import Header from './components/nav';
// import Banner from './components/banner';

interface LayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={{ backgroundColor: '#f4f4f4', textAlign: 'center' }}>
        <PageHeader
          title="Works we have done"
          description="Where imagination meets innovation — discover the digital magic we&apos;ve built at Trixtern."
        />
      </header>
      <main>
        {/* <Header /> */}
        <section className="bg-white">
          <section className="">
            {children}
          </section>
        </section>
        {/* <Banner /> */}
      </main>
    </div>
  );
};

export default AboutLayout;