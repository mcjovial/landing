import React from 'react'

const Description = () => {
  return (
    <>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-900 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-bold text-2xl">
                  Product
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  Article Number (Market Facing Number)
                </th>
                <td className="px-6 py-4">
                  AQR2532NNW | S55720-S136
                </td>
              </tr>
              <tr className="border-b bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  Product Description
                </th>
                <td className="px-6 py-4">
                  AQR2532NNW – Front module for base modules, temperature (active)
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  Product family
                </th>
                <td className="px-6 py-4">
                  AQR253.. – Front modules for base module
                </td>
              </tr>
              <tr className="border-b bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  Product Lifecycle (PLM)
                </th>
                <td className="px-6 py-4">
                  PM300:Active Product
                </td>
              </tr>
            </tbody>
            {/*  */}
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-bold text-2xl">
                Price data
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  Price Group / Headquarter Price Group
                </th>
                <td className="px-6 py-4">
                  C41 / C41
                </td>
              </tr>
              <tr className="border-b bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  List Price
                </th>
                <td className="px-6 py-4">
                  $$$
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  Customer Price
                </th>
                <td className="px-6 py-4">
                  $$$
                </td>
              </tr>
              <tr className="border-b bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  Metal Factor
                </th>
                <td className="px-6 py-4">
                  None
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Description