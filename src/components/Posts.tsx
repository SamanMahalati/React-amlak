import React from 'react';
import { Link } from 'react-router-dom';

//components
import Post from './Post';

//Data
import homeData from '../utils/data';

//Mui
import { useMediaQuery, useTheme } from "../utils/Mui/mui"

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Posts = (props: any) => {
    const theme = useTheme();
    const smSize = useMediaQuery(theme.breakpoints.up('sm'));
    const mdSize = useMediaQuery(theme.breakpoints.up('md'));
    const lgSize = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        props.page === "Home" ?
            <section className='w-full px-4 py-8 font-IR max-w-screen-2xl my-0 mx-auto'>
                <div className='w-full text-center flex flex-col gap-4 mb-5'>
                    <h2 className='font-medium text-2xl'>املاک ویژه</h2>
                    <h5 className='font-normal'>بهترین املاکی که توسط ما انتخاب می شوند.</h5>
                </div>

                <Swiper slidesPerView={lgSize ? 4 : mdSize ? 3 : smSize ? 2 : 1} spaceBetween={30} pagination={{ clickable: true, }} modules={[Pagination]} >
                    {
                        homeData.map((item) =>
                            <SwiperSlide key={item.id}>
                                <Post data={item} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </section >
            :
            <section className='bg-white-200 w-full px-4 py-8 font-IR max-w-screen-2xl my-0 mx-auto'>
                <div className='flex items-center gap-x-3'>
                        <span>
                            <Link to="/">خانه</Link>
                        </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                    <span className='text-red'>تمام املاک</span>
                </div>
                <div className='grid grid-cols-1 gap-y-6 mt-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4'>
                    {
                        homeData.map(item => 
                            <Post data={item}/>
                        )
                    }
                </div>
            </section >
    );
};

export default Posts;