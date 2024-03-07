import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen bg-sky-100 flex justify-center p-4'>
            <div className='hover:bg-zinc-100 p-4 w-[50vw] h-52 flex flex-col justify-between'>
                <h1 className='text-3xl underline'>Home</h1>
                <p className='leading-20 text-blue-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis esse neque quam ea, at beatae? Modi deserunt facilis dolorum!</p>
                <button className='flex text-nowrap hover:bg-sky-400 bg-zinc-200 p-2 w-52 '>Explore Me</button>
            </div>
    </div>
  )
}

export default Home