import { React , useContext } from 'react'
import { Link } from 'react-router-dom';
//import Icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';

const Product = ({ product }) => {
  console.log(product)
  // dest product
  const { id, image, category, title, price } = product;

  return (
    <div> 
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
            {/* Imgae */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img  src={image} alt="" />
          </div>
        </div>
      </div>
      <div>2</div>

      {/* <div
        className='w-full h-[300px] bg-pink-200' key={product.id}
      >
        {product.title}
      </div> */} 
    </div>
  )
}

export default Product;