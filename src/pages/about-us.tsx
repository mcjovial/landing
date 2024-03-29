import Footer from '@/components/Footer';
import PageLayout from '@/components/Layout';
import NavBar from '@/components/Navbar';
import Breadcrum from '@/components/Page/Breadcrum';
import Partners from '@/components/Partners';
import Head from 'next/head';
import React from 'react';

const AboutUs = () => {
  return (
    <>
      <PageLayout>
        <div className='bg-[url("/assets/images/sliders/5.jpg")] bg-no-repeat bg-fixed'>
          <Breadcrum title='about us' name='about us' />
        </div>
        <div className='bg-white'>
          {/* <div className='container m-auto px-10 py-16'>
            <div className='flex justify-between'>
              <div className='w-1/3 bg-[#0497f3] p-14 mr-10 text-white leading-7 tracking-wider'>
                <p>Aiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore laboris exercitationem vulputate? Veniam de.</p>
              </div>
              <div className='w-2/3 leading-7 tracking-wide text-[#4d4d4d]'>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ipsum perferendis! Praesent laboris exercitationem vulputate? Veniam doloremque, diam, do nisl ut! Condimentum mollitia torquent nostra inventore aute. Veniam cras ullam quo aspernatur conubia. Interdum dapibusumenda porro perferendis esse similiquLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.</p>
                <p>aciti placeat fusce vehicula debitis aliqua, animi, provident netus cumque cillum vehicula! Fringilla scelerisque, gravida enim, ultricies qui malesuada, pretium leo ipsum atque imperdiet? Magna mattis, soluta, sollicitudin! Beatae labore, posuere similique! Sed ut fames natoque! Cum assumenda porro perferendis esse similique tortor ullam, gravida voluptatum occaecat quibusdam minim quis. Ipsum perferendis! Praesent laboris exercitationem vulputate? Veniam doloremque, diam, do nisl ut! Condimentum mollitia torquent nostra inventore aute.</p>
              </div>
            </div>
          </div> */}
          <div className='container m-auto px-10 py-16 text-[#4d4d4d]'>
            <div className='m-auto mb-10'>
              <p className='text-2xl my-2 text-gray-600 uppercase'>
                Who we are
              </p>
              <div className='bg-[#0497f3] p-0.5 max-w-[80px]'></div>
            </div>
            <div className='flex md:flex-row flex-col items-end leading-6 text-center md:text-left md:space-y-0 space-y-4 mb-10 justify-between gap-8'>
              <div className='md:w-1/2'>
                <p className=''>
                  AMASPACE is a Building Technology Service Company consisting
                  of professionals who are nationally renowned leaders in
                  building technology service. With a strong backbone of highly
                  competent and proficient work force.
                </p>
              </div>
              <div className='bg-[#0497f3] text-white p-8 md:w-1/2'>
                <p>
                  AMASPACE is accredited by World leaders in Technological
                  Innovations and Building Solutions. We offer surveillance,
                  physical and information security, networking, IT service
                  management and project management.
                </p>
              </div>
              <div className='md:w-1/2'>
                <p>
                  We also design, procure, install and maintain electrical,
                  mechanical and building technology systems for industrial,
                  commercial and residential clients.
                </p>
              </div>
            </div>
            <hr />
          </div>

          <div className='container m-auto px-10 text-[#4d4d4d]'>
            <div className='flex md:flex-row flex-col justify-between gap-8'>
              <div className='md:w-1/3 leading-[26px]'>
                <p>
                  We design, procure, install and maintain Heating, Ventilation
                  and Air Conditioning (HVAC) systems, Water supply and water
                  works, Electrical works (Major Voltage & low voltage),
                  Firefighting, General Plumbing services , Power supply,
                  electrical network and communication systems to meet
                  industrial, commercial or residential requirements. We also
                  provide quality general plumbing services. Our employees and
                  local Agents are trained by international experts on the
                  latest trends, tools, and technologies.3130307931
                </p>
                <br />
                <p>
                  With access to the latest machines and tools so that our
                  product is latest and cost effective, we are confident that we
                  will be able to create an exceptional system that will meet
                  and exceed Client’s expectation.
                </p>
              </div>
              <div className='md:w-2/3'>
                <div className='flex'>
                  <div className='mr-4'>
                    <img src='/assets/images/gallery/1.jpg' alt='1' />
                  </div>
                  <div className='ml-4'>
                    <img src='/assets/images/gallery/2.jpg' alt='2' />
                  </div>
                </div>
                <div>
                  <div className='flex my-10'>
                    <div className='border-l-[1.5px] pl-4 mr-4'>
                      <p className='text-2xl'>Our Vission</p>
                      <p>
                        To continuously raise the bar in the delivery of
                        building services that meet the quality standards,
                        performance and price aspirations of our customers,
                        while reducing maintenance and support requirement to
                        the barest minimum.
                      </p>
                    </div>
                    <div className='border-l-[1.5px] pl-4 ml-4'>
                      <p className='text-2xl'>Our Mission</p>
                      <p>
                        To continuously raise the bar in the delivery of
                        building services that meet the quality standards,
                        performance and price aspirations of our customers,
                        while reducing maintenance and support requirement to
                        the barest minimum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default AboutUs;
