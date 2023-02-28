import React from 'react'
import java from '../assests/java.png'
import hiberbate from '../assests/hibernate.png'
import spring from '../assests/spring.png'
import microservice from '../assests/Microservice.png'
import mongo from '../assests/mongo.png'
import github from '../assests/github.png'
import html from '../assests/html.png'
import css from '../assests/css.png'
import react from '../assests/react.png'
import node from '../assests/node.png'
import js from '../assests/javascript.png'
import bootstrap from '../assests/Bootstrap.png'
import tailwind from '../assests/tailwind.png'
import aws from '../assests/aws.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]  text-gray-300 '>
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full '>
            <div >
                <p className='  text-4xl font-bold inline border-b-4 border-pink-600 '>Skill Set</p>
                <p className='py-4'>Back-end Technology</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={java} alt="JAVA icon"></img>
                <p className='my-4'>JAVA</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={hiberbate} alt="HIBERNATE icon"></img>
                <p className='my-4'>HIBERNATE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={spring} alt="spring boot icon"></img>
                <p className='my-4'>SPRING BOOT</p>
            </div>
        
       
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={microservice} alt="MICROSERVICE icon"></img>
                <p className='my-4'>MICROSERVICE</p>
            </div>
       
        
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mongo} alt="MICROSERVICE icon"></img>
                <p className='my-4'>MONGO DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={github} alt="GITHUB icon"></img>
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={aws} alt="AWS icon"></img>
                <p className='my-4'>AWS</p>
            </div>
            </div>
            <div >
                
                <p className='py-4'>Front-end Technology</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt="HTML icon"></img>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt="CSS icon"></img>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={js} alt="js icon"></img>
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={react} alt="REACT icon"></img>
                <p className='my-4'>REACT JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={node} alt="NODE icon"></img>
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={bootstrap} alt="BOOTSTRAP icon"></img>
                <p className='my-4'>BOOTSTRAP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={tailwind} alt="TAILWIND icon"></img>
                <p className='my-4'>TAILWIND</p>
            </div>

            </div>
        
        
            
       
        </div>
        

    </div>
  )
}

export default Skills