import Footer from '@/components/Footer';
import PageLayout from '@/components/Layout';
import NavBar from '@/components/Navbar';
import Breadcrum from '@/components/Page/Breadcrum';
import Partners from '@/components/Partners';
import Head from 'next/head';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ContactUs = () => {
  return (
    <>
      <PageLayout>
        <div className='bg-[url("/assets/bg-section-3.jpg")] bg-no-repeat bg-fixed'>
          <Breadcrum title='contact us' name='contact us' />
        </div>
        <div className=''>
          <div className='container m-auto px-10 py-20'>
            <div className='flex md:flex-row flex-col md:justify-between gap-8'>
              <div className='md:w-1/3 text-[#807e7e] space-y-4'>
                <p className='uppercase text-2xl text-[#494848]'>call us</p>
                <p className='leading-[32px]'>
                  Cras id justo eget sapien scelerisque lacinia non a eros. In a
                  volutpat magna. Vivamus pretium urna at condimentum porta.
                  Phasellus mollis mauris dolor, a tincidunt mauris fringilla.
                  Phasellus lobortis tortor urna, vitae venenatis dui bibendum
                  at.
                </p>
                <div className='flex items-start gap-6'>
                  <div className='text-2xl p-2 bg-[#f1f0f0]'>
                    <FaHome />
                  </div>
                  <div>
                    <p>
                      C4 U6, Horizon 2 Lekki Gardens, Ikate, Lekki-Epe
                      Expressway, Lagos State
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-6'>
                  <div className='text-2xl p-2 bg-[#f1f0f0]'>
                    <BsFillTelephoneFill />
                  </div>
                  <div>
                    <p>+2347069441021</p>
                    <p>+2348079813950</p>
                  </div>
                </div>
                <div className='flex items-start gap-6'>
                  <div className='text-2xl p-2 bg-[#f1f0f0]'>
                    <HiOutlineMail />
                  </div>
                  <div>
                    <p>contact@amaspace.com</p>
                  </div>
                </div>
              </div>
              <div className='md:w-2/3 text-[#807e7e] space-y-4'>
                <p className='uppercase text-2xl text-[#494848]'>
                  Get in touch with us
                </p>
                <form action='' className='w-full space-y-5'>
                  <div className='flex justify-between gap-5'>
                    <input
                      className='w-full border px-4 py-4 focus:outline focus:outline-[#a19f9f] focus:border-none'
                      type='text'
                      placeholder='Name*'
                    />
                    <input
                      className='w-full border px-4 py-4 focus:outline focus:outline-[#a19f9f] focus:border-none'
                      type='email'
                      placeholder='Email*'
                    />
                  </div>
                  <div className='flex justify-between gap-5'>
                    <input
                      className='w-full border px-4 py-4 focus:outline focus:outline-[#a19f9f] focus:border-none'
                      type='text'
                      placeholder='Phone Number*'
                    />
                    <input
                      className='w-full border px-4 py-4 focus:outline focus:outline-[#a19f9f] focus:border-none'
                      type='text'
                      placeholder='Subject*'
                    />
                  </div>
                  <div>
                    <textarea
                      className='w-full border px-4 py-4 focus:outline focus:outline-[#a19f9f] focus:border-none'
                      name='message'
                      id=''
                      rows={10}
                      placeholder='Message*'
                    ></textarea>
                  </div>
                  <div className='text-center'>
                    <button className='bg-[#0497f3] hover:bg-[#272626] py-4 px-10 uppercase text-white'>
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ContactUs;
