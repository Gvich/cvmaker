import React from 'react';
import Image from "next/image";
import Link from "next/link";
import CvCards from "../resumeComponents/CvCards";

const HomeContent = () => {
    return (
        <div>
            <div className="bg-white pb-5 pt-2 max-w-2xl max-h-96 container mx-auto">
                <div
                    className="ml-auto mr-auto mt-12 items-center text-center max-w-[500px] lg:max-w-[650px] space-y-3">
                    <p className="text-blue-900 text-sm font-medium text-center">
                        ONLINE RESUME BUILDER
                    </p>
                    <div className="text-2xl text-gray-900 font-extrabold lg:text-4xl">
                        Only 2% of resumes make it past
                        the first round. Be in the top 2%
                    </div>
                    <p className="text-gray-900 text-md lg:text-xl">
                        Use professional field-tested resume templates that
                        follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try
                        now for free!
                    </p>
                    <Link href="/box/personal">
                        <button
                            className="bg-violet-700 text-white text-lg xl:text-xl font-semibold rounded-md py-2 px-4 xl:py-4 xl:px-7 hover:shadow-lg">
                            Create My Resume
                        </button>
                    </Link>
                </div>
            </div>

            <div className='bg-white container mx-auto mt-16'>
                <Image src='/Photo.svg' width='1528' height='412'/>
            </div>

            <div className='bg-white flex justify-center px-4 py-2'>
                <Image className='' src='/Chevrondown.svg' width='46' height='46'/>
            </div>

            <div className='bg-white container mx-auto mt-28 mb-28 '
                 style={{width: '1528px', height: '528px'}}
            >

            </div>

            <div className='bg-violet-700 flex-row'
                 style={{width: '100%', height: '1693px'}}
            >
                <div className='bg-violet-50' style={{height: 1}}></div>
                <div className='bg-white mt-28 flex justify-center' style={{width: '100%', height: '268px'}}>
                        {/*<h2 style={{border: '1px solid black'}}>TEXT</h2>*/}
                </div>
                <Link href={'/box/personal'}>
                    <div className='ml-10' >
                        <CvCards/>
                    </div>
                </Link>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="100%"  className='animation-svg animation'>
                <defs>
                    <pattern id="blocks" patternUnits="userSpaceOnUse" width="200" height="196">
                        <rect width="100" height="100" className="topleft black"/>
                        <rect width="100" height="100" className="topright white" x="100"/>
                        <rect width="100" height="100" className="bottomleft white" y="100"/>
                        <rect width="100" height="100" x="100" y="100" className="bottomright black"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blocks)"/>
            </svg>

            <div className=" pb-5 pt-2 container mx-auto mb-16 mt-16" style={{marginTop: '2px'}}>
                <div
                    style={{width: '850px', height: '325px'}}
                    className="ml-auto mr-auto mt-12 items-center text-center max-w-[887px] lg:max-w-[887px] space-y-3"
                >
                    <div className="text-2xl text-black font-extrabold lg:text-4xl">Only 2% of resumes make it past
                        the first round. Be in the top 2%
                    </div>
                    <p className="text-black text-md lg:text-xl mb-16">
                        Use professional field-tested resume templates that
                        follow the exact ‘resume rules’ employers look for.
                        Easy to use and done within minutes - try
                        now for free!
                    </p>
                    <Link href="/box/personal">
                        <button
                            className="bg-violet-700 text-white text-lg xl:text-xl font-semibold rounded-md py-2 px-4 xl:py-4 xl:px-7 hover:shadow-lg">
                            Create My Resume
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default HomeContent;
