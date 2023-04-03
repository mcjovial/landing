import PageLayout from '@/components/Layout';
import Breadcrum from '@/components/Page/Breadcrum';
import Description from '@/components/Products/Description';
import Reviews from '@/components/Products/Reviews';
import { IProduct, products } from '@/data/products';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedNav, setSelectedNav] = useState('DESCRIPTION');
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const product = products?.find((product) => product.id === Number(id));
    setProduct(product);
  }, [id]);

  const navItems: Record<string, any> = {
    DESCRIPTION: {
      name: 'Description',
      value: 'DESCRIPTION',
      component: <Description specification={product?.specification} />,
    },
    REVIEWS: {
      name: 'Reviews',
      value: 'REVIEWS',
      component: <Reviews />,
    },
  };

  const nav = navItems[selectedNav];
  const Component = nav.component ?? (
    <Description specification={product?.specification} />
  );
  const values = Object.values(navItems);

  return (
    <>
      <PageLayout>
        <div className='bg-[url("/assets/bg-section-5.jpg")] bg-no-repeat bg-fixed'>
          <Breadcrum title='our products' name='our products' sub='Hammer' />
        </div>
        <div className='py-16 bg-white'>
          <div className='container m-auto px-10'>
            <div className='flex justify-between gap-8 flex-col md:flex-row'>
              <div>
                <div className='w-full'>
                  <div className='mb-3'>
                    <img
                      className='w-full'
                      src={product?.img}
                      alt='alt'
                    />
                  </div>
                  <div className='flex justify-between w-full gap-4'>
                    <div className='h-auto'>
                      <img
                        width={200}
                        className=''
                        src={product?.img}
                        alt='alt'
                      />
                    </div>
                    <div className='h-auto'>
                      <img
                        width={200}
                        className=''
                        src={product?.img}
                        alt='alt'
                      />
                    </div>
                    <div className='h-auto'>
                      <img
                        width={200}
                        className=''
                        src={product?.img}
                        alt='alt'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full space-y-8'>
                <div className='space-y-2'>
                  <p className='text-4xl font-medium'>{product?.name}</p>
                  <p className='text-gray-400'>{product?.description}</p>
                  <div className='flex text-xs'>
                    <p className='text-[#5a94b9] mr-2'>Category:</p>
                    <div className='flex gap-2'>
                      <a className='hover:underline'>{product?.category}</a>
                    </div>
                  </div>
                  <div className='flex gap-2 text-sm'>
                    <div className='bg-gray-100 py-2 px-4 shadow hover:bg-[#0497f3] hover:text-white ring-gray-300 ring-1'>
                      <a href=''>Add To Cart</a>
                    </div>
                    <div className='bg-gray-100 py-2 px-4 shadow hover:bg-[#0497f3] hover:text-white ring-gray-300 ring-1'>
                      <a href=''>Buy Now</a>
                    </div>
                    <div className='bg-gray-100 py-2 px-4 shadow hover:bg-[#0497f3] hover:text-white ring-gray-300 ring-1'>
                      <a href=''>Contact Us</a>
                    </div>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='flex border-b'>
                    {values.map((item, i) => (
                      <div key={i} className='-mb-px mr-1'>
                        <a
                          onClick={(e) => {
                            e.preventDefault()
                            setSelectedNav(item.value)
                          }
                        }
                          className={`bg-white inline-block ${
                            selectedNav === item.value
                              ? 'border-l border-t border-r rounded-t text-gray-700'
                              : 'text-gray-500 hover:text-[#0497f3]'
                          } py-2 px-4 font-semibold`}
                          href='#'
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </div>
                  <div>{Component}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ProductDetail;
