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
                            <p>As a recent graduate with a degree in Computer Science, I possess strong analytical and problem-solving skills and with Data Structure and Algorithm which are essential for a software engineer role. In addition, I have experience with programming languages such as Java, Python, and Javascript. With my knowledge and skills, I am confident in my ability to excel in an entry-level software engineer position.
</p>

                        </div>
                    </div>
                

            </div>
        </div>
    )
}

export default About