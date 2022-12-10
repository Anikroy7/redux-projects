import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { add_to_cart, remove_from_cart } from "../redux/actionCreators/productAction";


const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(pathname);


  return (
    <div
      className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      {pathname.includes('cart') && <div className="grid place-items-center bg-indigo-900 absolute h-8 w-12 top-0 right-0 rounded-3xl text-white"  >{product.quantity}</div>}
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature, index) => {
            return <li key={index} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className=''>
        {pathname.includes('cart') ? <button
          className='bg-red-500 rounded-full py-1 px-2 flex-1 mt-5 w-full text-white text-bold'
          onClick={() => dispatch(remove_from_cart(product))}
        >
          Remove to cart
        </button> : <div className="flex gap-2 mt-5">
          <button
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
            onClick={() => dispatch(add_to_cart(product))}
          >
            Add to cart
          </button>
          <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'

          >
            <BiListPlus className='text-white' />
          </button>

        </div>}



      </div>
      <div>

      </div>
    </div>
  );
};

export default ProductCard;
