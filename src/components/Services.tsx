import React from 'react'

const Services = () => {
  return (
    <>
      <div className='py-16 bg-white'>
        <div className='container m-auto'>
          <div className='text-center m-auto mb-10'>
            <p className='text-2xl my-2 text-gray-600'>MAIN SERVICES</p>
            <div className='bg-amber-400 p-0.5 max-w-[80px] m-auto'></div>
          </div>
          <div className='md:grid md:grid-cols-3 md:gap-16 space-y-10 md:space-y-0'>
            <div className='flex'>
              <p className="inline-flex items-center justify-center w-16 h-16 mr-6 text-pink-100 transition-colors duration-150 bg-amber-400 rounded-full focus:shadow-outline hover:bg-white hover:text-amber-400 hover:border-amber-400 hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>

              </p>
              <div className='items-center hover:text-amber-400'>
                <p className='capitalize text-lg text-gray-600 hover:text-amber-400 mb-2'>construction consultant</p>
                <p className='text-slate-500 hover:text-slate-500 md:tracking-wide md:max-w-[280px] max-w-xl leading-7'>Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.</p>
              </div>
            </div>
            <div className='flex'>
              <p className="inline-flex items-center justify-center w-16 h-16 mr-6 text-pink-100 transition-colors duration-150 bg-amber-400 rounded-full focus:shadow-outline hover:bg-white hover:text-amber-400 hover:border-amber-400 hover:border-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
              </svg>

              </p>
              <div className='items-center hover:text-amber-400'>
                <p className='capitalize text-lg text-gray-600 hover:text-amber-400 mb-2'>architectural design</p>
                <p className='text-slate-500 hover:text-slate-500 md:tracking-wide md:max-w-[280px] max-w-xl leading-7'>Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.</p>
              </div>
            </div>
            <div className='flex'>
              <p className="inline-flex items-center justify-center w-16 h-16 mr-6 text-pink-100 transition-colors duration-150 bg-amber-400 rounded-full focus:shadow-outline hover:bg-white hover:text-amber-400 hover:border-amber-400 hover:border-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              </p>
              <div className='items-center hover:text-amber-400'>
                <p className='capitalize text-lg text-gray-600 hover:text-amber-400 mb-2'>Electical Systems</p>
                <p className='text-slate-500 hover:text-slate-500 md:tracking-wide md:max-w-[280px] max-w-xl leading-7'>Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.</p>
              </div>
            </div>
            <div className='flex'>
              <p className="inline-flex items-center justify-center w-16 h-16 mr-6 text-pink-100 transition-colors duration-150 bg-amber-400 rounded-full focus:shadow-outline hover:bg-white hover:text-amber-400 hover:border-amber-400 hover:border-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
                <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clipRule="evenodd" />
              </svg>

              </p>
              <div className='items-center hover:text-amber-400'>
                <p className='capitalize text-lg text-gray-600 hover:text-amber-400 mb-2'>general contracting</p>
                <p className='text-slate-500 hover:text-slate-500 md:tracking-wide md:max-w-[280px] max-w-xl leading-7'>Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.</p>
              </div>
            </div>
            <div className='flex'>
              <p className="inline-flex items-center justify-center w-16 h-16 mr-6 text-pink-100 transition-colors duration-150 bg-amber-400 rounded-full focus:shadow-outline hover:bg-white hover:text-amber-400 hover:border-amber-400 hover:border-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
              </svg>

              </p>
              <div className='items-center hover:text-amber-400'>
                <p className='capitalize text-lg text-gray-600 hover:text-amber-400 mb-2'>reconstruction services</p>
                <p className='text-slate-500 hover:text-slate-500 md:tracking-wide md:max-w-[280px] max-w-xl leading-7'>Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.</p>
              </div>
            </div>
            <div className='flex'>
              <p className="inline-flex items-center justify-center w-16 h-16 mr-6 text-pink-100 transition-colors duration-150 bg-amber-400 rounded-full focus:shadow-outline hover:bg-white hover:text-amber-400 hover:border-amber-400 hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </p>
              <div className='items-center hover:text-amber-400'>
                <p className='capitalize text-lg text-gray-600 hover:text-amber-400 mb-2'>plumbing services</p>
                <p className='text-slate-500 hover:text-slate-500 md:tracking-wide md:max-w-[280px] max-w-xl leading-7'>Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services