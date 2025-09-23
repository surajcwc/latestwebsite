import '../Styles/Productivity.css'
import React from 'react';
import '../Styles/Button.css';  // Ensure correct path and casing
import Navbar from '../Components/Navbar';
import Imag from '../assets/bg-right.png'
import { Rocket } from 'lucide-react';

function Productivity() {
  return (
    <>
        <div className="productivity-hero h-[50%] ">
         <div className="pro-left ">
            <h1>Understand the Universe</h1>
            <p>[Our Mission]</p>
         </div>
         <div className="pro-right h-20">
            <img className='h-[20%]' src={Imag} alt="" />
         </div>
        </div>

        <div className="pro-second flex justify-evenly">
            <div className="pro-top w-[100%] flex justify-evenly">
                <div className="pro-top-left w-[80%] pt-[5%] pl-[10%] pb-[0%] pr-[10%]">
                    <h2 className='text-5xl font-bold'>Understand the Universe</h2>
                     <p>[Our Mission]</p>
                </div>
                <div className="pro-top-right w-[100%] pt-[5%] pl-[10%] pb-[0%] pr-[10%] ">
                    <h4 className='text-2xl font-bold'>Reasoning from First Principles</h4>
                    <p>We challenge conventional thinking by breaking down problems to their fundamental truths, grounded in logic.</p>
                </div>
                
            </div>
         
        </div>

        <div className="pro-middle flex justify-around pt-[5%] pl-[10%] pb-[10%] pr-[10%]">
            <div className="pro-middle-left flex flex-col gap-[1rem] p-[5%] pl-[0%]">
                <Rocket />
                <h4 className='text-xl font-semibold'>Reasoning from First Principles</h4>
                <p>We challenge conventional thinking by breaking down problems to their fundamental truths, grounded in logic.</p>
            </div>
            <div className="pro-middle-center flex flex-col gap-[1rem] border-r-1 border-l-1 border-[#353535] border-opacity-20   p-[5%]">
                        <Rocket />
                        <h4 className='text-xl font-semibold'>Reasoning from First Principles</h4>
                        <p>We challenge conventional thinking by breaking down problems to their fundamental truths, grounded in logic.</p>
            </div>
            <div className="pro-middle-right flex flex-col gap-[1rem]  p-[5%]">
                        <Rocket />
                        <h4 className='text-xl font-semibold'>Reasoning from First Principles</h4>
                        <p>We challenge conventional thinking by breaking down problems to their fundamental truths, grounded in logic.</p>
            </div>
            
        </div>

            





    </>
  );
}

export default Productivity;
