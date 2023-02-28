import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/2420bdf6-35eb-4b5e-9603-7dd8cc286b26' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className=' text-gray-300 py-4 '>Submit the form below or shoot me an email - reddy.58@wright.edu</p>

            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'></input>
            <input  className='bg-[#ccd6f6] p-2 my-4' type='email' placeholder='Email' name='email'></input>
            <textarea className='bg-[#ccd6f6] p-2' type='message' rows="10" placeholder='Message' ></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-3 py-1 my-8 mx-auto flex items-center'>Submit</button>
        </form>

    </div>
  )
}

export default Contact