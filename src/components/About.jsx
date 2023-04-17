import React from 'react';

const About=()=>{
    return(
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div>

                    </div>
                    </div>
                    <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4 '>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>Hi. I'm Umakanth, nice to meet you. Please take a look around.</p>
                        </div>
                        <div>
                            <p>As a software engineer with 2 years of experience working as a Full Stack Developer at Enterprise Organizations. I have been responsible for solving business problems of different sectors by building scalable and effective web applications. I possess strong analytical and problem-solving skills and with Data Structure and Algorithm which are essential for Developer roles.
</p>

                        </div>
                    </div>
                

            </div>
        </div>
    )
}

export default About