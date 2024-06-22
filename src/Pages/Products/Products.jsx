import React, { useEffect } from 'react'
import './Products.css'
import TableData from '../../Components/TableData/TableData'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToServer, getProductsFromServer, removeProductFromServer } from '../../Redux/store/products'
import { Field, Form, Formik } from 'formik'

export default function Products() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products[0])

  useEffect(() => {
    dispatch(getProductsFromServer())
  }, [])

  const removeProduct = (productId) => {
    swal({
      title: "Are You Sure To Delete Product?",
      icon: 'warning',
      buttons: ['No', 'Yes']
    }).then(result => {
      if (result) {
        dispatch(removeProductFromServer(productId))
      }
    })
  }

  return (
    <div className='p-8 flex flex-col gap-10'>
      <Formik
        initialValues={{ name: '', price: 0, count: 0 }}
        validate={values => {
          const errors = {};
          if (values.name.length < 3) {
            errors.name = 'Name Minimum Need Three Chars!';
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          dispatch(addProductToServer(values))
          dispatch(getProductsFromServer())
          resetForm()
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit} className="rounded-md bg-white p-6">
            <h3 className="text-2xl text-[#666666] font-semibold">Add Product</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-[#e6e8ed] rounded-md outline-none p-2 w-[97%] min-w-28" />
              <Field
                type="number"
                name="price"
                placeholder="Price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-[#e6e8ed] rounded-md outline-none p-2 w-[48%] min-w-28" />
              <Field
                type="number"
                name="count"
                placeholder="Count"
                value={values.count}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-[#e6e8ed] rounded-md outline-none p-2 w-[48%] min-w-28" />
            </div>
            <button type="submit" className="rounded-md w-full mt-6 bg-[#21232d]  transition-all hover:bg-slate-700 text-[#9799ab] font-semibold p-3">Add Product</button>
          </Form>
        )}
      </Formik>
      <TableData>
        <thead className="bg-white border-b">
          <tr className='flex items-center justify-between w-full py-4'>
            <th
              scope="col"
              className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
            >
              #
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
            >
              Name
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
            >
              Price
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
            >
              Count
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
            >
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log(products)}
          {products && products.map((product, index) => (
            <tr key={product.id} className="bg-gray-100 border-b flex items-center justify-between w-full px-6 py-2 md:px-10 lg:px-20">
              <td
                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
              >
                {index + 1}
              </td>
              <td
                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
              >
                {product.name}
              </td>
              <td
                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
              >
                {product.price === 0 ? 'Free' : `$${product.price.toLocaleString()}`}
              </td>
              <td
                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
              >
                {product.count === 0 ? 'Unavailable' : `${product.count.toLocaleString()}`}
              </td>
              <td
                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
              >
                <button onClick={() => removeProduct(product.id)} className="bg-red-600 rounded-md p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </TableData>
    </div>
  )
}
