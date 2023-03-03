import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

const ProductNav = () => {
  return (
    <>
      <div>
        <div className="px-3 text-left md:cursor-pointer group">
          <h1 className="flex justify-between items-center md:pr-0 pr-5 group">
            <Link href='services'>Our Products</Link>
            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
              <BsChevronDown className='w-3'/>
            </span>
          </h1>
          <div>
            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
              <div className="py-3">
                <div className="w-4 h-4 left-3 absolute mt-1 bg-gray-100 rotate-45"></div>
              </div>
              <div className="bg-gray-100 p-5">
                <Link href="services">
                  <div className='space-y-4'>
                    <h1 className="capitalize">
                      Fire Safety Products
                    </h1>
                    <h1 className="capitalize">
                      Building Automation Products
                    </h1>
                    <h1 className="capitalize">
                      Access Control Products
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductNav