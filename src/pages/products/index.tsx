import Breadcrum from '@/components/Page/Breadcrum';
import ProductCard from '@/components/Products/Card';
import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { IProduct, products } from '@/data/products';
import PageLayout from '@/components/Layout';

const Products = () => {
  const [keyword, setKeyword] = useState('');
  const [productz, setProducts] = useState<IProduct[]>()

  useEffect(() => {
    setProducts(products)
  }, [])
  
  const search = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const onfilter = (e: { target: { value: any; }; }) => {
    const prodz = products.filter((pro) => (pro.category === e.target.value))
    setProducts(prodz)
  }

  return (
    <>
      <PageLayout>
        <div className='bg-[url("/assets/bg-section-4.jpg")] bg-no-repeat bg-fixed'>
          <Breadcrum title='our products' name='our products' />
        </div>
        <div className='py-16'>
          <div className='container m-auto px-10'>
            <div className='flex justify-between gap-4 flex-col md:flex-row'>
              {/* <aside className='bg-gray-200 md:h-screen md:w-[30%]'>

              </aside> */}
              <section className=''>
                <div className='flex justify-between items-center'>
                  <div className='text-gray-600'>
                    <form onSubmit={search}>
                      <div className='relative w-80'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                          <MagnifyingGlassIcon className='w-5 h-5' />
                        </div>
                        <input
                          type='search'
                          className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-black focus:border-black focus:outline-none'
                          placeholder='Search Products...'
                          onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button
                          type='submit'
                          className='text-white absolute right-2.5 bottom-2.5 bg-[#0497f3] hover:bg-[#f4c44b] focus:ring-4 focus:ring-gray-300 font-medium text-sm px-4 py-2 focus:outline-none'
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <select onChange={onfilter} className='bg-gray-50 border border-gray-300 text-gray-600 text-sm focus:ring-black focus:border-black block w-full p-4 focus:outline-none'>
                      <option >Categories</option>
                      <option value='fire safety'>Fire Safety</option>
                      <option value='building automation'>Building Automation</option>
                      <option value='access control'>Access Control</option>
                    </select>
                  </div>
                </div>
                <div className='md:grid md:grid-cols-3 md:gap-8 pt-10 space-y-12 md:space-y-0'>
                  {productz?.map((product, i) => (
                    <ProductCard
                      key={i}
                      id={product.id}
                      img={product.img}
                      name={product.name}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Products;
