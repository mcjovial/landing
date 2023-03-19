import { IProduct } from '@/data/products';
import React, { FC, useEffect } from 'react'

const Description: FC<IProduct> = ({ specification }) => {  
  
  return (
    <>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-900 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-bold text-2xl text-right">
                  Technical
                </th>
                <th className="px-6 py-3 font-bold text-2xl text-left">
                  Specifications
                </th>
              </tr>
            </thead>
            <tbody>
              {
                specification?.map((x: (string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined)[], i: React.Key | null | undefined) => (
                  <tr className="bg-white border-b" key={i}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                      {x[0]}
                    </th>
                    <td className="px-6 py-4">
                      {x[1]}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Description