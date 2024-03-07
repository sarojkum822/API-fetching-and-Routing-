import React, { useState }  from 'react'
import axios from 'axios';

const Service = () => {

    const [showProducts,setProducts] = useState([]);

    console.log(showProducts);

    const getProducts=()=>{
        const api="https://fakestoreapi.com/products";

        axios.get(api).then(products=>{
            // console.log(products);
            setProducts(products.data)

        }).catch(err =>{
            console.log(err);
        })
    }

    const addProducts=()=>{
        const api="https://fakestoreapi.com/products";

        axios.post(api,{
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }).then(res=>{
            console.log(res);

        }).catch(err =>{
            console.log(err);
        })
    }

  return (
    <div className='p-10 bg-zinc-300 w-full h-screen'>
        <div className='p-4 w-52 h-10 border-2 items-center justify-center flex bg-sky-300'>

            <button className='hover:font-semibold' onClick={getProducts}>Get Products</button>
        </div>
        <div className='p-4 w-62 h-10 border-2 items-center mt-10 justify-center flex bg-sky-300'>
            <button className='hover:font-semibold' onClick={addProducts}>Add Products To API</button>
        </div>

        <h2 className='mt-4'>Products</h2>
        <ul>
            {showProducts.length>0 ? showProducts.map((item,index)=><li key={index} className='text-black border-2 p-4 bg-blue-300 m-2'>{item.title}</li>):<h1>Loading...</h1>}
        </ul>
    </div>
  )
}

export default Service