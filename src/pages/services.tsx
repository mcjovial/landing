import Footer from '@/components/Footer';
import HSlider from '@/components/HSlider/HSlider';
import PageLayout from '@/components/Layout';
import NavBar from '@/components/Navbar';
import Breadcrum from '@/components/Page/Breadcrum';
import Partners from '@/components/Partners';
import Head from 'next/head';
import React from 'react';

const services = () => {
  const offerData = [
    {
      id: 1,
      img: '/assets/images/sliders/3.jpg',
      title: 'Service title',
      body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.",
    },
    {
      id: 2,
      img: '/assets/images/sliders/1.jpg',
      title: 'Service title',
      body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.",
    },
    {
      id: 3,
      img: '/assets/images/sliders/3.jpg',
      title: 'Service title',
      body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.",
    },
    {
      id: 4,
      img: '/assets/images/sliders/1.jpg',
      title: 'Service title',
      body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.",
    },
    {
      id: 5,
      img: '/assets/images/sliders/5.jpg',
      title: 'Service title',
      body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.",
    },
    {
      id: 6,
      img: '/assets/images/sliders/1.jpg',
      title: 'Service title',
      body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.",
    },
    {
      id: 7,
      img: '/assets/images/sliders/5.jpg',
      title: 'Service title',
      body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.",
    },
  ];
  return (
    <>
      <PageLayout>
        <div className='bg-[url("/assets/bg-section-2.jpg")] bg-no-repeat bg-fixed'>
          <Breadcrum title='our services' name='services' />
        </div>
        <div>
          <HSlider data={offerData} title='What we do' />
        </div>
        <div className='bg-[url("/assets/bg-section-3.jpg")] bg-fixed bg-cover bg-no-repeat'>
          <div className='container m-auto px-10 py-28'>
            <div className='uppercase text-center text-white space-y-8'>
              <p className='text-4xl'>Excellence in construction since 1981</p>
              <button className='bg-[#0497f3] py-3 px-6 rounded uppercase'>
                Get a quote
              </button>
            </div>
          </div>
        </div>
        <Partners />
      </PageLayout>
    </>
  );
};

export default services;
