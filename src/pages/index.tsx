import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Accordion from '@/components/Accordion/Accordion';
import Gallery from '@/components/Gallery';
import HSlider from '@/components/HSlider/HSlider';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';

export default function Home() {
  const featuredWork = [
    { img: "/assets/images/sliders/3.jpg" },
    { img: "/assets/images/sliders/1.jpg" },
    { img: "/assets/images/sliders/3.jpg" },
    { img: "/assets/images/sliders/1.jpg" },
    { img: "/assets/images/sliders/5.jpg" },
    { img: "/assets/images/sliders/1.jpg" },
    { img: "/assets/images/sliders/5.jpg" },
  ]
  const offerData = [
    { id: 1, img: "/assets/images/sliders/3.jpg", title: "Service title", body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems." },
    { id: 2, img: "/assets/images/sliders/1.jpg", title: "Service title", body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems." },
    { id: 3, img: "/assets/images/sliders/3.jpg", title: "Service title", body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems." },
    { id: 4, img: "/assets/images/sliders/1.jpg", title: "Service title", body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems." },
    { id: 5, img: "/assets/images/sliders/5.jpg", title: "Service title", body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems." },
    { id: 6, img: "/assets/images/sliders/1.jpg", title: "Service title", body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems." },
    { id: 7, img: "/assets/images/sliders/5.jpg", title: "Service title", body: "A building management system (BMS), otherwise known as a building automation system (BAS), is a computer-based control system installed in buildings that controls and monitors the building's mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems." },
  ]

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=''>
        <Header />
        <Hero />
        <div className='bg-[#f3b004] p-8'>
          <div className='container m-auto space-y-6 text-center md:flex md:items-center md:justify-between md:space-y-0'>
            <p className='text-white text-xl'>
              Contractors & Construction Managers Since 1981
            </p>
            <button className='uppercase bg-white px-8 py-3 text-sm rounded'>
              Get a Quote
            </button>
          </div>
        </div>
        <Services />
        {/* <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='max-w-lg text-center lg:text-left lg:mt-0 text-slate-700 mt-14'>
              <h2 className='text-3xl mb-4'>About Krupt</h2>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet consectetur. Rhoncus duis lectus in
                aliquet dapibus varius egestas vulputate. Id tristique phasellus
                volutpat sollicitudin urna venenatis. <br />
                Elementum scelerisque platea est eget donec id sagittis blandit
                vestibulum. Mauris lorem ultrices sed porttitor quis. Odio vitae
                dictumst a risus ligula semper. <br />
                Vel amet volutpat dui platea amet elit euismod.{' '}
                <span className='text-red-500'>Read More...</span>
              </p>
            </div>
            <img
              className='py-14 w-1/2'
              src='/assets/images/sliders/3.jpg'
              alt='alt'
            />
          </div>
        </div> */}
        <div className='bg-[url("/assets/bg-section-1.jpg")] bg-no-repeat bg-fixed'>
          <HSlider data={featuredWork} title="Featured Work" bar={true} />
        </div>
        <div className='bg-white py-16'>
          <div className='container m-auto px-10'>
            <div className='flex justify-between md:flex-row flex-col gap-8'>
              <div className=''>
                <Accordion/>
              </div>
              <div className=''>
                <Gallery/>
              </div>
            </div>
          </div>
        </div>
        <HSlider data={offerData} title="What we offer" />
        <Partners/>
        <Footer />
      </main>
    </>
  );
}
